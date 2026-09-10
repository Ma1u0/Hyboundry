document.addEventListener('DOMContentLoaded', () => {

  // ------------------------
  // 1) Init map
  // ------------------------
  const map = L.map('map', { zoomControl: false }).setView([50, 15], 4);
  window.map = map;
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors | Boundaries: geoBoundaries.org (CC-BY 4.0)'
  }).addTo(map);
  L.control.zoom({ position: 'bottomleft' }).addTo(map);

  let geoLayer = null; // current choropleth layer

  // ------------------------
  // 2) Country name <-> ISO3 mapping
  //    Covers all of Europe (bundled in boundaries-data.js), even though
  //    incidents-data.js currently only uses a subset of these.
  // ------------------------
  const COUNTRY_ISO3 = {
    'Albania': 'ALB', 'Andorra': 'AND', 'Austria': 'AUT', 'Belgium': 'BEL',
    'Bulgaria': 'BGR', 'Bosnia and Herzegovina': 'BIH', 'Switzerland': 'CHE',
    'Cyprus': 'CYP', 'Czech Republic': 'CZE', 'Germany': 'DEU', 'Denmark': 'DNK',
    'Spain': 'ESP', 'Estonia': 'EST', 'Finland': 'FIN', 'France': 'FRA',
    'United Kingdom': 'GBR', 'Gibraltar': 'GIB', 'Greece': 'GRC', 'Croatia': 'HRV',
    'Hungary': 'HUN', 'Ireland': 'IRL', 'Iceland': 'ISL', 'Italy': 'ITA',
    'Liechtenstein': 'LIE', 'Lithuania': 'LTU', 'Luxembourg': 'LUX', 'Latvia': 'LVA',
    'Monaco': 'MCO', 'North Macedonia': 'MKD', 'Malta': 'MLT', 'Montenegro': 'MNE',
    'Netherlands': 'NLD', 'Norway': 'NOR', 'Poland': 'POL', 'Portugal': 'PRT',
    'Romania': 'ROU', 'San Marino': 'SMR', 'Serbia': 'SRB', 'Slovakia': 'SVK',
    'Slovenia': 'SVN', 'Sweden': 'SWE', 'Türkiye': 'TUR', 'Vatican City': 'VAT',
    'Kosovo': 'XKX'
  };
  const KNOWN_COUNTRIES = Object.keys(COUNTRY_ISO3).sort((a, b) => b.length - a.length);

  const MONTH_ABBR = { jan:1, feb:2, mar:3, apr:4, may:5, jun:6, jul:7, aug:8, sep:9, oct:10, nov:11, dec:12 };
  const MS_PER_WEEK = 7 * 24 * 60 * 60 * 1000;
  const REF_MONDAY = Date.UTC(2020, 0, 6); // a known Monday, used as a fixed alignment point

  // Snap any UTC-millis timestamp to the start (Monday 00:00) of its week.
  function weekStartMs(ms) {
    const weeksSinceRef = Math.floor((ms - REF_MONDAY) / MS_PER_WEEK);
    return REF_MONDAY + weeksSinceRef * MS_PER_WEEK;
  }
  function weekKeyFromYMD(year, month, day) {
    const ms = weekStartMs(Date.UTC(year, month - 1, day));
    const d = new Date(ms);
    return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, '0')}-${String(d.getUTCDate()).padStart(2, '0')}`;
  }

  // Pull "Day Month Year" out of a human-written date string like
  // "5 Nov 2025, 22:00 - 22:45" or "08 - 12 Jan 2026" (uses the first day of
  // a range). This is what the person actually typed and proofread, so it's
  // far more reliable than the separate year/month fields.
  function extractPeriodsFromDateString(str) {
    if (!str) return [];
    // Strip uncertainty markers like "25? Sep 2025" so the stated day still counts.
    const cleaned = str.replace(/\?/g, '');
    const re = /(\d{1,2})(?:\s*[-/]\s*\d{1,2})?\s+([A-Za-z]{3})[a-z]*\.?\s+(\d{4})/g;
    const out = [];
    let m;
    while ((m = re.exec(cleaned)) !== null) {
      const day = parseInt(m[1], 10);
      const mon = MONTH_ABBR[m[2].toLowerCase()];
      const year = parseInt(m[3], 10);
      if (mon && day >= 1 && day <= 31) out.push(weekKeyFromYMD(year, mon, day));
    }
    return out;
  }

  // Fallback used only when an entry has no parseable day+month+year text at
  // all (defaults to the 1st of whichever month the year/month fields give).
  function periodsFromYearMonthFields(entry) {
    const years = Array.isArray(entry.year) ? entry.year : (entry.year !== undefined ? [entry.year] : []);
    const months = Array.isArray(entry.month) ? entry.month : (entry.month !== undefined ? [entry.month] : []);
    if (years.length === 0 && months.length === 0) return [];
    function toWeek(y, m) {
      const digits = m === undefined || m === null ? '' : String(m).replace(/\D/g, '');
      let mnum = digits === '' ? 1 : parseInt(digits, 10);
      if (Number.isNaN(mnum) || mnum < 1 || mnum > 12) mnum = 1;
      return weekKeyFromYMD(parseInt(y, 10), mnum, 1);
    }
    if (years.length === 1 && months.length > 1) return months.map(m => toWeek(years[0], m));
    if (months.length === 1 && years.length > 1) return years.map(y => toWeek(y, months[0]));
    return months.length > 0
      ? months.map((m, i) => toWeek(years[i] !== undefined ? years[i] : years[0], m))
      : years.map(y => toWeek(y, 1));
  }

  function subPeriodsOf(entry) {
    let periods = [];
    if (Array.isArray(entry.incidents)) {
      entry.incidents.forEach(sub => periods.push(...extractPeriodsFromDateString(sub.date)));
    } else {
      periods.push(...extractPeriodsFromDateString(entry.date));
    }
    if (periods.length === 0) {
      // No usable date text (rare) - fall back to the year/month fields.
      periods = periodsFromYearMonthFields(entry);
    }
    return periods; // NOT deduplicated - each element is one real incident occurrence
  }

  // Distinct weeks this entry has any data in (used to build the timeline).
  function periodsOf(entry) {
    return [...new Set(subPeriodsOf(entry))];
  }

  // How many of this entry's individual incidents actually fall within the
  // period currently selected on the slider - NOT the entry's total incident
  // count. A location with incidents spread across several weeks/months must
  // only contribute the ones that happened in the period being viewed.
  function weightForPeriod(entry, periodIndex, cumulative) {
    const sub = subPeriodsOf(entry);
    if (sub.length === 0 || periods.length === 0) return 0;
    const cutoff = periods[periodIndex];
    return cumulative ? sub.filter(p => p <= cutoff).length : sub.filter(p => p === cutoff).length;
  }

  function parseCountryLocation(str) {
    if (!str) return { location: 'Unknown', country: 'Unknown' };
    const parts = str.split(',').map(s => s.trim());
    const rawCountry = parts[parts.length - 1] || str;
    let country = rawCountry.replace(/[^\p{L}\s'-]/gu, '').replace(/[ª´]+$/g, '').trim();
    if (!country) country = rawCountry.trim();
    const known = KNOWN_COUNTRIES.find(k => country.startsWith(k));
    if (known) country = known;
    const location = parts.length > 1 ? parts.slice(0, -1).join(', ') : country;
    return { location, country };
  }

  // ------------------------
  // 3) Point-in-polygon (simple ray casting, handles holes + MultiPolygon)
  // ------------------------
  function pointInRing(pt, ring) {
    let inside = false;
    for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
      const xi = ring[i][0], yi = ring[i][1];
      const xj = ring[j][0], yj = ring[j][1];
      const intersect = ((yi > pt[1]) !== (yj > pt[1])) &&
        (pt[0] < (xj - xi) * (pt[1] - yi) / (yj - yi) + xi);
      if (intersect) inside = !inside;
    }
    return inside;
  }
  function pointInPolygonCoords(pt, coords) {
    if (!pointInRing(pt, coords[0])) return false;
    for (let k = 1; k < coords.length; k++) if (pointInRing(pt, coords[k])) return false;
    return true;
  }
  function pointInFeature(pt, geometry) {
    if (!geometry) return false;
    if (geometry.type === 'Polygon') return pointInPolygonCoords(pt, geometry.coordinates);
    if (geometry.type === 'MultiPolygon') return geometry.coordinates.some(poly => pointInPolygonCoords(pt, poly));
    return false;
  }

  // ------------------------
  // 4) Boundaries now come bundled from boundaries-data.js - no network
  //    fetches, so the map is fast from the very first visit.
  // ------------------------
  const adm0Features = boundariesData.adm0;
  const adm1FeaturesByIso = {};
  boundariesData.subdivisions.forEach(f => {
    const iso = f.properties.shapeGroup;
    if (!adm1FeaturesByIso[iso]) adm1FeaturesByIso[iso] = [];
    adm1FeaturesByIso[iso].push(f);
  });

  // Tag each incident entry with { iso3, admin1Name }
  function tagIncidents() {
    incidentsData.forEach(entry => {
      const { country } = parseCountryLocation(entry.country);
      const iso3 = COUNTRY_ISO3[country];
      entry._iso3 = iso3 || null;
      entry._admin1 = null;
      if (iso3 && adm1FeaturesByIso[iso3] && typeof entry.lng === 'number' && typeof entry.lat === 'number') {
        const pt = [entry.lng, entry.lat];
        const match = adm1FeaturesByIso[iso3].find(f => pointInFeature(pt, f.geometry));
        if (match) entry._admin1 = match.properties.shapeName;
      }
    });
  }

  // ------------------------
  // 5) Time period slider
  // ------------------------
  const periodSet = new Set();
  incidentsData.forEach(entry => periodsOf(entry).forEach(p => {
    if (p) periodSet.add(p);
  }));
  const periods = Array.from(periodSet).sort();
  const monthAbbrShort = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  function periodLabel(p) {
    // p is the Monday of the week, as "YYYY-MM-DD"
    const [y, m, d] = p.split('-').map(n => parseInt(n, 10));
    const start = new Date(Date.UTC(y, m - 1, d));
    const end = new Date(start.getTime() + 6 * 24 * 60 * 60 * 1000);
    const sM = monthAbbrShort[start.getUTCMonth()], sD = start.getUTCDate(), sY = start.getUTCFullYear();
    const eM = monthAbbrShort[end.getUTCMonth()], eD = end.getUTCDate(), eY = end.getUTCFullYear();
    if (sY !== eY) return `${sM} ${sD}, ${sY} – ${eM} ${eD}, ${eY}`;
    if (sM !== eM) return `${sM} ${sD} – ${eM} ${eD}, ${sY}`;
    return `${sM} ${sD}–${eD}, ${sY}`;
  }

  const slider = document.getElementById('time-slider');
  const timeLabel = document.getElementById('time-label');
  const cumulativeBox = document.getElementById('cumulative');
  slider.max = Math.max(periods.length - 1, 0);
  slider.value = slider.max;

  // ------------------------
  // 6) Color scale
  // ------------------------
  function colorFor(count, max) {
    // Make zero incidents visually distinct from the very light colors used for low counts.
    // Return a clean white for zero so it contrasts clearly with "1 incident" on the palette.
    if (count === 0) return '#ffffff';
    // If count is absent/undefined/null, fall back to the previous neutral gray.
    if (!count && count !== 0) return '#eeeeee';

    // Use a non-linear scale (sqrt) so small positive counts (e.g. 1) appear darker than
    // with a purely linear interpolation and therefore stand out more from zero.
    const t = max > 0 ? Math.sqrt(count / max) : 0;
    const c1 = [237, 239, 241], c2 = [178, 42, 33];
    const rgb = c1.map((v, i) => Math.round(v + (c2[i] - v) * t));
    return `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
  }

  // ------------------------
  // 7) Render (choropleth + breakdown panel), driven by slider/mode
  // ------------------------
  let mode = 'country'; // 'country' | 'subdivision'

  function render() {
    if (periods.length === 0) { timeLabel.textContent = 'No dated incidents'; return; }
    const periodIndex = parseInt(slider.value, 10);
    const cumulative = cumulativeBox.checked;
    timeLabel.textContent = cumulative
      ? `Through ${periodLabel(periods[periodIndex])}`
      : periodLabel(periods[periodIndex]);

    const countByIso = {};
    const countByRegion = {};
    const byCountryBreakdown = {};
    incidentsData.forEach(e => {
      const w = weightForPeriod(e, periodIndex, cumulative);
      if (w === 0) return;
      const { country, location } = parseCountryLocation(e.country);
      if (!byCountryBreakdown[country]) byCountryBreakdown[country] = { count: 0, locations: {} };
      byCountryBreakdown[country].count += w;
      byCountryBreakdown[country].locations[location] = (byCountryBreakdown[country].locations[location] || 0) + w;

      if (e._iso3) {
        countByIso[e._iso3] = (countByIso[e._iso3] || 0) + w;
        if (e._admin1) {
          const key = `${e._iso3}::${e._admin1}`;
          countByRegion[key] = (countByRegion[key] || 0) + w;
        }
      }
    });

    if (geoLayer) { map.removeLayer(geoLayer); geoLayer = null; }

    if (mode === 'country') {
      const max = Math.max(0, ...Object.values(countByIso));
      geoLayer = L.geoJSON(adm0Features, {
        style: f => {
          const iso = f.properties.shapeGroup || f.properties.shapeISO;
          const count = countByIso[iso] || 0;
          return { fillColor: colorFor(count, max), weight: 1, color: '#888', fillOpacity: 0.85 };
        },
        onEachFeature: (f, layer) => {
          const iso = f.properties.shapeGroup || f.properties.shapeISO;
          const count = countByIso[iso] || 0;
          layer.bindTooltip(`${f.properties.shapeName}: ${count} incident${count === 1 ? '' : 's'}`);
        }
      }).addTo(map);
    } else {
      const allRegionFeatures = [];
      Object.values(adm1FeaturesByIso).forEach(feats => feats.forEach(f => allRegionFeatures.push(f)));
      const max = Math.max(0, ...Object.values(countByRegion));
      geoLayer = L.geoJSON(allRegionFeatures, {
        style: f => {
          const key = `${f.properties.shapeGroup}::${f.properties.shapeName}`;
          const count = countByRegion[key] || 0;
          return { fillColor: colorFor(count, max), weight: 0.6, color: '#999', fillOpacity: 0.85 };
        },
        onEachFeature: (f, layer) => {
          const key = `${f.properties.shapeGroup}::${f.properties.shapeName}`;
          const count = countByRegion[key] || 0;
          layer.bindTooltip(`${f.properties.shapeName}: ${count} incident${count === 1 ? '' : 's'}`);
        }
      }).addTo(map);
    }

    const total = Object.values(byCountryBreakdown).reduce((s, c) => s + c.count, 0);
    document.getElementById('breakdown-total').textContent = `${total} incident${total === 1 ? '' : 's'} shown`;
    const sortedCountries = Object.entries(byCountryBreakdown).sort((a, b) => b[1].count - a[1].count);
    const container = document.getElementById('breakdown-content');
    container.innerHTML = '';
    sortedCountries.forEach(([country, data]) => {
      const row = document.createElement('div');
      row.className = 'country-row';
      row.innerHTML = `<span>${country}</span><span class="country-count">${data.count}</span>`;
      const list = document.createElement('div');
      list.className = 'location-list';
      Object.entries(data.locations).sort((a, b) => b[1] - a[1]).forEach(([loc, count]) => {
        const locRow = document.createElement('div');
        locRow.className = 'location-row';
        locRow.innerHTML = `<span>${loc}</span><span>${count}</span>`;
        list.appendChild(locRow);
      });
      row.addEventListener('click', () => list.classList.toggle('open'));
      container.appendChild(row);
      container.appendChild(list);
    });
  }

  // ------------------------
  // 8) Controls
  // ------------------------
  slider.addEventListener('input', render);
  cumulativeBox.addEventListener('change', render);
  document.getElementById('prevPeriod').addEventListener('click', () => {
    slider.value = Math.max(0, parseInt(slider.value, 10) - 1); render();
  });
  document.getElementById('nextPeriod').addEventListener('click', () => {
    slider.value = Math.min(slider.max, parseInt(slider.value, 10) + 1); render();
  });
  let playTimer = null;
  const playBtn = document.getElementById('playPause');
  playBtn.addEventListener('click', () => {
    if (playTimer) { clearInterval(playTimer); playTimer = null; playBtn.textContent = '▶ Play'; return; }
    playBtn.textContent = '⏸ Pause';
    playTimer = setInterval(() => {
      let next = parseInt(slider.value, 10) + 1;
      if (next > parseInt(slider.max, 10)) next = 0;
      slider.value = next;
      render();
    }, 900);
  });
  document.getElementById('modeCountry').addEventListener('click', () => setMode('country'));
  document.getElementById('modeSubdivision').addEventListener('click', () => setMode('subdivision'));
  function setMode(m) {
    mode = m;
    document.getElementById('modeCountry').classList.toggle('active', m === 'country');
    document.getElementById('modeSubdivision').classList.toggle('active', m === 'subdivision');
    render();
  }

  // ------------------------
  // 9) Boot - instant, no fetching needed
  // ------------------------
  tagIncidents();
  render();
});
