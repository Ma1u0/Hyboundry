document.addEventListener('DOMContentLoaded', () => {
  // ------------------------
  // 1️⃣ Initialize map
  // ------------------------
  const map = L.map('map', { zoomControl: false }).setView([20, 0], 2);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
  }).addTo(map);

  L.control.zoom({ position: 'bottomleft' }).addTo(map);

  // ------------------------
  // 2️⃣ MarkerCluster group
  // ------------------------
  const markerCluster = L.markerClusterGroup();
  map.addLayer(markerCluster);

  // ------------------------
  // 3️⃣ Icons
  // ------------------------
  const icons = {
    droneRed: L.icon({ iconUrl: 'icons/red_drone.png', iconSize: [28,28] }),
    droneOrange: L.icon({ iconUrl: 'icons/orange_drone.png', iconSize: [28,28] }),
    droneYellow: L.icon({ iconUrl: 'icons/yellow_drone.png', iconSize: [28,28] }),
    droneGreen: L.icon({ iconUrl: 'icons/green_drone.png', iconSize: [28,28] }),
    droneBlue: L.icon({ iconUrl: 'icons/blue_drone.png', iconSize: [28,28] }),
    jetRed: L.icon({ iconUrl: 'icons/red_jet.png', iconSize: [28,28] }),
    jetOrange: L.icon({ iconUrl: 'icons/orange_jet.png', iconSize: [28,28] }),
    jetYellow: L.icon({ iconUrl: 'icons/yellow_jet.png', iconSize: [28,28] }),
    jetGreen: L.icon({ iconUrl: 'icons/green_jet.png', iconSize: [28,28] }),
    jetBlue: L.icon({ iconUrl: 'icons/blue_jet.png', iconSize: [28,28] }),
    balloonRed: L.icon({ iconUrl: 'icons/red_balloon.png', iconSize: [28,28] }),
    balloonOrange: L.icon({ iconUrl: 'icons/orange_balloon.png', iconSize: [28,28] }),
    balloonYellow: L.icon({ iconUrl: 'icons/yellow_balloon.png', iconSize: [28,28] }),
    balloonGreen: L.icon({ iconUrl: 'icons/green_balloon.png', iconSize: [28,28] }),
    balloonBlue: L.icon({ iconUrl: 'icons/blue_balloon.png', iconSize: [28,28] }),
    borderRed: L.icon({ iconUrl: 'icons/red_soldier.png', iconSize: [28,28] }),
    borderOrange: L.icon({ iconUrl: 'icons/orange_soldier.png', iconSize: [28,28] }),
    borderYellow: L.icon({ iconUrl: 'icons/yellow_soldier.png', iconSize: [28,28] }),
    borderGreen: L.icon({ iconUrl: 'icons/green_soldier.png', iconSize: [28,28] }),
    borderBlue: L.icon({ iconUrl: 'icons/blue_soldier.png', iconSize: [28,28] }),
  };

  // ------------------------
  // 4️⃣ Markers array
  // ------------------------
  const markers = [];

  // ------------------------
  // 5️⃣ Your incidents go here
  // ------------------------
  const incidents = [
    {
      lat: 40.04769,
      lng: 27.96799,
      icon: icons.droneYellow,
      type: 'drone',
      risk: 'yellow',
      place: 'others',
      year: '2025',
      month: '12',
      popupType: 'Drone incursion / crash site',
      date: 'Found 10 Dec in the evening, reported 20 Dec 2025',
      details: "A crashed, unidentified UAV was found by citizens in the Balıkesir’s Manyas district in an uninhabited field. <br> The drone is a Russian Merlin VR drone, which is used for reconnaissance and has a range of ~600km",
      link: "https://www.hurriyet.com.tr/gundem/balikesirde-insansiz-hava-araci-dustu-inceleme-icin-ankaraya-gonderildi-43060797",
      country: "Manyas, Turkey 🇹🇷"
    },
    // Add more incidents below using the same structure
  ];

  // ------------------------
  // 6️⃣ Add markers to cluster
  // ------------------------
  incidents.forEach(i => {
    const popupHtml = `
      <b>${i.link ? `<a href="${i.link}" target="_blank">${i.country}</a>` : i.country}</b><br>
      <b>Type:</b> ${i.popupType}<br>
      <b>Date:</b> ${i.date}<br>
      <b>Details:</b> ${i.details}<br>
      ${i.link ? `<a href="${i.link}" target="_blank">Source</a>` : ''}
    `;

    const marker = L.marker([i.lat, i.lng], { icon: i.icon }).bindPopup(popupHtml, {
      maxHeight: 300,
      autoPan: true
    });

    marker.meta = i;
    markers.push(marker);
    markerCluster.addLayer(marker);
  });

  // ------------------------
  // 7️⃣ Filter logic (optional)
  // ------------------------
  function applyFilters() {
    markerCluster.clearLayers();

    const visible = markers.filter(m => {
      // Example: always show all for now
      return true;
    });

    markerCluster.addLayers(visible);
  }

  document.querySelectorAll('#filters input[type="checkbox"]').forEach(cb => {
    cb.addEventListener('change', applyFilters);
  });
});
