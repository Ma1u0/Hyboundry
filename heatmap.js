document.addEventListener('DOMContentLoaded', () => {

  // ------------------------
  // 1) Init map
  // ------------------------
  const map = L.map('map', { zoomControl: false }).setView([50, 15], 4);
  window.map = map;
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(map);
  L.control.zoom({ position: 'bottomleft' }).addTo(map);

  const heatLayer = L.heatLayer([], { radius: 28, blur: 22, maxZoom: 8 }).addTo(map);

  // ------------------------
  // 2) Helpers to read the shared incident data
  //    (incidentsData comes from incidents-data.js)
  // ------------------------
  // Known countries covered by this tracker (see info.html). Used to clean up
  // stray characters/typos in the "country" text field - if you add incidents
  // for a new country, it'll still show up fine, just won't get this cleanup.
  const KNOWN_COUNTRIES = [
    'Czech Republic', 'Netherlands', 'Lithuania', 'Bulgaria', 'Belgium',
    'Türkiye', 'Estonia', 'Finland', 'Germany', 'Ireland', 'Latvia',
    'Norway', 'Poland', 'Romania', 'Sweden', 'France', 'Spain', 'Denmark'
  ].sort((a, b) => b.length - a.length);

  // Some entries store year/month as parallel arrays, e.g.
  // year: ['2025','2026'], month: ['10','05'] means Oct 2025 AND May 2026 -
  // NOT every combination of the two. This pairs them up correctly.
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

  // Pull "Country" and "Location" out of a string like
  // "Elsenborn Military Base, Belgium 🇧🇪" -> { location: "Elsenborn Military Base", country: "Belgium" }
  function parseCountryLocation(str) {
    if (!str) return { location: 'Unknown', country: 'Unknown' };
    const parts = str.split(',').map(s => s.trim());
    const rawCountry = parts[parts.length - 1] || str;
    // strip flags/emoji/stray symbols, keep letters/spaces/hyphens/apostrophes
    let country = rawCountry.replace(/[^\p{L}\s'-]/gu, '').replace(/[ª´]+$/g, '').trim();
    if (!country) country = rawCountry.trim();
    const known = KNOWN_COUNTRIES.find(k => country.startsWith(k));
    if (known) country = known;
    const location = parts.length > 1 ? parts.slice(0, -1).join(', ') : country;
    return { location, country };
  }

  // ------------------------
  // 3) Build the sorted list of year-month periods present in the data
  // ------------------------
  const periodSet = new Set();
  incidentsData.forEach(entry => {
    periodsOf(entry).forEach(p => periodSet.add(p));
  });
  const periods = Array.from(periodSet).sort(); // "2025-09", "2025-10", ...

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

  // ------------------------
  // 4) Filtering + rendering for a given slider position
  // ------------------------
  function entryMatchesPeriod(entry, periodIndex, cumulative) {
    const targetPeriods = periodsOf(entry);
    if (cumulative) {
      const cutoff = periods[periodIndex];
      return targetPeriods.some(p => p <= cutoff);
    } else {
      const current = periods[periodIndex];
      return targetPeriods.includes(current);
    }
  }

  function render() {
    const periodIndex = parseInt(slider.value, 10);
    const cumulative = cumulativeBox.checked;

    if (periods.length === 0) {
      timeLabel.textContent = 'No dated incidents';
      return;
    }

    timeLabel.textContent = cumulative
      ? `Through ${periodLabel(periods[periodIndex])}`
      : periodLabel(periods[periodIndex]);

    const filtered = incidentsData.filter(e => entryMatchesPeriod(e, periodIndex, cumulative));

    // Heat layer points: [lat, lng, intensity]
    const points = filtered.map(e => [e.lat, e.lng, weightOf(e)]);
    heatLayer.setLatLngs(points);

    // Country / location breakdown
    const byCountry = {}; // country -> { count, locations: { name -> count } }
    filtered.forEach(e => {
      const { country, location } = parseCountryLocation(e.country);
      const w = weightOf(e);
      if (!byCountry[country]) byCountry[country] = { count: 0, locations: {} };
      byCountry[country].count += w;
      byCountry[country].locations[location] = (byCountry[country].locations[location] || 0) + w;
    });

    const total = Object.values(byCountry).reduce((s, c) => s + c.count, 0);
    document.getElementById('breakdown-total').textContent = `${total} incident${total === 1 ? '' : 's'} shown`;

    const sortedCountries = Object.entries(byCountry).sort((a, b) => b[1].count - a[1].count);

    const container = document.getElementById('breakdown-content');
    container.innerHTML = '';
    sortedCountries.forEach(([country, data]) => {
      const row = document.createElement('div');
      row.className = 'country-row';
      row.innerHTML = `<span>${country}</span><span class="country-count">${data.count}</span>`;

      const list = document.createElement('div');
      list.className = 'location-list';
      const sortedLocations = Object.entries(data.locations).sort((a, b) => b[1] - a[1]);
      sortedLocations.forEach(([loc, count]) => {
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

  slider.addEventListener('input', render);
  cumulativeBox.addEventListener('change', render);

  // ------------------------
  // 5) Prev / next / play controls
  // ------------------------
  document.getElementById('prevPeriod').addEventListener('click', () => {
    slider.value = Math.max(0, parseInt(slider.value, 10) - 1);
    render();
  });
  document.getElementById('nextPeriod').addEventListener('click', () => {
    slider.value = Math.min(slider.max, parseInt(slider.value, 10) + 1);
    render();
  });

  let playTimer = null;
  const playBtn = document.getElementById('playPause');
  playBtn.addEventListener('click', () => {
    if (playTimer) {
      clearInterval(playTimer);
      playTimer = null;
      playBtn.textContent = '▶ Play';
      return;
    }
    playBtn.textContent = '⏸ Pause';
    playTimer = setInterval(() => {
      let next = parseInt(slider.value, 10) + 1;
      if (next > parseInt(slider.max, 10)) next = 0;
      slider.value = next;
      render();
    }, 900);
  });

  render();
});
