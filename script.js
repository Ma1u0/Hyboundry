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
   <b> <a href="https://news.sky.com/story/flights-suspended-at-copenhagen-airport-after-drone-sightings-13436457" target="_blank">Copenhagen Airport, Denmark 🇩🇰</a> </b> <br>
    <br>
    <b>Date/Time:</b> 22 Sep 2025; air traffic halted ~20:26–00:30<br>
    <b>Type:</b> Drone sighting<br>
    <b>Details:</b> Copenhagen Airport was temporarily closed after 2–3 drones were spotted.<br>
    Danish authorities stated the drones were operated by a "capable actor". <br>
    <br>
    Invoking NATO Article 4 was considered but ultimately Denmark decided against it <br>
    <br>
    The Danish intelligence service considers these drones to be Russian
   <a href="https://www.npr.org/2025/10/03/nx-s1-5561990/denmark-russia-drones-hybrid-war" target="_blank">Source</a>
  `);

/* =========================
   E S T O N I A
========================= */

L.marker([59.81732, 26.36000], { icon: jetRed })
  .addTo(map)
  .bindPopup(`
    <b> <a href="https://www.osw.waw.pl/en/publikacje/analyses/2025-09-22/russian-fighter-jets-estonian-airspace-a-test-natos-unity" target="_blank">Vaindloo Island 🇪🇪</a> </b> <br>
    <br>
    <b>Date/Time:</b> 19 Sep 2025, entered airspace between 09:58 and 10:10 <br>
    <b>Type:</b> Airspace incursion by Russian fighter jets <br>
    <b>Details:</b> Three Russian jets breached Estonian airspace up to 10 km deep for 12 minutes before being escorted by NATO jets <br>
    <br>
    Invoking NATO Article 4 was considered but ultimately Denmark decided against it
  `);

L.marker([57.80556, 26.97528], { icon: droneYellow })
  .addTo(map)
  .bindPopup(`
    <b> <a href="https://www.stripes.com/theaters/europe/2025-10-29/estonia-drone-shotdown-19584290.html" target="_blank">Reedo military barracks, Estonia 🇪🇪</a> </b> <br>
    <br>
    <b>Date/Time:</b> 17 Oct 2025  <br>
    <b>Type:</b> Drone sighting / drone downed  <br>
    <b>Details:</b> A drone flying near the US camp Reedo was downed by an anti-drone gun; authorities couldn't find the remains of the drone in the area it was presumably shot down <br>
    <br>
  `);


L.marker([59.24755, 24.23912], { icon: jetRed })
  .addTo(map)
  .bindPopup(`
    <b> <a href="https://www.ilgiornale.it/news/difesa/scramble-efa-italiani-hanno-intercettato-raro-aereo-russo-2572772.html" target="_blank">Ämari, Estonia 🇪🇪</a> </b> <br>
    <br>
    <b>Date/Time:</b> 24 Nov 2025,  <br>
    <b>Type:</b> Airspace incursion by Russian fighter jets <br>
    <b>Details:</b> Two Italian Eurofighters escorted the "Black Pearl", a Tupolev T-134 which trains strategic bomber pilots, two escort fighters, and one SU-24; it's assumed that this plane was en route to Kaliningrad, possibly transporting generals <br>
    <br>
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


L.marker([53.42829, -6.24727], { icon: droneYellow })
  .addTo(map)
  .bindPopup(`
   <b> <a href="https://www.thejournal.ie/drones-dublin-ireland-hybrid-warfare-russia-6893104-Dec2025/" target="_blank">Dublin Airport, Ireland 🇮🇪</a> </b> <br>
    <br>
    <b>Date/Time:</b> 01 Dec 2025, shortly before 23:00 <br>
    <b>Type:</b> Drone sighting<br>
    <b>Details:</b> Four military grade drones flew near the airport when Zelensky´s plane was supposed to land ; the lights were on therefore authorities assume that it was only supposed to be a disruption of the landing<br>
    The drones were likely launched near Howth, from where they first flew above a naval vessel and then towards the location where Zelensky´s plane was supposed to be but his plane was slightly ahead of schedule <br>
    Invoking NATO Article 4 was considered but ultimately Denmark decided against it <br>
    <br>
    Authorities believe the drones were quadcopters
  `);

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
