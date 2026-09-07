document.addEventListener('DOMContentLoaded', () => {
  // ------------------------
  // 1ï¸âƒ£ Initialize map
  // ------------------------
  const map = L.map('map', { zoomControl: false }).setView([20, 0], 2);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(map);
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
  // 6ï¸âƒ£ Add markers to cluster (handles multi-incidents)
  // ------------------------
  incidents.forEach(i => {
    let popupHtml = `<b>${i.link ? `<a href="${i.link}" target="_blank">${i.country}</a>` : i.country}</b><br>`;
    
    if(i.note) {
      popupHtml += `<em>${i.note}</em>`;
      if(i.noteLink) popupHtml += ` <a href="${i.noteLink}" target="_blank">Source</a>`;
      popupHtml += '<br><br>';
    }

    if(Array.isArray(i.incidents)) {
      i.incidents.forEach((inc, idx) => {
        popupHtml += `<b>Incident ${idx + 1}</b><br>
                      <b>Type:</b> ${inc.popupType}<br>
                      <b>Date:</b> ${inc.date}<br>
                      <b>Details:</b> ${inc.details}<br>
                      ${inc.link ? `<a href="${inc.link}" target="_blank">Source</a>` : ''}
                      <hr>`;
      });
    } else {
      popupHtml += `<b>Type:</b> ${i.popupType}<br>
                    <b>Date:</b> ${i.date}<br>
                    <b>Details:</b> ${i.details}<br>
                    ${i.link ? `<a href="${i.link}" target="_blank">Source</a>` : ''}`;
    }

    const marker = L.marker([i.lat, i.lng], { icon: getIcon(i) }).bindPopup(popupHtml, {
      maxHeight: 300,
      autoPan: true
    });

    marker.meta = i;
    markers.push(marker);
    markerCluster.addLayer(marker);
  });

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
    const { risk, type, place, month, year } = m.meta;

    const matchActor = fActor === 'any' || risk === fActor;
    const matchType = fType === 'any' || type === fType;
    const matchPlace = fLocation === 'any' || place === fLocation;

    // handle month as string or array
    let matchMonth = false;
    if (fMonth === 'any') {
      matchMonth = true;
    } else if (Array.isArray(month)) {
      matchMonth = month.includes(fMonth.padStart(2,'0'));
    } else {
      matchMonth = month === fMonth.padStart(2,'0');
    }

    const matchYear = fYear === 'any' || year === fYear;

    return matchActor && matchType && matchPlace && matchMonth && matchYear;
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
