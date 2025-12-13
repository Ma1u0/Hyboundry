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
        iconSize: [32, 32],
        iconAnchor: [18, 36],
        popupAnchor: [0, -30]
    });
}

/* =========================
   UAV ICONS
========================= */
const droneRed = createIcon("red_drone.png");
const droneOrange = createIcon("orange_drone.png");
const droneYellow = createIcon("yellow_drone.png");
const droneGreen = createIcon("green_drone.png");
const droneBlue = createIcon("blue_drone.png");

/* =========================
   JET ICONS
========================= */
const jetRed = createIcon("red_jet.png");
const jetOrange = createIcon("orange_jet.png");
const jetYellow = createIcon("yellow_jet.png");
const jetGreen = createIcon("green_jet.png");
const jetBlue = createIcon("blue_jet.png");

/* =========================
   BALLOON ICONS
========================= */
const balloonRed = createIcon("red_balloon.png");
const balloonOrange = createIcon("orange_balloon.png");
const balloonYellow = createIcon("yellow_balloon.png");
const balloonGreen = createIcon("green_balloon.png");
const balloonBlue = createIcon("blue_balloon.png");

// Example marker with UAV red
L.marker([55.6761, 12.5683], { icon: droneYellow })
  .addTo(map)
  .bindPopup("Copenhagen – UAV Red Test");
