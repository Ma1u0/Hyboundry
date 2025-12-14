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

L.marker([47.74672, 7.33899], { icon: droneYellow })
  .addTo(map)
  .bindPopup(`
   <b> <a href="https://www.lemonde.fr/societe/article/2025/11/12/mulhouse-enquete-ouverte-apres-le-survol-d-un-convoi-de-chars-leclerc_6653159_3224.html" target="_blank">Mulhouse, France 🇫🇷</a> </b> <br>
    <br>
    <b>Date/Time:</b> 07 Nov 2025, 23:45 - 23:50 <br>
    <b>Type:</b> Drone sightings <br>
    <b>Details:</b> 1: A Policeman reported a drone sighting at the Mulhouse Police station (he didn't see the drone but could hear it) at 23:45 <br>
                    2: At 23:50 a drone was reported at the Mulhouse Nord station, where a convoy of Leclerc tanks was stationed at 23:30; the drone flew without any lights on over the convoy and disappeared to an unknown location <br>
    <br>
    The police has no evidence to say wether it was a intentional or unintentional flight over these areas
  `);

L.marker([44.84260, 0.51143], { icon: droneYellow })
  .addTo(map)
  .bindPopup(`
   <b> <a href="https://www.lemonde.fr/societe/article/2025/11/12/mulhouse-enquete-ouverte-apres-le-survol-d-un-convoi-de-chars-leclerc_6653159_3224.html" target="_blank">Bergerac, France 🇫🇷</a> </b> <br>
    <br>
    <b>Date/Time:</b>  10 Nov 2025, 19:00 <br>
    <b>Type:</b> Drone sighting <br>
    <b>Details:</b>  A drone flew twice over the Eurenco plant which produces gunpowder for the French Army; the drones couldn't be identified or downed <br>
  `);


L.marker([48.304611, -4.50851], { icon: droneYellow })
  .addTo(map)
  .bindPopup(`
   <b> <a href="https://www.lemonde.fr/pixels/article/2025/12/05/la-base-sous-marine-de-l-ile-longue-qui-abrite-les-sous-marins-nucleaires-lanceurs-d-engins-survolee-par-des-drones_6656098_4408996.html" target="_blank">Île Longue, France 🇫🇷 </a> </b> <br>
    <br>
    <b>Date/Time:</b> 04 Dec 2025, 19:30 <br>
    <b>Type:</b> Drone sighting^ <br>
    <b>Details:</b> Five drones were spotted over the base with the help of anti drone systems; the stationed battalion shot at the drones  <br>
    <br>
    Île Longue is home to French nuclear ballistic missile submarines
  `);

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
    <b>Type:</b> Drone sighting <br>
    <b>Details:</b>  Four military grade drones flew near the airport when Zelensky´s plane was supposed to land ; the lights were on therefore authorities assume that it was only supposed to be a disruption of the landing <br>
    The drones were likely launched near Howth, from where they first flew above a naval vessel and then towards the location where Zelensky´s plane was supposed to be but his plane was slightly ahead of schedule <br>
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

L.marker([39.55322, 2.72903], { icon: droneYellow })
  .addTo(map)
  .bindPopup(`
   <b> <a href="https://www.ondacero.es/emisoras/baleares/mallorca/noticias/aeropuerto-palma-opera-normalidad-cerrar-este-domingo-trafico-aereo-avistamiento-dron_2025102068f5e4db76c80d35b5f0b84e.html" target="_blank">Palma de Mallorca Airport, Spain 🇪🇸</a> </b> <br>
    <br>
    <b>Date/Time:</b> 19 Oct 2025, 19:00 - ~19:30 <br>
    <b>Type:</b> Drone sighting / airport closure <br>
    <b>Details:</b> Multiple pilots reported a drone which resulted in  the airport being closed; police unsuccessfully used their own drone to localize the drone<br>
  `);

L.marker([38.28757, -0.55278], { icon: droneYellow })
  .addTo(map)
  .bindPopup(`
   <b> <a href="https://elpais.com/espana/comunidad-valenciana/2025-10-28/un-dron-cerca-de-la-pista-de-despegue-obliga-a-cerrar-el-aeropuerto-de-alicante-durante-casi-dos-horas.html" target="_blank">Alicante Airport, Spain 🇪🇸</a> </b> <br>
    <br>
    <b>Date/Time:</b> 27 Oct 2025, 20:53 - ~23:00 <br>
    <b>Type:</b> Drone sighting / airport closure <br>
    <b>Details:</b> A drone has been seen sighted near the runway; the perpatrator hasn't been found <br>
  `);

/* =========================
   S W E D E N
========================= */
