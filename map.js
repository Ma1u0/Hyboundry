// Initialize map
const map = L.map('map').setView([20, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19
}).addTo(map);

const icons = {
  droneRed: L.icon({ iconUrl: 'icons/red_drone.png', iconSize: [28, 28] }),
  droneYellow: L.icon({ iconUrl: 'icons/yellow_drone.png', iconSize: [28, 28] }),
  jetRed: L.icon({ iconUrl: 'icons/red_jet.png', iconSize: [28, 28] }),
  balloonBlue: L.icon({ iconUrl: 'icons/blue_balloon.png', iconSize: [28, 28] })
};

const incidents = [
  {
    lat: 49.74390,
    lng: 15.33811,
    icon: icons.droneYellow,
    type: 'drone',
    risk: 'yellow',
    date: '2025-09-10',
    details: "Czech army reported drone sightings.",
    link: "https://www.reuters.com/...",
    country: "Czech Republic 🇨🇿"
  },
  {
    lat: 40.7128,
    lng: -74.0060,
    icon: icons.jetRed,
    type: 'jet',
    risk: 'red',
    date: '2025-10-12',
    details: "Jet intercepted over US airspace.",
    link: "https://www.example.com",
    country: "USA 🇺🇸"
  },
  {
    lat: 35.6895,
    lng: 139.6917,
    icon: icons.balloonBlue,
    type: 'balloon',
    risk: 'blue',
    date: '2025-11-05',
    details: "Balloon spotted over Japan.",
    link: "https://www.example.com",
    country: "Japan 🇯🇵"
  }
];

const markers = [];

incidents.forEach(i => {
  const marker = L.marker([i.lat, i.lng], { icon: i.icon })
    .bindPopup(`
      <b><a href="${i.link}" target="_blank">${i.country}</a></b><br>
      <b>Date/Time:</b> ${i.date} <br>
      <b>Type:</b> ${i.type} <br>
      <b>Details:</b> ${i.details} <br>
    `)
    .addTo(map);

  marker.meta = i; // store metadata for filtering
  markers.push(marker);
});

function applyFilters() {
  const showDrone = document.querySelector('#filters input[value="drone"]')?.checked ?? true;
  const showJet = document.querySelector('#filters input[value="jet"]')?.checked ?? true;
  const showBalloon = document.querySelector('#filters input[value="balloon"]')?.checked ?? true;

  markers.forEach(m => {
    const type = m.meta.type;
    if ((type === 'drone' && showDrone) ||
        (type === 'jet' && showJet) ||
        (type === 'balloon' && showBalloon)) {
      map.addLayer(m);
    } else {
      map.removeLayer(m);
    }
  });
}

// Add event listeners
document.querySelectorAll('#filters input[type="checkbox"]').forEach(cb => {
  cb.addEventListener('change', applyFilters);
});
