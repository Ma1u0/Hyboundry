const map = L.map('map').setView([20, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19
}).addTo(map);

const icons = {
  drone: L.icon({ iconUrl: 'icons/red_drone.png', iconSize: [32,32] }),
  jet: L.icon({ iconUrl: 'icons/red_jet.png', iconSize: [32,32] }),
  balloon: L.icon({ iconUrl: 'icons/red_balloon.png', iconSize: [32,32] })
};

const incidents = [
  { lat: 51, lng: 0, type: 'drone', text: 'Drone over UK' },
  { lat: 40, lng: -74, type: 'jet', text: 'Jet intercept USA' },
  { lat: 35, lng: 139, type: 'balloon', text: 'Balloon Japan' }
];

const markers = [];

incidents.forEach(i => {
  const marker = L.marker([i.lat, i.lng], { icon: icons[i.type] })
    .bindPopup(i.text)
    .addTo(map);
  marker.meta = i;
  markers.push(marker);
});
