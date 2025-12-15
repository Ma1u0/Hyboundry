// Ensure JS runs after DOM loaded
window.onload = function() {

// Initialize the map centered over Europe
var map = L.map('map').setView([54.5, 10], 5);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

/* =========================
   L E G E N D
========================= */

const legend = document.getElementById('map-legend');
const toggleBtn = document.getElementById('legend-toggle');

toggleBtn.addEventListener('click', () => {
    legend.classList.toggle('expanded');
});
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

function getPopupWidth(zoom) {
  if (zoom <= 5) return 200;
  if (zoom <= 7) return 300;
  if (zoom <= 9) return 420;
  return 550;
}

map.on('zoomend', function () {
  const zoom = map.getZoom();

  map.eachLayer(layer => {
    if (layer instanceof L.Marker && layer.getPopup()) {
      layer.getPopup().options.maxWidth = getPopupWidth(zoom);
    }
  });
});

/* =========================
   INCIDENT MARKERS
========================= */

/* =========================
   B E L G I U M 
========================= */

/* =========================
   C Z E C H I A
========================= */

L.marker([49.74390, 15.33811], { icon: droneYellow })
  .addTo(map)
  .bindPopup(`
   <b> <a href="https://www.reuters.com/business/aerospace-defense/russias-suspected-hybrid-war-puts-european-air-defences-test-2025-11-05/" target="_blank">Czech Republic 🇨🇿</a> </b> <br>
    <br>
    <b>Date/Time:</b> 2025 <br>
    <b>Type:</b> Drone sightings <br>
    <b>Details:</b> On September 10th, the Czech army reported an growing number of drone sightings over it's military bases; no further details were provided <br>
  `);

/* =========================
   D E N M A R K
========================= */


L.marker([55.60913, 12.65098], { icon: droneOrange })
  .addTo(map)
  .bindPopup(`
   <b> <a href="https://news.sky.com/story/flights-suspended-at-copenhagen-airport-after-drone-sightings-13436457?" target="_blank">Copenhagen Airport, Denmark 🇩🇰</a> </b> <br>
    <br>
    <b>Date/Time:</b> 22 Sep 2025, flights halted ~20:26–00:30 <br>
    <b>Type:</b> Drone sighting / airport closure <br>
    <b>Details:</b> Copenhagen Airport was temporarily closed after 2–3 drones were spotted. Danish authorities said that the drones were operated by a 'capable actor' <br>
    <br>  
    Invoking NATO Article 4 was considered but ultimately Denmark decided against it <br>  
     <br>    
    <a href="https://www.npr.org/2025/10/03/nx-s1-5561990/denmark-russia-drones-hybrid-war" target="_blank"> The Danish intelligence service considers these drones to be Russian </a>
  `);

L.marker([57.08644, 9.86798], { icon: droneOrange })
  .addTo(map)
  .bindPopup(`
    <b> Aalborg Airport, Denmark 🇩🇰 </b><br><br>
    
    <b> <a href="https://www.dr.dk/nyheder/indland/droner-set-over-koebenhavns-lufthavn?focusId=10234855" target="_blank">Incident 1</a> </b> <br>
   <b> Date/Time:</b> 24 Sep 2025,, 21:45 -  ~3:00; airport closed ~23:16- ~03:15 <br>
   <b> Type: </b> Drone sightings / airport closure <br>
   <b> Details:</b> Multiple unidentified drones reported on the area of the Aalborg airport; authorities claim the pattern was similar to the accident in Copenhagen <br>
    <br><br>
    
  <b> <a href="https://www.dr.dk/nyheder/indland/droner-set-over-koebenhavns-lufthavn?focusId=10242688" target="_blank">Incident 2</a> </b> <br>
   <b> Date/Time:</b> 25 Sep 2025, ~23:40–00:35 <br>
   <b> Type: </b> <b> Suspected false alarm* </b>/ airport closure <br>
   <b> Details:</b> Air traffic was halted following a suspected drone observation by the police. Police wasn't able to confirm their sighting <br>
    <br> <br>
    
   <b> <a href="https://www.npr.org/2025/10/03/nx-s1-5561990/denmark-russia-drones-hybrid-war)" target="_blank">Incident 3</a> </b> <br>
   <b> Date/Time:</b> 14 Nov 2025, 22:10–23:00 <br>
   <b> Type: </b> Drone sighting / airport closure <br>
   <b> Details:</b>  Air traffic halted due to possible drone sighting <br>
    <br>
    <hr>
    <i>  Aalborg airport is both a publicly and militarily used airport </i>
  `);

L.marker([56.29746, 9.12463], { icon: droneOrange })
  .addTo(map)
  .bindPopup(`
   <b> <a href="https://www.france24.com/en/europe/20250927-new-drones-sighted-over-denmark-s-largest-military-base" target="_blank">Karup Air Base, Denmark 🇩🇰</a> </b> <br>
    <br>
    <b>Date/Time:</b> 24 Sep 2025, 20:15 <br>
    <b>Type:</b> Drone sighting / airspace closure <br>
    <b>Details:</b> One or two drones were seen over the air base. The drones weren't taken down. <br>
    <br>   
    <a href="https://www.npr.org/2025/10/03/nx-s1-5561990/denmark-russia-drones-hybrid-war" target="_blank"> The Danish intelligence service considers these drones to be Russian </a> <br> 
    <br> 
    <i> All Danish military helicopters, airspace surveillance, the flight school, support functions, and the defence command are stationed in Karup <br>
     <br>
    Karup Air Base shares one runway with the Midtjylland civilian airport </i>
  `);

L.marker([55.52572, 8.55197], { icon: droneOrange })
  .addTo(map)
  .bindPopup(`
   <b> <a href="https://www.dr.dk/nyheder/indland/droner-set-over-koebenhavns-lufthavn" target="_blank">Esbjerg Airport, Denmark 🇩🇰</a> </b> <br>
    <br>
    <b>Date/Time:</b> 24 Sep 2025, sightings ~22:00 - 02:08 <br>
    <b>Type:</b> Drone sighting <br>
    <b>Details:</b> Drones were reported in the airspace of Esbjerg Airport. Number of drones remain unknown; airport wasn't closed due to no more flights being scheduled until the morning <br>
    <br>   
    <a href="https://www.npr.org/2025/10/03/nx-s1-5561990/denmark-russia-drones-hybrid-war" target="_blank"> The Danish intelligence service considers these drones to be Russian </a>
  `);

L.marker([55.22555, 9.26393], { icon: droneOrange })
  .addTo(map)
  .bindPopup(`
   <b> <a href="https://www.dr.dk/nyheder/indland/droner-set-over-koebenhavns-lufthavn" target="_blank">Skrydstrup Air Base, Denmark 🇩🇰</a> </b> <br>
    <br>
    <b>Date/Time:</b>  24 Sep 2025, sightings ~22:00 - 02:08 <br>
    <b>Type:</b> Drone sighting <br>
    <b>Details:</b> Drones were reported over the Skrydstrup Air Base. Number of drones remains unknown <br>
    <br>   
    <a href="https://www.npr.org/2025/10/03/nx-s1-5561990/denmark-russia-drones-hybrid-war" target="_blank"> The Danish intelligence service considers these drones to be Russian </a>
  `);

L.marker([54.96255, 9.79265], { icon: droneOrange })
  .addTo(map)
  .bindPopup(`
   <b> <a href="https://www.dr.dk/nyheder/indland/droner-set-over-koebenhavns-lufthavn" target="_blank">Sønderborg Airport, Denmark 🇩🇰</a> </b> <br>
    <br>
    <b>Date/Time:</b>  24 Sep 2025, sightings ~22:00 - 02:08 <br>
    <b>Type:</b> Drone sighting <br>
    <b>Details:</b> Drones were reported in the airspace near Sønderborg Airport. Number of drones remain unknown; airport wasn't closed due to no more flights scheduled until the morning <br>
    <br>   
    <a href="https://www.npr.org/2025/10/03/nx-s1-5561990/denmark-russia-drones-hybrid-war" target="_blank"> The Danish intelligence service considers these drones to be Russian </a>
  `);

L.marker([56.34824, 8.60471], { icon: droneOrange })
  .addTo(map)
  .bindPopup(`
   <b> <a href="https://www.kristeligt-dagblad.dk/drone-spottet-ved-kaserne-i-holstebro" target="_blank">Jutland Dragoon Regiment barracks in Holstebro, Denmark 🇩🇰</a> </b> <br>
    <br>
    <b>Date/Time:</b> 24 Sep 2025, sightings ~03:00 <br>
    <b>Type:</b> Drone sighting <br>
    <b>Details:</b> The police confirmed that a drone was flying here after receiving reports of an unidentified drone <br>
    <br>   
    <a href="https://www.npr.org/2025/10/03/nx-s1-5561990/denmark-russia-drones-hybrid-war" target="_blank"> The Danish intelligence service considers these drones to be Russian </a>
  `);

L.marker([56.00270, 2.81447], { icon: droneGreen })
  .addTo(map)
  .bindPopup(`
   <b> <a href="https://www.reuters.com/world/europe/denmark-reopens-airports-after-drone-disruption-2025-09-25/" target="_blank">North Sea 🇪🇺 / 🇩🇰</a> </b> <br>
    <br>
    <b>Date/Time:</b> 24 Sep 2025 <br>
    <b>Type:</b> Drone sighting <br>
    <b>Details:</b> Danish civil rescue company "Esvagt" reports that it has possibly observed multiple drones flying over the North Sea, near oil fields <br>
    <br>   
  `);

L.marker([55.73502, 9.12933], { icon: droneGreen })
  .addTo(map)
  .bindPopup(`
   <b> <a href="https://www.politico.eu/article/denmark-closes-airports-after-wave-drone-sightings-across-country/" target="_blank">Billund Airport, Denmark 🇩🇰</a> </b> <br>
    <br>
    <b>Date/Time:</b> 25 Sep 2025, Reported 02:21, airport closed 04:40 - ~05:50 <br>
    <b>Type:</b> Drone sighting / airspace closure <br>
    <b>Details:</b> The police was unable to verify the drone sighting <br>
  `);

L.marker([55.06486, 14.75415], { icon: droneGreen })
  .addTo(map)
  .bindPopup(`
   <b> <a href="https://www.dr.dk/nyheder/indland/droner-set-over-koebenhavns-lufthavn?focusId=10235614" target="_blank">Rønne Airport, Denmark 🇩🇰</a> </b> <br>
    <br>
    <b>Date/Time:</b> 25 Sep 2025, ~05:49 <br>
    <b>Type:</b> Drone sighting <br>
    <b>Details:</b> Police confirmed that they have seen blinking lights over the airport; the police doesn't deny or confirm if those lights were a drone <br>
  `);

L.marker([55.33158, 11.13699], { icon: droneGreen })
  .addTo(map)
  .bindPopup(`
   <b> <a href="https://x.com/ssj_lfpoliti/status/1971177421018890658?s=61" target="_blank">Port of Korsør, Denmark 🇩🇰</a> </b> <br>
    <br>
    <b>Date/Time:</b> 25 Sep 2025 <br>
    <b>Type:</b> Drone sighting <br>
    <b>Details:</b> The police responded to reports of drones over the Port of Korsør; no further information published since then <br>
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
  `);


L.marker([59.24755, 24.23912], { icon: jetRed })
  .addTo(map)
  .bindPopup(`
    <b> <a href="https://www.ilgiornale.it/news/difesa/scramble-efa-italiani-hanno-intercettato-raro-aereo-russo-2572772.html" target="_blank">Ämari, Estonia 🇪🇪</a> </b> <br>
    <br>
    <b>Date/Time:</b> 24 Nov 2025,  <br>
    <b>Type:</b> Airspace incursion by Russian fighter jets <br>
    <b>Details:</b> Two Italian Eurofighters escorted the "Black Pearl", a Tupolev T-134 which trains strategic bomber pilots, two escort fighters, and one SU-24; it's assumed that this plane was en route to Kaliningrad, possibly transporting generals <br>
  `);

/* =========================
   F I N L A N D
========================= */

L.marker([66.42822, 25.53514], { icon: droneYellow })
  .addTo(map)
  .bindPopup(`
   <b> <a href="https://yle.fi/a/74-20185326" target="_blank">Valajaskoski Power Plant, Finland 🇫🇮</a> </b> <br>
    <br>
    <b>Date/Time:</b> 20/21 Sep 2025 <br>
    <b>Type:</b> Drone sighting <br>
    <b>Details:</b> An unknown perpetrator flew a drone over the power plant <br>
  `);

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
    <hr>
    <i> Île Longue is home to French nuclear ballistic missile submarines </i>
  `);

/* =========================
   G E R M A N Y
========================= */

L.marker([54.19488, 9.09282], { icon: droneYellow })
  .addTo(map)
  .bindPopup(`
   <b> <a href="https://www.ndr.de/nachrichten/schleswig-holstein/spiegel-drohnen-ueber-schleswig-holstein-sollen-kritische-infrastruktur-ausgespaeht-haben,drohnen-182.html" target="_blank">Heide, Germany 🇩🇪</a> </b> <br>
    <br>
    <b>Date/Time:</b> 25 Sep 2025 <br>
    <b>Type:</b> Drone sighting <br>
    <b>Details:</b> Drones have been spotted over the refinery in Heide <br>
     <br>    
    <a href="https://www.n-tv.de/politik/Bundeswehr-widerspricht-Bericht-ueber-Drohnensichtungen-article26071379.html" target="_blank"> Experts rule out that most of those drones were illegal/part of hybrid warfare</a>
  `);

L.marker([54.20812, 9.57218], { icon: droneYellow })
  .addTo(map)
  .bindPopup(`
   <b> <a href="https://www.ndr.de/nachrichten/schleswig-holstein/spiegel-drohnen-ueber-schleswig-holstein-sollen-kritische-infrastruktur-ausgespaeht-haben,drohnen-182.html" target="_blank">Kiel Canal, Germany 🇩🇪</a> </b> <br>
    <br>
    <b>Date/Time:</b> 25 Sep 2025 <br>
    <b>Type:</b> Drone sighting <br>
    <b>Details:</b> Drones have flew over the Kiel canal from East to West <br>
     <br>    
    <a href="https://www.n-tv.de/politik/Bundeswehr-widerspricht-Bericht-ueber-Drohnensichtungen-article26071379.html" target="_blank"> Experts rule out that most of those drones were illegal/part of hybrid warfare</a>
  `);

L.marker([54.32271, 10.13556], { icon: droneYellow })
  .addTo(map)
  .bindPopup(`
   <b> <a href="https://www.ndr.de/nachrichten/schleswig-holstein/spiegel-drohnen-ueber-schleswig-holstein-sollen-kritische-infrastruktur-ausgespaeht-haben,drohnen-182.html" target="_blank"> Kiel, Germany 🇩🇪 </a> </b> <br>
    <br>
    <b>Date/Time:</b> 25 Sep 2025, starting at ~21:00 <br>
    <b>Type:</b> Drone sighting <br>
    <b>Details:</b> Two drones were first spotted over a TKMS plant in Kiel. Shortly afterwards, a drone cluster with mother drone was reported at the University clinic of the University of Kiel. Later multiple drones were spotted at the Kiel fjord, where they were flying in parallel paths and measuring the fjord <br>
    The state parliament and the coastal power station in Kiel also had drone sightings <br>
     <br>    
    <a href="https://www.n-tv.de/politik/Bundeswehr-widerspricht-Bericht-ueber-Drohnensichtungen-article26071379.html" target="_blank"> Experts rule out that most of those drones were illegal/part of hybrid warfare</a>
  `);


L.marker([54.08870, 12.14049], { icon: droneYellow })
  .addTo(map)
  .bindPopup(`
   <b> <a href="https://www.ndr.de/nachrichten/schleswig-holstein/spiegel-drohnen-ueber-schleswig-holstein-sollen-kritische-infrastruktur-ausgespaeht-haben,drohnen-182.html" target="_blank"> Rostock, Germany 🇩🇪 </a> </b> <br>
    <br>
    <b>Date/Time:</b> 25? Sep 2025 <br>
    <b>Type:</b> Drone sighting <br>
    <b>Details:</b> Coordinated and connected drones were spotted over the overseas port and the marine command in Rostock <br>
    The state parliament and the coastal power station in Kiel also had drone sightings <br>
     <br>    
    <a href="https://www.n-tv.de/politik/Bundeswehr-widerspricht-Bericht-ueber-Drohnensichtungen-article26071379.html" target="_blank"> Spiegel also reported a sighting over the Bundeswehr location in Sanitz, Mecklenburg-Vorpommern, which was denied by the Bundeswehr </a>
  `);


L.marker([48.35396, 11.77859], { icon: droneYellow })
  .addTo(map)
  .bindPopup(`
    <b> Munich Airport, Germany 🇩🇪 </b><br><br>
    
    <b> <a href="https://www.munich-airport.de/presse-drohnensichtung-am-flughafen-muenchen-35699498" target="_blank">Incident 1</a> </b> <br>
   <b> Date/Time:</b> 2 Oct 2025, sightings 20:30 - ~00:00, airport closed 22:18 after the first drone sighting on airport territory at 22:10 <br>
   <b> Type: </b> Drone sightings / airport closure <br>
   <b> Details:</b> An unknown amount of drones was reported near and at the airport; the police wasn't able to find any suspects <br>
    <br><br>
    
  <b> <a href="https://www.tagesschau.de/inland/muenchen-flughafen-drohnen-102.html'" target="_blank">Incident 2</a> </b> <br>
   <b> Date/Time:</b> 03 Oct 2025, airport closed: 21:36 <br>
   <b> Type: </b> Drone sighting / airport closure <br>
   <b> Details:</b>Two drones were spotted near the runways but disappeared before they were identified <br>
    <br>
    <hr>
    <i> The Oktoberfest was taking place during both incidents </i>
  `);

L.marker([52.38492, 10.53923], { icon: droneGreen })
  .addTo(map)
  .bindPopup(`
   <b> <a href="https://www.zeit.de/news/2025-10/04/drohnensichtung-nahe-gifhorn-gemeldet" target="_blank">Meine, Germany 🇩🇪</a> </b> <br>
    <br>
    <b>Date/Time:</b> 04 Oct 2025, ~21:00 <br>
    <b>Type:</b> Drone sighting <br>
    <b>Details:</b> Police got a report of three drones flying in a formation flight up to 100km/h at a height of ~100m. The federal police has a flight squadron in Gifhorn (10km from Meine) <br>
  `);

L.marker([52.36593, 13.48864], { icon: droneYellow })
  .addTo(map)
  .bindPopup(`
   <b> <a href="https://www.rbb24.de/panorama/beitrag/2025/10/ber-flughafen-unterbrochen-drohne-polizei.html" target="_blank">Berlin Brandenburg Airport, Germany 🇩🇪</a> </b> <br>
    <br>
    <b>Date/Time:</b> 31 Oct 2025, ~20:00 - ~22:00 <br>
    <b>Type:</b> Drone sighting / airport closure <br>
    <b>Details:</b> Police confirmed a drone sighting at BER but the drone later disappeared despite using police helicopter <br>
  `);

L.marker([53.04534, 8.78964], { icon: droneYellow })
  .addTo(map)
  .bindPopup(`
   <b> <a href="https://www.butenunbinnen.de/nachrichten/drohne-flughafen-bremen-102.html" target="_blank">Bremen Airport, Germany 🇩🇪</a> </b> <br>
    <br>
    <b>Date/Time:</b> 2 Nov 2025, airspace  was closed in the evening for 40 minutes <br>
    <b>Type:</b> Drone sighting / airport closure <br>
    <b>Details:</b> Drone sighting reported; police won't give information about the drone; espionage is unlikely but not ruled out according to the investigators <br>
  `);


L.marker([52.46144, 9.68633], { icon: droneYellow })
  .addTo(map)
  .bindPopup(`
   <b> <a href="https://www.bild.de/news/flug-nach-muenchen-umgeleitet-drohnen-alarm-am-flughafen-hannover-690bce570580923d09988aec" target="_blank">Hannover Airport, Germany 🇩🇪</a> </b> <br>
    <br>
    <b>Date/Time:</b> 5 Nov 2025, 22:00 - 22:45 <br>
    <b>Type:</b> Drone sighting / airport closure <br>
    <b>Details:</b> A pilot sighted a drone while landing at the airport which caused the airport to close it's airspace; the drone reportedly flew over an industrial area next to the airport <br>
  `);

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

L.marker([51.65831, 5.69801], { icon: droneYellow })
  .addTo(map)
  .bindPopup(`
    <b> Volkel Air Base, Netherlands 🇳🇱 </b><br><br>
    
    <b> <a href="https://www.rtl.nl/nieuws/binnenland/artikel/5540368/drones-eindhoven-volkel-tuinman-brekelmans-verjaagd" target="_blank">Incident 1</a> </b> <br>
   <b> Date/Time:</b> 20 Nov 2025, sightings between 19:00 and 21:00 <br>
   <b> Type: </b> Drone sightings <br>
   <b> Details:</b> Ten drones spotted between 19:00 and 21:00; the military shot at the drones but they were able to fly away <br>
    <br><br>
    
  <b> <a href="https://www.rtl.nl/nieuws/binnenland/artikel/5540368/drones-eindhoven-volkel-tuinman-brekelmans-verjaagd" target="_blank">Incident 2</a> </b> <br>
   <b> Date/Time:</b> 22 Nov 2025 <br>
   <b> Type: </b> Drone sighting<br>
   <b> Details:</b> An unspecified amount of drones was spotted at the Volkel air base and were chased away <br>
    <br>
    <hr>
    <i>Volkel is one of the two bases which are home to Dutch F-35 jets </i>
  `);

L.marker([51.45190, 5.37488], { icon: droneYellow })
  .addTo(map)
  .bindPopup(`
   <b> <a href="https://www.rtl.nl/nieuws/binnenland/artikel/5540318/vliegverkeer-eindhoven-airport-weer-hervat-na-eerdere-sluiting" target="_blank">Eindhoven Airport, Netherlands 🇳🇱</a> </b> <br>
    <br>
    <b>Date/Time:</b>  22 Nov 2025,  ~19:00 - 23:00 <br>
    <b>Type:</b> Drone sighting / airport closure <br>
    <b>Details:</b> Air traffic was halted following the sighting of multiple drones at the airport <br>
    <br>
    <hr>
    <i>Eindhoven airport is both a publicly and militarily used airport</i>
  `);

L.marker([52.24350, 5.63432], { icon: droneYellow })
  .addTo(map)
  .bindPopup(`
   <b> <a href="https://www.defensie.nl/actueel/nieuws/2025/12/07/f-35-gevechtsvliegtuigen-ingezet-voor-onbekend-object" target="_blank">Netherlands 🇳🇱</a> </b> <br>
    <br>
    <b>Date/Time:</b> 07 Dec 2025, 10:20 <br>
    <b>Type:</b> Drone sighting <br>
    <b>Details:</b>  A drone entered Dutch airspace on an level where identification is required; the lack of it triggered the Quick Reaction Alert and two F-35  jets were scrambled; the drone left Dutch airspace <br>
  `);

/* =========================
   N O R W A Y
========================= */

L.marker([60.19315, 11.09682], { icon: droneYellow })
  .addTo(map)
  .bindPopup(`
   <b> <a href="https://www.dr.dk/nyheder/indland/droner-set-over-koebenhavns-lufthavn" target="_blank">Oslo Gardermoen Airport, Norway 🇳🇴</a> </b> <br>
    <br>
    <b>Date/Time:</b> 23 Sep 2025, 00:30-04:00 <br>
    <b>Type:</b> Drone sightings / airport closure <br>
    <b>Details:</b>  The airspace was closed following a drone sighting; a few hours earlier two foreign nationals were arrested for operating a different drone <br>
Authorities do not rule out a connection to the incident in Copenhagen <br>
  `);

L.marker([69.05483, 18.54067], { icon: droneYellow })
  .addTo(map)
  .bindPopup(`
   <b> <a href="https://www.nrk.no/norge/fly-omdirigert-etter-droneobservasjon-1.17589626" target="_blank">Bardufoss Airport, Norway 🇳🇴</a> </b> <br>
    <br>
    <b>Date/Time:</b> 28 Sep 2025 <br>
    <b>Type:</b> Drone sightings / airport closure <br>
    <b>Details:</b> Two Chinese nationals have been arrested for flying a drone<br>
    <br>
    The area is surrounded by fjords, a popular tourist attraction
  `);

L.marker([65.45869, 12.21145], { icon: droneYellow })
  .addTo(map)
  .bindPopup(`
   <b> <a href="https://www.nrk.no/nordland/politiet-om-droner-ved-bronnoysund-lufthavn_-_-sa-fem-seks-stykker-1.17590655#:~:text=Nyhetssenter%20Nordland-,Politiet%20om%20droner%20ved%20Brønnøysund%20lufthavn%3A%20–%20Så%20fem%2Dseks,vei%20fra%20Bodø%20til%20Trondheim." target="_blank">Brønnøysund Airport, Norway 🇳🇴</a> </b> <br>
    <br>
    <b>Date/Time:</b> 29 Sep 2025, 20:18 <br>
    <b>Type:</b> Drone sightings / airport closure <br>
    <b>Details:</b> The police confirms the drone sighting and say that it has seen five to six drone in the sky. The police lost sight of the drones <br>
    <br>
    The police considers the Ørland incident, which was reported at the same time, as a likely false alarm
  `);

/* =========================
   P O L A N D
========================= */

/* =========================
   R O M A N I A
========================= */

L.marker([45.16667, 28.80000], { icon: droneRed })
  .addTo(map)
  .bindPopup(`
   <b> <a href="https://www.radio  timisoara.ro/administratie-politica/administratie-public/mapn-fortele-aeriene-au-interceptat-o-drona-in-spatiul-aerian-national-364449.html" target="_blank">Tulcea county, Romania 🇷🇴</a> </b> <br>
    <br>
    <b>Date/Time:</b> 13 Sep 2025, spotted at 18:23 <br>
    <b>Type:</b> Drone incursion <br>
    <b>Details:</b>  Russian drone flew up to ~10 km into Romanian airspace before returning to Ukrainian airspace. Spotted and tracked by Romanian F‑16 jets <br>
  `);


L.marker([45.40710, 28.20130], { icon: droneRed })
  .addTo(map)
  .bindPopup(`
   <b> <a href="https://www.reuters.com/business/aerospace-defense/romania-finds-suspected-drone-fragments-after-russian-attack-ukraine-2025-11-11/" target="_blank">Grindu, Romania 🇷🇴</a> </b> <br>
    <br>
    <b>Date/Time:</b> 11 Nov 2025 <br>
    <b>Type:</b> Drone crash <br>
    <b>Details:</b> Russian drone entered Romanian airspace but due to the weather NATO jets weren't able to be scrambled; the remains were found 5km deep in it's territory <br>
  `);

L.marker([45.41417, 29.28919], { icon: droneRed })
  .addTo(map)
  .bindPopup(`
   <b> <a href="https://www.digi24.ro/stiri/actualitate/mapn-a-ridicat-doua-avioane-de-lupta-in-timpul-noptii-dupa-ce-o-drona-a-intrat-in-spatiul-aerian-national-a-fost-emis-mesaj-ro-alert-3509181" target="_blank">Periprava / Chilia Veche / Foltești, Romania 🇷🇴</a> </b> <br>
    <br>
    <b>Date/Time:</b> 19 Nov 2025, 00:20 - 01:00 <br>
    <b>Type:</b> Drone incursion <br>
    <b>Details:</b> Russian drone flew up to ~8 km into Romanian airspace where it disappeared from the radars. The drone later reappeared in Moldovan airspace from where it reentered Romania and was spotted in Foltești, Galați county again <br>
    It is unknown what eventually happened to it <br>
  `);

L.marker([46.42270, 27.48516], { icon: droneRed })
  .addTo(map)
  .bindPopup(`
   <b> <a href="https://www.reuters.com/world/romania-scrambles-fighter-jets-after-drones-breach-its-airspace-2025-11-25/" target="_blank">Puiești, Romania 🇷🇴</a> </b> <br>
    <br>
    <b>Date/Time:</b> 25 Nov 2025,  <br>
    <b>Type:</b> Drone incursion <br>
    <b>Details:</b> wo Russian drones flew into Romanian airspace through Ukraine and Moldova; two German Eurofighters were scrambled and given permission to shot the drones down, but they didn't to avoid colateral damage; one flew back into Ukrainian airspace, the other crashed in Puiești, despite being spotted further inside the country earlier (Galati county) <br>
  `);

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


L.marker([55.60529, 13.00016], { icon: droneGreen })
  .addTo(map)
  .bindPopup(`
    <b> <a href="https://www.aftonbladet.se/nyheter/a/AvjRoE/flera-dronarlarm-till-malmopolisen" target="_blank">Malmö, Sweden 🇸🇪</a> </b> <br>
    <br>
    <b>Date/Time:</b> 22 Sep 2025, ~21:00 <br>
    <b>Type:</b> Drone sighting <br>
    <b>Details:</b> A couple from Malmö reported seeing a large drone from their balcony. The drone headed eastwards
    The police confirmed getting multiple calls about drone sighting but couldn't verify those reports themselves <br>
  `);


L.marker([56.15935, 15.57863], { icon: droneYellow })
  .addTo(map)
  .bindPopup(`
    <b> <a href="https://www.sverigesradio.se/artikel/suspected-drones-spotted-near-karlskrona-naval-base" target="_blank">Karlskrona naval base, Sweden 🇸🇪</a> </b> <br>
    <br>
    <b>Date/Time:</b> 26 Sep 2025, at night <br>
    <b>Type:</b> Drone sighting <br>
    <b>Details:</b> An unidentified drone was seen about a mile from the naval base; the drone did not fly over any restricted objects <br>
  `);

L.marker([57.66242, 12.28776], { icon: droneYellow })
  .addTo(map)
  .bindPopup(`
    <b> <a href="https://www.reuters.com/world/traffic-halted-swedish-city-gothenburgs-airport-after-drone-sighting-daily-2025-11-06/" target="_blank">Gothenburg Landvetter Airport, Sweden 🇸🇪</a> </b> <br>
    <br>
    <b>Date/Time:</b> 06 Nov 2025, 17:41 - 21:30 <br>
    <b>Type:</b> Drone sighting / airport closure <br>
    <b>Details:</b> AOne or more drones have been observed at the coast, close to the airport; air traffic resumed at around 21:30 <br>
  `);
