
// Initialize map
var map = L.map('map').setView([54.5, 10], 5);

// OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Icon factory
function createIcon(file) {
  return L.icon({
    iconUrl: `icons/${file}`,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  });
}

// Sample icons
const droneYellow = createIcon("yellow_drone.png");
const droneOrange = createIcon("orange_drone.png");
const jetRed = createIcon("red_jet.png");

// Sample markers
L.marker([55.60913, 12.65098], { icon: droneOrange })
  .addTo(map)
  .bindPopup("<b>Copenhagen Airport, Denmark</b><br>Drone sighting.");

L.marker([49.74390, 15.33811], { icon: droneYellow })
  .addTo(map)
  .bindPopup("<b>Czech Republic</b><br>Drone sightings.");

L.marker([59.81732, 26.36000], { icon: jetRed })
  .addTo(map)
  .bindPopup("<b>Vaindloo Island, Estonia</b><br>Airspace incursion by Russian fighter jets.");
