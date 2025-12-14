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

/* =========================
   INCIDENT MARKERS
========================= */

/* =========================
   B E L G I U M 
========================= */

/* =========================
   C Z E C H I A
========================= */

/* =========================
   D E N M A R K
========================= */

L.marker([55.6181, 12.6508], { icon: droneOrange })
  .addTo(map)
  .bindPopup(`
    <b> Copenhagen Airport, Denmark 🇩🇰 </b> <br>
    <br>
    <b>Date/Time:</b> 22 Sep 2025; air traffic halted ~20:26–00:30<br>
    <b>Type:</b> Drone sighting<br>
    <b>Details:</b> Copenhagen Airport was temporarily closed after 2–3 drones were spotted.<br>
    Danish authorities stated the drones were operated by a "capable actor". <br>
    <b>Source:</b> <a href="https://news.sky.com/story/flights-suspended-at-copenhagen-airport-after-drone-sightings-13436457" target="_blank">Source</a>
    <br>
    Invoking NATO Article 4 was considered but ultimately Denmark decided against it <br>
    <br>
    The Danish intelligence service considers these drones to be Russian
    <b>Source:</b> <a href="https://www.npr.org/2025/10/03/nx-s1-5561990/denmark-russia-drones-hybrid-war" target="_blank">Source</a>
  `);

/* =========================
   E S T O N I A
========================= */

L.marker([59.81732, 26.36000], { icon: jetRed })
  .addTo(map)
  .bindPopup(`
    <b> Vaindloo Island 🇪🇪 </b> <br>
    <br>
    <b>Date/Time:</b> 19 Sep 2025, entered airspace between 09:58 and 10:10 <br>
    <b>Type:</b> Airspace incursion by Russian fighter jets <br>
    <b>Details:</b> Three Russian jets breached Estonian airspace up to 10 km deep for 12 minutes before being escorted by NATO jets <br>
    <b>Source:</b> <a href="https://www.osw.waw.pl/en/publikacje/analyses/2025-09-22/russian-fighter-jets-estonian-airspace-a-test-natos-unity" target="_blank">Source</a>
    <br>
    Invoking NATO Article 4 was considered but ultimately Denmark decided against it
  `);

/* =========================
   F I N L A N D
========================= */

/* =========================
   F R A N C E
========================= */

/* =========================
   G E R M A N Y
========================= */

/* =========================
   I R E L A N D
========================= */

/* =========================
   L I T H U A N I A
========================= */

/* =========================
  N E T H E R L A N D S
========================= */

/* =========================
   N O R W A Y
========================= */

/* =========================
   P O L A N D
========================= */

/* =========================
   R O M A N I A
========================= */

/* =========================
   S P A I N
========================= */

/* =========================
   S W E D E N
========================= */
