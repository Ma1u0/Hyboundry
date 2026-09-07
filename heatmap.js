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

  function periodsOf(entry) {
    const years = Array.isArray(entry.year) ? entry.year : [entry.year];
    const months = Array.isArray(entry.month) ? entry.month : [entry.month];
    if (years.length === 1 && months.length > 1) {
      return months.map(m => `${years[0]}-${String(m).padStart(2, '0')}`);
    }
    if (months.length === 1 && years.length > 1) {
      return years.map(y => `${y}-${String(months[0]).padStart(2, '0')}`);
    }
    return months.map((m, i) => `${years[i] !== undefined ? years[i] : years[0]}-${String(m).padStart(2, '0')}`);
  }

  function weightOf(entry) {
    return Array.isArray(entry.incidents) ? entry.incidents.length : 1;
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
  incidentsData.forEach(entry => periodsOf(entry).forEach(p => periodSet.add(p)));
  const periods = Array.from(periodSet).sort();
  const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  function periodLabel(p) {
    const [y, m] = p.split('-');
    return `${monthNames[parseInt(m, 10) - 1]} ${y}`;
  }

  const slider = document.getElementById('time-slider');
  const timeLabel = document.getElementById('time-label');
  const cumulativeBox = document.getElementById('cumulative');
  slider.max = Math.max(periods.length - 1, 0);
  slider.value = slider.max;

  function entryMatchesPeriod(entry, periodIndex, cumulative) {
    const targetPeriods = periodsOf(entry);
    if (cumulative) {
      const cutoff = periods[periodIndex];
      return targetPeriods.some(p => p <= cutoff);
    }
    return targetPeriods.includes(periods[periodIndex]);
  }

  // ------------------------
  // 6) Color scale
  // ------------------------
  function colorFor(count, max) {
    if (!count) return '#eeeeee';
    const t = max > 0 ? count / max : 0;
    const c1 = [255, 237, 214], c2 = [163, 0, 0];
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

    const filtered = incidentsData.filter(e => entryMatchesPeriod(e, periodIndex, cumulative));

    const countByIso = {};
    const countByRegion = {};
    const byCountryBreakdown = {};
    filtered.forEach(e => {
      const w = weightOf(e);
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
