// Initialize the map centered over Europe
var map = L.map('map').setView([54.5, 10], 5);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

/* =========================
   ICON FACTORY
========================= */
function createIcon(file) {
    return L.icon({
        iconUrl: `icons/${file}`,
        iconSize: [3600, 3600],
        iconAnchor: [18, 36],
        popupAnchor: [0, -30]
    });
}

/* =========================
   UAV ICONS
========================= */
const uavRed = createIcon("uav-red.png");
const uavOrange = createIcon("uav-orange.png");
const uavYellow = createIcon("uav-yellow.png");
const uavGreen = createIcon("uav-green.png");
const uavBlue = createIcon("uav-blue.png");

/* =========================
   JET ICONS
========================= */
const jetRed = createIcon("jet-red.png");
const jetOrange = createIcon("jet-orange.png");
const jetYellow = createIcon("jet-yellow.png");
const jetGreen = createIcon("jet-green.png");
const jetBlue = createIcon("jet-blue.png");

/* =========================
   BALLOON ICONS
========================= */
const balloonRed = createIcon("balloon-red.png");
const balloonOrange = createIcon("balloon-orange.png");
const balloonYellow = createIcon("balloon-yellow.png");
const balloonGreen = createIcon("balloon-green.png");
const balloonBlue = createIcon("balloon-blue.png");

// Example marker with UAV red
L.marker([55.6761, 12.5683], { icon: uavRed })
  .addTo(map)
  .bindPopup("Copenhagen – UAV Red Test");
