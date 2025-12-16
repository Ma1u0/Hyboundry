const map = L.map('map').setView([20, 0], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(map);

// Icons
const icons = {
  drone: L.icon({ iconUrl: 'icons/red_drone.png', iconSize: [32,32] }),
  jet: L.icon({ iconUrl: 'icons/red_jet.png', iconSize: [32,32] }),
  balloon: L.icon({ iconUrl: 'icons/red_balloon.png', iconSize: [32,32] })
};

// Marker data
const incidents = [
  { lat: 51, lng: 0, type: 'drone', text: 'Drone UK' },
  { lat: 40, lng: -74, type: 'jet', text: 'Jet USA' },
  { lat: 35, lng: 139, type: 'balloon', text: 'Balloon Japan' }
];

// Create markers and store them
const markers = incidents.map(i => {
  const m = L.marker([i.lat, i.lng], { icon: icons[i.type] }).bindPopup(i.text);
  m.type = i.type;
  m.addTo(map);
  return m;
});

// Filter function
function applyFilters() {
  const checkedTypes = Array.from(document.querySelectorAll('#filters input[type="checkbox"]:checked'))
    .map(cb => cb.dataset.type);

  markers.forEach(m => {
    if (checkedTypes.includes(m.type)) {
      map.addLayer(m);
    } else {
      map.removeLayer(m);
    }
  });
}

// Add event listeners to filter checkboxes
document.querySelectorAll('#filters input[type="checkbox"]').forEach(cb => {
  cb.addEventListener('change', applyFilters);
});
