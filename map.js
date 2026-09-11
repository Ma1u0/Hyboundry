document.addEventListener('DOMContentLoaded', () => {
  // ------------------------
  // 1ï¸âƒ£ Initialize map
  // ------------------------
  const map = L.map('map', { zoomControl: false }).setView([20, 0], 2);

  L.tileLayer('https://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 16,
    attribution: 'Esri, HERE, Garmin, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Reference layer adds place-name labels, roads, and borders on top of
  // the plain gray base — same muted look, just enough detail to orient by.
  L.tileLayer('https://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Light_Gray_Reference/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 16,
    pane: 'overlayPane'
  }).addTo(map);
  L.control.zoom({ position: 'bottomleft' }).addTo(map);

  // ------------------------
  // 2ï¸âƒ£ MarkerCluster group
  // ------------------------
  const markerCluster = L.markerClusterGroup();
  map.addLayer(markerCluster);

  // ------------------------
  // 3ï¸âƒ£ Icons
  // ------------------------
  const icons = {
    droneBrown: L.icon({ iconUrl: 'icons/brown_drone.png', iconSize: [28,28] }),
    droneRed: L.icon({ iconUrl: 'icons/red_drone.png', iconSize: [28,28] }),
    droneOrange: L.icon({ iconUrl: 'icons/orange_drone.png', iconSize: [28,28] }),
    droneYellow: L.icon({ iconUrl: 'icons/yellow_drone.png', iconSize: [28,28] }),
    droneGreen: L.icon({ iconUrl: 'icons/green_drone.png', iconSize: [28,28] }),
    droneBlue: L.icon({ iconUrl: 'icons/blue_drone.png', iconSize: [28,28] }),

    jetBrown: L.icon({ iconUrl: 'icons/brown_jet.png', iconSize: [28,28] }),
    jetRed: L.icon({ iconUrl: 'icons/red_jet.png', iconSize: [28,28] }),
    jetOrange: L.icon({ iconUrl: 'icons/orange_jet.png', iconSize: [28,28] }),
    jetYellow: L.icon({ iconUrl: 'icons/yellow_jet.png', iconSize: [28,28] }),
    jetGreen: L.icon({ iconUrl: 'icons/green_jet.png', iconSize: [28,28] }),
    jetBlue: L.icon({ iconUrl: 'icons/blue_jet.png', iconSize: [28,28] }),

    balloonBrown: L.icon({ iconUrl: 'icons/brown_balloon.png', iconSize: [28,28] }),
    balloonRed: L.icon({ iconUrl: 'icons/red_balloon.png', iconSize: [28,28] }),
    balloonOrange: L.icon({ iconUrl: 'icons/orange_balloon.png', iconSize: [28,28] }),
    balloonYellow: L.icon({ iconUrl: 'icons/yellow_balloon.png', iconSize: [28,28] }),
    balloonGreen: L.icon({ iconUrl: 'icons/green_balloon.png', iconSize: [28,28] }),
    balloonBlue: L.icon({ iconUrl: 'icons/blue_balloon.png', iconSize: [28,28] }),

    borderBrown: L.icon({ iconUrl: 'icons/brown_soldier.png', iconSize: [28,28] }),
    borderRed: L.icon({ iconUrl: 'icons/red_soldier.png', iconSize: [28,28] }),
    borderOrange: L.icon({ iconUrl: 'icons/orange_soldier.png', iconSize: [28,28] }),
    borderYellow: L.icon({ iconUrl: 'icons/yellow_soldier.png', iconSize: [28,28] }),
    borderGreen: L.icon({ iconUrl: 'icons/green_soldier.png', iconSize: [28,28] }),
    borderBlue: L.icon({ iconUrl: 'icons/blue_soldier.png', iconSize: [28,28] }),
  };

  // ------------------------
  // 4ï¸âƒ£ Markers array
  // ------------------------
  const markers = [];

  // ------------------------
  // 5ï¸âƒ£ Your incidents go here
  // ------------------------
  // Incident data now lives in incidents-data.js (shared with heatmap.js)
  const incidents = incidentsData;

  function riskCap(r){ return r.charAt(0).toUpperCase() + r.slice(1); }
  function getIcon(i){
    const key = i.type + riskCap(i.risk);
    return icons[key] || icons.droneYellow;
  }

  // ------------------------
  // Derive real year-month periods from each incident's date text (same
  // approach as heatmap.js) instead of trusting the separate year/month
  // fields, which are easy to get out of sync by hand on multi-date entries.
  // ------------------------
  const MONTH_ABBR = { jan:1, feb:2, mar:3, apr:4, may:5, jun:6, jul:7, aug:8, sep:9, oct:10, nov:11, dec:12 };
  function extractPeriodsFromDateString(str) {
    if (!str) return [];
    const re = /([A-Za-z]{3})[a-z]*\.?\s+(\d{4})/g;
    const out = [];
    let m;
    while ((m = re.exec(str)) !== null) {
      const mon = MONTH_ABBR[m[1].toLowerCase()];
      if (mon) out.push(`${m[2]}-${String(mon).padStart(2, '0')}`);
    }
    return out;
  }
  function formatPeriod(year, month) {
    if (year === undefined || year === null) return null;
    const y = String(year).trim();
    let mnum;
    if (month === undefined || month === null) mnum = 1;
    else {
      const digits = String(month).replace(/\D/g, '');
      mnum = digits === '' ? 1 : parseInt(digits, 10);
      if (Number.isNaN(mnum) || mnum < 1 || mnum > 12) mnum = 1;
    }
    return `${y}-${String(mnum).padStart(2, '0')}`;
  }
  // Fallback used only when an entry has no parseable date text at all.
  function periodsFromYearMonthFields(entry) {
    const years = Array.isArray(entry.year) ? entry.year : (entry.year !== undefined ? [entry.year] : []);
    const months = Array.isArray(entry.month) ? entry.month : (entry.month !== undefined ? [entry.month] : []);
    if (years.length === 0 && months.length === 0) return [];
    if (years.length === 1 && months.length > 1) return months.map(m => formatPeriod(years[0], m));
    if (months.length === 1 && years.length > 1) return years.map(y => formatPeriod(y, months[0]));
    return months.length > 0
      ? months.map((m, i) => formatPeriod(years[i] !== undefined ? years[i] : years[0], m)).filter(Boolean)
      : years.map(y => formatPeriod(y, 1)).filter(Boolean);
  }
  function periodsOf(entry) {
    let periods = [];
    if (Array.isArray(entry.incidents)) {
      entry.incidents.forEach(sub => periods.push(...extractPeriodsFromDateString(sub.date)));
    } else {
      periods.push(...extractPeriodsFromDateString(entry.date));
    }
    if (periods.length === 0) periods = periodsFromYearMonthFields(entry);
    return [...new Set(periods)];
  }

  // ------------------------
  // 6ï¸âƒ£ Add markers to cluster (handles multi-incidents)
  // ------------------------
  function riskDotColor(risk) {
    const colors = {
      brown: '#8A5A3C', red: 'var(--red, #A13D33)', orange: 'var(--amber, #B8862E)',
      yellow: '#D9B94A', green: '#4C8A5E', blue: '#3B6EA5'
    };
    return colors[risk] || '#8A909B';
  }

  incidents.forEach(i => {
    const riskDot = `<span class="popup-risk-dot" style="background:${riskDotColor(i.risk)}"></span>`;
    let popupHtml = `<b>${i.link ? `<a href="${i.link}" target="_blank">${i.country}</a>` : i.country}</b><br>`;
    
    if(i.note) {
      popupHtml += `<em>${i.note}</em>`;
      if(i.noteLink) popupHtml += ` <a href="${i.noteLink}" target="_blank">Source</a>`;
      popupHtml += '<br><br>';
    }

    if(Array.isArray(i.incidents)) {
      i.incidents.forEach((inc, idx) => {
        popupHtml += `<b>Incident ${idx + 1}</b><br>
                      ${riskDot}<span class="popup-meta-label">Type</span> ${inc.popupType}<br>
                      <span class="popup-meta-label">Date</span> ${inc.date}<br>
                      <span class="popup-meta-label">Details</span> ${inc.details}<br>
                      ${inc.link ? `<a href="${inc.link}" target="_blank">Source</a>` : ''}
                      <hr>`;
      });
    } else {
      popupHtml += `${riskDot}<span class="popup-meta-label">Type</span> ${i.popupType}<br>
                    <span class="popup-meta-label">Date</span> ${i.date}<br>
                    <span class="popup-meta-label">Details</span> ${i.details}<br>
                    ${i.link ? `<a href="${i.link}" target="_blank">Source</a>` : ''}`;
    }

    const marker = L.marker([i.lat, i.lng], { icon: getIcon(i) }).bindPopup(popupHtml, {
      maxHeight: 300,
      autoPan: true
    });

    marker.meta = i;
    marker.meta._periods = periodsOf(i);
    markers.push(marker);
    markerCluster.addLayer(marker);
  });

  // ------------------------
  // 6.5: Deep link support - if we arrived from the calendar's "View on
  // map" button (map.html?link=<source url>), find the matching incident,
  // zoom the cluster open to reveal it, and pop its popup.
  // ------------------------
  (function openLinkedIncident() {
    const params = new URLSearchParams(window.location.search);
    const target = params.get('link');
    if (!target) return;
    let decoded;
    try { decoded = decodeURIComponent(target); } catch (e) { decoded = target; }

    // Normalize away the differences that shouldn't matter for matching:
    // surrounding whitespace/quote typos, a trailing URL fragment (which can
    // get garbled by copy-paste encoding issues), and letter case.
    function normalizeLink(l) {
      if (!l) return '';
      return l.trim().replace(/^['"\s]+|['"\s]+$/g, '').split('#')[0].toLowerCase();
    }
    const normalizedTarget = normalizeLink(decoded);
    const match = markers.find(m => {
      const meta = m.meta;
      if (normalizeLink(meta.link) === normalizedTarget) return true;
      if (Array.isArray(meta.incidents)) {
        return meta.incidents.some(sub => normalizeLink(sub.link) === normalizedTarget);
      }
      return false;
    });

    if (match) {
      markerCluster.zoomToShowLayer(match, () => {
        match.openPopup();
      });
    }
  })();

  // ------------------------
  // 7ï¸âƒ£ Filter logic
  // ------------------------
function applyFilters() {
  markerCluster.clearLayers();

  const fActor = document.getElementById('f-actor').value;
  const fType = document.getElementById('f-type').value;
  const fLocation = document.getElementById('f-location').value;
  const fMonth = document.getElementById('f-month').value;
  const fYear = document.getElementById('f-year').value;

  const visible = markers.filter(m => {
    const { risk, type, place } = m.meta;

    const matchActor = fActor === 'any' || risk === fActor;
    const matchType = fType === 'any' || type === fType;
    const matchPlace = fLocation === 'any' || place === fLocation;

    // Match year+month together against the same real date - fixes
    // multi-date entries (e.g. one location hit in both Nov 2025 and
    // Jan 2026) that separate year/month array checks could mismatch.
    let matchMonthYear;
    if (fMonth === 'any' && fYear === 'any') {
      matchMonthYear = true;
    } else {
      const paddedMonth = fMonth === 'any' ? null : fMonth.padStart(2, '0');
      matchMonthYear = (m.meta._periods || []).some(p => {
        const [py, pm] = p.split('-');
        const matchY = fYear === 'any' || py === fYear;
        const matchM = paddedMonth === null || pm === paddedMonth;
        return matchY && matchM;
      });
    }

    return matchActor && matchType && matchPlace && matchMonthYear;
  });

  markerCluster.addLayers(visible);
}

  // ------------------------
  // 8ï¸âƒ£ Attach event listeners to filters
  // ------------------------
  document.querySelectorAll('#filters select').forEach(sel => {
    sel.addEventListener('change', applyFilters);
  });
});
