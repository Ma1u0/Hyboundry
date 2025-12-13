// Initialize the map centered over Europe
var map = L.map('map').setView([54.5, 10], 5);

// Base map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
    maxZoom: 19
}).addTo(map);

/* =========================
   ICON SETUP (ADD HERE)
========================= */

// Icon factory
function createIcon(file) {
    return L.icons({
        iconUrl: `icons/${file}`,
        iconSize: [36, 36],
        iconAnchor: [18, 36],
        popupAnchor: [0, -30]
    });
}

// UAV icons
const uavRed = createIcon("uav-red.png");
const uavOrange = createIcon("uav-orange.png");
const uavYellow = createIcon("uav-yellow.png");
const uavBlue = createIcon("uav-blue.png");
const uavGreen = createIcon("uav-green.png");

// Jet icons
const jetRed = createIcon("jet-red.png");
const jetOrange = createIcon("jet-orange.png");
const jetYellow = createIcon("jet-yellow.png");
const jetBlue = createIcon("jet-blue.png");
const jetGreen = createIcon("jet-green.png");

// Balloon icons
const balloonRed = createIcon("balloon-red.png");
const balloonOrange = createIcon("balloon-orange.png");
const balloonYellow = createIcon("balloon-yellow.png");
const balloonBlue = createIcon("balloon-blue.png");
const balloonGreen = createIcon("balloon-green.png");

/* =========================
   MARKERS (BELOW THIS)
========================= */

// Example marker
L.marker([55.6761, 12.5683], { icon: uavRed })  // Coordinates for Copenhagen
    .addTo(map)                                  // Add marker to the map
    .bindPopup("<b>Copenhagen Airport</b><br>Confirmed Russian UAV<br>22 Sep 2025"); // Popup text
