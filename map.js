document.addEventListener('DOMContentLoaded', () => {
  // Initialize map
  const map = L.map('map').setView([20, 0], 2);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(map);

  // Initialize MarkerCluster group
  const markerCluster = L.markerClusterGroup();
  map.addLayer(markerCluster);

  // Icons
  const icons = {
    droneRed: L.icon({ iconUrl: 'icons/red_drone.png', iconSize: [28,28] }),
    droneOrange: L.icon({ iconUrl: 'icons/orange_drone.png', iconSize: [28,28] }),
    droneYellow: L.icon({ iconUrl: 'icons/yellow_drone.png', iconSize: [28,28] }),
    droneGreen: L.icon({ iconUrl: 'icons/green_drone.png', iconSize: [28,28] }),
    droneBlue: L.icon({ iconUrl: 'icons/blue_drone.png', iconSize: [28,28] }),
    
    jetRed: L.icon({ iconUrl: 'icons/red_jet.png', iconSize: [28,28] }),
    jetOrange: L.icon({ iconUrl: 'icons/orange_jet.png', iconSize: [28,28] }),
    jetYellow: L.icon({ iconUrl: 'icons/yellow_jet.png', iconSize: [28,28] }),
    jetGreen: L.icon({ iconUrl: 'icons/green_jet.png', iconSize: [28,28] }),
    jetBlue: L.icon({ iconUrl: 'icons/blue_jet.png', iconSize: [28,28] }),

    balloonRed: L.icon({ iconUrl: 'icons/red_balloon.png', iconSize: [28,28] }),
    balloonOrange: L.icon({ iconUrl: 'icons/orange_balloon.png', iconSize: [28,28] }),
    balloonYellow: L.icon({ iconUrl: 'icons/yellow_balloon.png', iconSize: [28,28] }),
    balloonGreen: L.icon({ iconUrl: 'icons/green_balloon.png', iconSize: [28,28] }),
    balloonBlue: L.icon({ iconUrl: 'icons/blue_balloon.png', iconSize: [28,28] }),
    
    borderRed: L.icon({ iconUrl: 'icons/red_soldier.png', iconSize: [28,28] }),
    borderOrange: L.icon({ iconUrl: 'icons/orange_soldier.png', iconSize: [28,28] }),
    borderYellow: L.icon({ iconUrl: 'icons/yellow_soldier.png', iconSize: [28,28] }),
    borderGreen: L.icon({ iconUrl: 'icons/green_soldier.png', iconSize: [28,28] }),
    borderBlue: L.icon({ iconUrl: 'icons/blue_soldier.png', iconSize: [28,28] }),
  };

  // Incident data
  const incidents = [

 /* =========================
       B E L G I U M
    ========================= */
    
   /* =========================
       C Z E C H I A
    ========================= */
    {
    lat: 49.74390,
    lng: 15.33811,
    icon: icons.droneYellow,
    type: 'drone',      // used for filtering
    risk: 'yellow',
    place: 'others',
    year: '2025',
    popupType: 'Drone sightings ', // shown in popup
    date: '2025',
    details: "On September 10th, the Czech army reported an growing number of drone sightings over it's military bases; no further details were provided",
    link: "https://www.reuters.com/business/aerospace-defense/russias-suspected-hybrid-war-puts-european-air-defences-test-2025-11-05/",
    country: "Czech Republic 🇨🇿"
  },

 /* =========================
       D E N M A R K
    ========================= */

 /* =========================
       E S T O N I A
    ========================= */

  {
    lat: 59.81850,
    lng: 26.35943,
    icon: icons.jetRed,
    type: 'jet',      // used for filtering
    risk: 'red',
    place: 'others',
    year: '2025',
    popupType: 'Airspace incursion ', // shown in popup
    date: ' 19 Sep 2025, entered airspace between 09:58 and 10:10',
    details: "Three Russian jets breached Estonian airspace up to 10 km deep for 12 minutes before being escorted by NATO jets <br><br> NATO Article 4 was invoked following this incident",
    link: "https://www.osw.waw.pl/en/publikacje/analyses/2025-09-22/russian-fighter-jets-estonian-airspace-a-test-natos-unity",
    country: "Vaindloo Island, Estonia 🇪🇪"
  },

  {
    lat: 57.80556,
    lng: 26.97528,
    icon: icons.droneYellow,
    type: 'drone',      // used for filtering
    risk: 'yellow',
    place: 'militarybases',
    year: '2025',
    popupType: 'Drone sighting / drone downed ', // shown in popup
    date: '17 Oct 2025',
    details: "A drone flying near the US camp Reedo was downed by an anti-drone gun; authorities couldn't find the remains of the drone in the area it was presumably shot down",
    link: "https://www.stripes.com/theaters/europe/2025-10-29/estonia-drone-shotdown-19584290.html",
    country: "Reedo military barracks, Estonia 🇪🇪"
  },

   {
    lat: 59.24755,
    lng: 24.23912,
    icon: icons.jetRed,
    type: 'jet',      // used for filtering
    risk: 'red',
    place: 'others',
    year: '2025',
    popupType: 'Airspace incursion ', // shown in popup
    date: ' 24 Nov 2025 ',
    details: "Two Italian Eurofighters escorted the 'Black Pearl', a Tupolev T-134 which trains strategic bomber pilots, two escort fighters, and one SU-24; it's assumed that this plane was en route to Kaliningrad, possibly transporting generals",
    link: "https://www.ilgiornale.it/news/difesa/scramble-efa-italiani-hanno-intercettato-raro-aereo-russo-2572772.html",
    country: "Ämari, Estonia 🇪🇪"
  },

  {
    lat: 58.99872,
    lng: 27.73583,
    icon: icons.borderRed,
    type: 'border',      // used for filtering
    risk: 'red',
    place: 'others',
    year: '2025',
    popupType: 'Border crossing ', // shown in popup
    date: '  17 Dec 2025, ~10:00 ',
    details: "Three Russian border guards crossed the border on hovercrafts; they walked on the stone breakwater and returned to Russia again <br> It is unknown wether this was intentional or not",
    link: "https://news.err.ee/1609888417/russian-border-guards-crossed-into-estonia-with-unclear-motives-minister-says",
    country: "Narva River / Vasknarva breakwater, Estonia 🇪🇪",
    note: "Estonia says that the guards aren't reliable since the war because they are brought in from other regions and change and them often changing their place of deployment <br><br> Russian ships normally have to ask for permission to cross that area to get into the Russian part of Lake Peipsi",
  },
    
     /* =========================
       F I N L A N D
    ========================= */

  {
    lat: 66.42822,
    lng: 25.53514,
    icon: icons.droneYellow,
    type: 'drone',      // used for filtering
    risk: 'yellow',
    place: 'others',
    year: '2025',
    popupType: 'Drone sighting ', // shown in popup
    date: ' 24 Nov 2025 ',
    details: "An unknown perpetrator flew a drone over the power plant",
    link: "https://yle.fi/a/74-20185326",
    country: "Valajaskoski Power Plant, Finland 🇫🇮"
  },
                          
     /* =========================
       F R A N C E
    ========================= */

{
    lat: 47.74672,
    lng: 7.33899,
    icon: icons.droneYellow,
    type: 'drone',      // used for filtering
    risk: 'yellow',
    place: 'others',
    year: '2025',
    popupType: 'Drone sightings ', // shown in popup
    date: ' 07 Nov 2025, 23:45 - 23:50 ',
    details: "1: A Policeman reported a drone sighting at the Mulhouse Police station (he didn't see the drone but could hear it) at 23:45 <br> 2: At 23:50 a drone was reported at the Mulhouse Nord station, where a convoy of Leclerc tanks was stationed at 23:30; the drone flew without any lights on over the convoy and disappeared to an unknown location <br> <br> The police has no evidence to say wether it was a intentional or unintentional flight over these areas",
    link: "https://www.lemonde.fr/societe/article/2025/11/12/mulhouse-enquete-ouverte-apres-le-survol-d-un-convoi-de-chars-leclerc_6653159_3224.html",
    country: "Mulhouse, France 🇫🇷"
  },

    {
    lat: 44.84260,
    lng: 0.51143,
    icon: icons.droneYellow,
    type: 'drone',      // used for filtering
    risk: 'yellow',
    place: 'others',
    year: '2025',
    popupType: 'Drone sighting ', // shown in popup
    date: ' 10 Nov 2025, 19:00 ',
    details: "A drone flew twice over the Eurenco plant which produces gunpowder for the French Army; the drones couldn't be identified or downed",
    link: "https://www.lemonde.fr/pixels/article/2025/12/05/la-base-sous-marine-de-l-ile-longue-qui-abrite-les-sous-marins-nucleaires-lanceurs-d-engins-survolee-par-des-drones_6656098_4408996.html",
    country: "Bergerac, France 🇫🇷"
  },

    
    {
    lat: 48.30461,
    lng: -4.50851,
    icon: icons.droneYellow,
    type: 'drone',      // used for filtering
    risk: 'yellow',
    place: 'militarybases',
    year: '2025',
    popupType: 'Drone sighting ', // shown in popup
    date: ' 04 Dec 2025, 19:30 ',
    details: "Five drones were spotted over the base with the help of anti drone systems; the stationed battalion shot at the drones",
    link: "https://www.lemonde.fr/societe/article/2025/11/12/mulhouse-enquete-ouverte-apres-le-survol-d-un-convoi-de-chars-leclerc_6653159_3224.html",
    country: "Île Longue, France 🇫🇷",
    note: "Île Longue is home to French nuclear ballistic missile submarines",
  },
    
     /* =========================
       G E R M A N Y
    ========================= */

    {
    lat: 54.19488,
    lng: 9.09282,
    icon: icons.droneYellow,
    type: 'drone',      // used for filtering
    risk: 'yellow',
    place: 'others',
    year: '2025',
    popupType: 'Drone sighting ', // shown in popup
    date: ' 25 Sep 2025 ',
    details: " Drones have been spotted over the refinery in Heide",
    link: "https://www.ndr.de/nachrichten/schleswig-holstein/spiegel-drohnen-ueber-schleswig-holstein-sollen-kritische-infrastruktur-ausgespaeht-haben,drohnen-182.html",
    country: "Heide, Germany 🇩🇪",
  },


  {
    lat: 54.20812,
    lng: 9.57218,
    icon: icons.droneYellow,
    type: 'drone',      // used for filtering
    risk: 'yellow',
    place: 'others',
    year: '2025',
    popupType: 'Drone sighting ', // shown in popup
    date: ' 25 Sep 2025 ',
    details: "Drones have flew over the Kiel canal from East to West",
    link: "https://www.ndr.de/nachrichten/schleswig-holstein/spiegel-drohnen-ueber-schleswig-holstein-sollen-kritische-infrastruktur-ausgespaeht-haben,drohnen-182.html",
    country: "Kiel Canal, Germany 🇩🇪",
  },

  {
    lat: 54.32271,
    lng: 10.13556,
    icon: icons.droneYellow,
    type: 'drone',      // used for filtering
    risk: 'yellow',
    place: 'others',
    year: '2025',
    popupType: 'Drone sightings ', // shown in popup
    date: '25 Sep 2025, starting at ~21:00',
    details: "Two drones were first spotted over a TKMS plant in Kiel. Shortly afterwards, a drone cluster with mother drone was reported at the University clinic of the University of Kiel. Later multiple drones were spotted at the Kiel fjord, where they were flying in parallel paths and measuring the fjord. <br> The state parliament and the coastal power station in Kiel also had drone sightings",
    link: "https://www.ndr.de/nachrichten/schleswig-holstein/spiegel-drohnen-ueber-schleswig-holstein-sollen-kritische-infrastruktur-ausgespaeht-haben,drohnen-182.html",
    country: "Kiel, Germany 🇩🇪",
  },

  {
    lat: 54.08870,
    lng: 12.14049,
    icon: icons.droneYellow,
    type: 'drone',      // used for filtering
    risk: 'yellow',
    place: 'militarybases',
    year: '2025',
    popupType: 'Drone sightings ', // shown in popup
    date: '25? Sep 2025',
    details: "Coordinated and connected drones were spotted over the overseas port and the marine command in Rostock",
    link: "https://www.ndr.de/nachrichten/schleswig-holstein/spiegel-drohnen-ueber-schleswig-holstein-sollen-kritische-infrastruktur-ausgespaeht-haben,drohnen-182.html",
    country: "Rostock, Germany 🇩🇪",
    note: "Spiegel also reported a sighting over the Bundeswehr location in Sanitz, Mecklenburg-Vorpommern which was denied by the Bundeswehr",
  },

{
  lat: 48.35396,
  lng: 11.77859,
  icon: icons.droneYellow,
  type: 'drone',        // used for filtering
  risk: 'yellow',
  place: 'airport',
  year: '2025',
  country: "Munich Airport, Germany 🇩🇪",

  note: "The Oktoberfest was taking place during both incidents",

  incidents: [
    {
      popupType: 'Drone sighting / airport closure',
      date: '02  Oct 2025, sightings 20:30 - ~00:00, airspace closed 22:18 after the first drone sighting on airport territory at 22:10',
      details: "An unknown amount of drones was reported near and at the airport; the police wasn't able to find any suspects.",
      link: "https://www.munich-airport.de/presse-drohnensichtung-am-flughafen-muenchen-35699498"
    },
    {
      popupType: 'Drone sighting / airport closure',
      date: '03 Oct 2025, airspace closed: 21:36',
      details: "Two drones were spotted near the runways but disappeared before they were identified",
      link: "https://www.tagesschau.de/inland/muenchen-flughafen-drohnen-102.html'"
    }
  ]
},

  {
    lat: 50.80317,
    lng: 6.48208,
    icon: icons.droneOrange,
    type: 'drone',      // used for filtering
    risk: 'orange',
    place: 'others',
    year: '2025',
    popupType: 'Drone sighting ', // shown in popup
    date: '03 Oct 2025, 01:45',
    details: " The 15 drones from the Elsenborn military base were last spotted over Düren by the police",
    link: "https://www.vrt.be/vrtnws/en/2025/10/03/drones-spotted-above-belgian-military-bases/",
    country: "Düren, Germany 🇩🇪",
    note: "The Belgian security service considers the drones in Belgium to be Russian",
    noteLink: "https://www.vrt.be/vrtnws/en/2025/11/05/belgian-security-services-convinced-russia-is-behind-the-drone-i/"
  },

   {
    lat: 52.38492,
    lng: 10.53923,
    icon: icons.droneGreen,
    type: 'drone',      // used for filtering
    risk: 'green',
    place: 'others',
    year: '2025',
    popupType: 'Drone sighting ', // shown in popup
    date: '04 Oct 2025, ~21:00',
    details: "Police got a report of three drones flying in a formation flight up to 100km/h at a height of ~100m. The federal police has a flight squadron in Gifhorn (10km from Meine)",
    link: "https://www.zeit.de/news/2025-10/04/drohnensichtung-nahe-gifhorn-gemeldet",
    country: "Meine, Germany 🇩🇪",
  },

   {
    lat: 52.36593,
    lng: 13.48864,
    icon: icons.droneYellow,
    type: 'drone',      // used for filtering
    risk: 'yellow',
    place: 'airport',
    year: '2025',
    popupType: 'Drone sighting / airport closure ', // shown in popup
    date: ' 31 Oct 2025, ~20:00 - ~22:00',
    details: "Police confirmed a drone sighting at BER but the drone later disappeared despite using police helicopters",
    link: "https://www.rbb24.de/panorama/beitrag/2025/10/ber-flughafen-unterbrochen-drohne-polizei.html",
    country: "Berlin-Brandenburg Airport, Germany 🇩🇪",
  },

   {
    lat: 53.04534,
    lng: 8.78964,
    icon: icons.droneYellow,
    type: 'drone',      // used for filtering
    risk: 'yellow',
    place: 'airport',
    year: '2025',
    popupType: 'Drone sighting / airport closure ', // shown in popup
    date: '2 Nov 2025, airspace  was closed in the evening for 40 minutes',
    details: "Drone sighting reported; police won't give information about the drone; espionage is unlikely but not ruled out according to the investigators",
    link: "https://www.butenunbinnen.de/nachrichten/drohne-flughafen-bremen-102.html",
    country: "Bremen Airport, Germany 🇩🇪",
  },

   {
    lat: 52.46144,
    lng: 9.68633,
    icon: icons.droneYellow,
    type: 'drone',      // used for filtering
    risk: 'yellow',
    place: 'airport',
    year: '2025',
    popupType: 'Drone sighting / airport closure ', // shown in popup
    date: '5 Nov 2025, 22:00 - 22:45',
    details: "A pilot sighted a drone while landing at the airport which caused the airport to close it's airspace; the drone reportedly flew over an industrial area next to the airport",
    link: "https://www.bild.de/news/flug-nach-muenchen-umgeleitet-drohnen-alarm-am-flughafen-hannover-690bce570580923d09988aec",
    country: "Hannover Airport, Germany 🇩🇪",
  },

  {
    lat: 52.59799,
    lng: 10.03044,
    icon: icons.droneOrange,
    type: 'drone',      // used for filtering
    risk: 'orange',
    place: 'militarybases',
    year: '2025',
    popupType: 'Drone sighting ', // shown in popup
    date: '11 Dec 2025, 19:00 - 23:00',
    details: "Up to 25 drones flew over the barracks for multiple hours; the police says that it was a professional actor; the colonel says that they were supposed to be seen as they had all lights on <br> The drones were large and flew in formation <br><br> The Bundeswehr didn't shoot them down or chase them away because there was nothing to spy on and no danger to the public or air traffic ",
    link: "https://www.haz.de/der-norden/luftalarm-bei-der-bundeswehr-zwei-dutzend-drohnen-kreisen-ueber-celler-kaserne-73NJM63WX5E45P4QOAUCX23OC4.html",
    country: "Immelmann barracks, Celle, Germany 🇩🇪",
    note: "The colonel suspects those drones to be Russian",
  },

  {
    lat: 52.91350,
    lng: 10.18650,
    icon: icons.droneYellow,
    type: 'drone',      // used for filtering
    risk: 'yellow',
    place: 'militarybases',
    year: '2025',
    popupType: 'Drone sighting ', // shown in popup
    date: '15 Dec 2025',
    details: "Security personnel has spotted multiple drones over the northern part of the Air Base; the drone disappeared eastwards shortly afterwards; the drones flew in formation <br><br> Police and Bundeswehr didn't react to those drones because they didn't pose any immediate threat",
    link: "https://www.cz.de/lokales/celle-lk/celle/provokationen-gehen-weiter-unbekannte-drohnen-jetzt-auch-beim-bundeswehr-fliegerhorst-fassberg-QCF3BDQLM5DRJMUGOGQRZCJWEA.html",
    country: "Faßberg Air Base, Germany 🇩🇪",
    note: "Faßberg is home to the Air Force Technical Training Center",
  },
    
   /* =========================
       I R E L A N D
    ========================= */
    {
    lat: 53.42829,
    lng: -6.24727,
    icon: icons.droneYellow,
    type: 'drone',      // used for filtering
    risk: 'yellow',
    place: 'airport',
    year: '2025',
    popupType: 'Drone sighting ', // shown in popup
    date: '01 Dec 2025, shortly before 23:00',
    details: "Four military grade drones flew near the airport when Zelensky´s plane was supposed to land; the lights were on therefore authorities assume that it was only supposed to be a disruption of the landing<br>The drones were likely launched near Howth, from where they first flew above a naval vessel and then towards the location where Zelensky´s plane was supposed to be but his plane was slightly ahead of schedule<br><br>Authorities believe the drones were quadcopters",
    link: "https://www.thejournal.ie/drones-dublin-ireland-hybrid-warfare-russia-6893104-Dec2025/",
    country: "Dublin Airport, Ireland 🇮🇪"
  },

     /* =========================
       L I T H U A N I A
    ========================= */

     /* =========================
        N E T H E R L A N D S
    ========================= */

{
  lat: 51.65831,
  lng: 5.69801,
  icon: icons.droneYellow,
  type: 'drone',        // used for filtering
  risk: 'yellow',
  place: 'militarybases',
  year: '2025',
  country: "Volkel Air Base, Netherlands 🇳🇱",

  note: "Volkel is home to Dutch F-35 jets and US nuclear weapons",

  incidents: [
    {
      popupType: 'Drone sighting',
      date: '20 Nov 2025, sightings between 19:00 and 21:00',
      details: "An unspecified number of drones was spotted over Volkel Air Base and were subsequently chased away.",
      link: "https://www.rtl.nl/nieuws/binnenland/artikel/5540368/drones-eindhoven-volkel-tuinman-brekelmans-verjaagd"
    },
    {
      popupType: 'Drone sighting',
      date: '22 Nov 2025',
      details: "Additional unidentified drones were observed near sensitive infrastructure in the area.",
      link: "https://www.rtl.nl/nieuws/binnenland/artikel/5540368/drones-eindhoven-volkel-tuinman-brekelmans-verjaagd"
    }
  ]
},

  {
    lat: 51.45190,
    lng: 5.37488,
    icon: icons.droneYellow,
    type: 'drone',      // used for filtering
    risk: 'yellow',
    place: 'airport',
    year: '2025',
    popupType: 'Drone sighting / airport closure ', // shown in popup
    date: '22 Nov 2025,  ~19:00 - 23:00',
    details: "Air traffic was halted following the sighting of multiple drones at the airport ",
    link: "https://www.rtl.nl/nieuws/binnenland/artikel/5540318/vliegverkeer-eindhoven-airport-weer-hervat-na-eerdere-sluiting",
    country: "Eindhoven Airport, Netherlands 🇳🇱",
    note: "Eindhoven airport is both a publicly and militarily used airport",
  },

 {
    lat: 52.24350,
    lng: 5.63432,
    icon: icons.droneYellow,
    type: 'drone',      // used for filtering
    risk: 'yellow',
    place: 'others',
    year: '2025',
    popupType: 'Drone sighting ', // shown in popup
    date: '07 Dec 2025, 10:20',
    details: "A drone entered Dutch airspace on an level where identification is required; the lack of it triggered the Quick Reaction Alert and two F-35  jets were scrambled; the drone left Dutch airspace ",
    link: "https://www.defensie.nl/actueel/nieuws/2025/12/07/f-35-gevechtsvliegtuigen-ingezet-voor-onbekend-object",
    country: "Netherlands 🇳🇱",
  },
    
     /* =========================
       N O R W A Y
    ========================= */

    {
    lat: 60.19315,
    lng: 11.09682,
    icon: icons.droneYellow,
    type: 'drone',      // used for filtering
    risk: 'yellow',
    place: 'airport',
    year: '2025',
    popupType: 'Drone sighting / airport closure ', // shown in popup
    date: '23 Sep 2025, 00:30-04:00',
    details: "The airspace was closed following a drone sighting; a few hours earlier two foreign nationals were arrested for operating a different drone <br> Authorities do not rule out a connection to the incident in Copenhagen",
    link: "https://www.dr.dk/nyheder/indland/droner-set-over-koebenhavns-lufthavn",
    country: "Oslo Gardermoen Airport, Norway 🇳🇴"
  },

  {
    lat: 69.05483,
    lng: 18.54067,
    icon: icons.droneYellow,
    type: 'drone',      // used for filtering
    risk: 'yellow',
    place: 'airport',
    year: '2025',
    popupType: 'Drone sighting / airport closure ', // shown in popup
    date: '23 Sep 2025, 00:30-04:00',
    details: "Two Chinese nationals have been arrested for flying a drone",
    link: "https://www.nrk.no/norge/fly-omdirigert-etter-droneobservasjon-1.17589626",
    country: "Bardufoss Airport, Norway 🇳🇴",
    note: "The area is surrounded by fjords, a popular tourist attraction",
  },

  {
    lat: 65.45869,
    lng: 12.21145,
    icon: icons.droneYellow,
    type: 'drone',      // used for filtering
    risk: 'yellow',
    place: 'airport',
    year: '2025',
    popupType: 'Drone sighting / airport closure ', // shown in popup
    date: '29 Sep 2025, 20:18',
    details: "The police confirms the drone sighting and say that it has seen five to six drone in the sky. The police lost sight of the drones. <br><br>The police considers the Ørland incident, which was reported at the same time, as a likely false alarm",
    link: "https://www.nrk.no/nordland/politiet-om-droner-ved-bronnoysund-lufthavn_-_-sa-fem-seks-stykker-1.17590655#:~:text=Nyhetssenter%20Nordland-,Politiet%20om%20droner%20ved%20Brønnøysund%20lufthavn%3A%20–%20Så%20fem%2Dseks,vei%20fra%20Bodø%20til%20Trondheim.",
    country: "Brønnøysund Airport, Norway 🇳🇴"
  },
    
     /* =========================
        P O L A N D
    ========================= */

     /* =========================
       R O M A N I A
    ========================= */

 {
    lat: 45.16667,
    lng: 28.80000,
    icon: icons.droneRed,
    type: 'drone',      // used for filtering
    risk: 'red',
    place: 'others',
    year: '2025',
    popupType: 'Drone incursion ', // shown in popup
    date: '3 Sep 2025, spotted at 18:23',
    details: "Russian drone flew up to ~10 km into Romanian airspace before returning to Ukrainian airspace. Spotted and tracked by Romanian F‑16 jets",
    link: "https://www.reuters.com/world/drone-breaches-romanian-airspace-during-russian-attack-neighboring-ukraine-2025-09-13/",
    country: "Tulcea county, Romania 🇷🇴",
  },

  {
    lat: 45.40710,
    lng: 28.20130,
    icon: icons.droneRed,
    type: 'drone',      // used for filtering
    risk: 'red',
    place: 'others',
    year: '2025',
    popupType: 'Drone crash ', // shown in popup
    date: '11 Nov 2025',
    details: "Russian drone entered Romanian airspace but due to the weather NATO jets weren't able to be scrambled; the remains were found 5km deep in Romania's territory",
    link: "https://www.reuters.com/business/aerospace-defense/romania-finds-suspected-drone-fragments-after-russian-attack-ukraine-2025-11-11/",
    country: "Grindu, Romania 🇷🇴",
  },

  {
    lat: 45.41417,
    lng: 29.28919,
    icon: icons.droneRed,
    type: 'drone',      // used for filtering
    risk: 'red',
    place: 'others',
    year: '2025',
    popupType: 'Drone incursion ', // shown in popup
    date: '19 Nov 2025, 00:20 - 01:00 ',
    details: "Russian drone flew up to ~8 km into Romanian airspace where it disappeared from the radars. The drone later reappeared in Moldovan airspace from where it reentered Romania and was spotted in Foltești, Galați county again <br> It is unknown what eventually happened to it",
    link: "https://www.digi24.ro/stiri/actualitate/mapn-a-ridicat-doua-avioane-de-lupta-in-timpul-noptii-dupa-ce-o-drona-a-intrat-in-spatiul-aerian-national-a-fost-emis-mesaj-ro-alert-3509181",
    country: "Periprava / Chilia Veche / Foltești, Romania 🇷🇴",
  },

   {
    lat: 46.42270,
    lng: 27.48516,
    icon: icons.droneRed,
    type: 'drone',      // used for filtering
    risk: 'red',
    place: 'others',
    year: '2025',
    popupType: 'Drone incursion ', // shown in popup
    date: '25 Nov 2025, ',
    details: "Two Russian drones flew into Romanian airspace through Ukraine and Moldova; two German Eurofighters were scrambled and given permission to shot the drones down, but they didn't to avoid colateral damage; one flew back into Ukrainian airspace, the other crashed in Puiești, despite being spotted further inside the country earlier (Galati county)",
    link: "https://www.reuters.com/world/romania-scrambles-fighter-jets-after-drones-breach-its-airspace-2025-11-25/",
    country: "Puiești, Romania 🇷🇴",
  },
    
 /* =========================
       S P A I N
    ========================= */

    {
    lat: 39.55322,
    lng: 2.72903,
    icon: icons.droneYellow,
    type: 'drone',      // used for filtering
    risk: 'yellow',
    place: 'airport',
    year: '2025',
    popupType: 'Drone sighting / airport closure ', // shown in popup
    date: '19 Oct 2025, 19:00 - ~19:30',
    details: "Multiple pilots reported a drone which resulted in  the airport being closed; police unsuccessfully used their own drone to localize the drone",
    link: "https://www.ondacero.es/emisoras/baleares/mallorca/noticias/aeropuerto-palma-opera-normalidad-cerrar-este-domingo-trafico-aereo-avistamiento-dron_2025102068f5e4db76c80d35b5f0b84e.html",
    country: "Palma de Mallorca Airport, Spain 🇪🇸"
  },

   {
    lat: 38.28757,
    lng: -0.55278,
    icon: icons.droneYellow,
    type: 'drone',      // used for filtering
    risk: 'yellow',
    place: 'airport',
    year: '2025',
    popupType: 'Drone sighting / airport closure ', // shown in popup
    date: '27 Oct 2025, 20:53 - ~23:00',
    details: " A drone has been seen sighted near the runway; the perpatrator hasn't been found",
    link: "https://elpais.com/espana/comunidad-valenciana/2025-10-28/un-dron-cerca-de-la-pista-de-despegue-obliga-a-cerrar-el-aeropuerto-de-alicante-durante-casi-dos-horas.html",
    country: "Alicante Airport, Spain 🇪🇸"
  },
     /* =========================
       S W E D E N  
    ========================= */

 {
    lat: 55.60529,
    lng: 13.00016,
    icon: icons.droneGreen,
    type: 'drone',      // used for filtering
    risk: 'green',
    place: 'others',
    year: '2025',
    popupType: 'Drone sighting ', // shown in popup
    date: '22 Sep 2025, ~21:00',
    details: "A couple from Malmö reported seeing a large drone from their balcony. The drone headed eastwards <br> The police confirmed getting multiple calls about drone sighting but couldn't verify those reports themselves",
    link: "https://www.aftonbladet.se/nyheter/a/AvjRoE/flera-dronarlarm-till-malmopolisen",
    country: "Malmö, Sweden 🇸🇪"
  },

  {
    lat: 56.15935,
    lng: 15.57863,
    icon: icons.droneYellow,
    type: 'drone',      // used for filtering
    risk: 'yellow',
    place: 'militarybases',
    year: '2025',
    popupType: 'Drone sighting ', // shown in popup
    date: '26 Sep 2025, at night',
    details: "An unidentified drone was seen about a mile from the naval base; the drone did not fly over any restricted objects",
    link: "https://www.sverigesradio.se/artikel/suspected-drones-spotted-near-karlskrona-naval-base",
    country: "Karlskrona naval base, Sweden 🇸🇪"
  },

  {
    lat: 57.66242,
    lng: 12.28776,
    icon: icons.droneYellow,
    type: 'drone',      // used for filtering
    risk: 'yellow',
    place: 'airport',
    year: '2025',
    popupType: ' Drone sighting / airport closure ', // shown in popup
    date: '06 Nov 2025, 17:41 - 21:30',
    details: "One or more drones have been observed at the coast, close to the airport; air traffic resumed at around 21:30",
    link: "https://www.reuters.com/world/traffic-halted-swedish-city-gothenburgs-airport-after-drone-sighting-daily-2025-11-06/",
    country: "Gothenburg Landvetter Airport, Sweden 🇸🇪"
  },
    
     /* =========================
       T U R K E Y
    ========================= */

   {
    lat: 42.87107,
    lng: 34.51879,
    icon: icons.droneYellow,
    type: 'drone',      // used for filtering
    risk: 'yellow',
    place: 'others',
    year: '2025',
    popupType: 'Drone incursion ', // shown in popup
    date: '15 Sep 2025',
    details: " Turkish F-16 fighters shot down an out-of-control unidentified UAV",
    link: "https://www.trtworld.com/article/efc330793d51",
    country: "Black Sea, Türkiye 🇹🇷"
  },
  ];

  const markers = [];

  // Add markers to cluster
 incidents.forEach(i => {
   
const popupHtml = (() => {
  let html = `<b>${i.link ? `<a href="${i.link}" target="_blank">${i.country}</a>` : i.country}</b><br>`;

  if (i.note) {
    html += `<em>${i.note}</em>`;
    if (i.noteLink) html += ` <a href="${i.noteLink}" target="_blank">Source</a>`;
    html += '<br><br>';
  }

  if (Array.isArray(i.incidents)) {
    i.incidents.forEach((inc, idx) => {
      html += `<b>Incident ${idx + 1}</b><br>
               <b>Type:</b> ${inc.popupType}<br>
               <b>Date:</b> ${inc.date}<br>
               <b>Details:</b> ${inc.details}<br>
               ${inc.link ? `<a href="${inc.link}" target="_blank">Source</a>` : ''}
               <hr>`;
    });
  } else {
    html += `<b>Type:</b> ${i.popupType}<br>
             <b>Date:</b> ${i.date}<br>
             <b>Details:</b> ${i.details}<br>
             ${i.link ? `<a href="${i.link}" target="_blank">Source</a>` : ''}`;
  }

  return html;
})();

  const marker = L.marker([i.lat, i.lng], { icon: i.icon })
    .bindPopup(popupHtml);

  marker.meta = i;
  markers.push(marker);
  markerCluster.addLayer(marker);
});

 function applyFilters() {
  markerCluster.clearLayers();

  const showDrone = document.querySelector('#filters input[value="drone"]').checked;
  const showJet = document.querySelector('#filters input[value="jet"]').checked;
  const showBalloon = document.querySelector('#filters input[value="balloon"]').checked;
  const showBorder = document.querySelector('#filters input[value="border"]').checked;

  const showRed = document.querySelector('#filters input[value="red"]').checked;
  const showOrange = document.querySelector('#filters input[value="orange"]').checked;
  const showYellow = document.querySelector('#filters input[value="yellow"]').checked;
  const showGreen = document.querySelector('#filters input[value="green"]').checked;
  const showBlue = document.querySelector('#filters input[value="blue"]').checked;

  const showAirports = document.querySelector('#filters input[value="airports"]').checked;
  const showMilitary = document.querySelector('#filters input[value="militarybases"]').checked;
  const showOthers = document.querySelector('#filters input[value="others"]').checked;

  const show25 = document.querySelector('#filters input[value="2025"]').checked;
  const show26 = document.querySelector('#filters input[value="2026"]').checked;

  const visible = [];

  markers.forEach(m => {
    const { type:t, risk:r, place:p, year:y } = m.meta;

    const typeMatch =
      (t === 'drone' && showDrone) ||
      (t === 'jet' && showJet) ||
      (t === 'balloon' && showBalloon) ||
      (t === 'border' && showBorder);

    const riskMatch =
      (r === 'red' && showRed) ||
      (r === 'orange' && showOrange) ||
      (r === 'yellow' && showYellow) ||
      (r === 'green' && showGreen) ||
      (r === 'blue' && showBlue);

    const placeMatch =
      (p === 'airport' && showAirports) ||
      (p === 'militarybases' && showMilitary) ||
      (p === 'others' && showOthers);

    const yearMatch =
      (y === '2025' && show25) ||
      (y === '2026' && show26);

    if (typeMatch && riskMatch && placeMatch && yearMatch) {
      visible.push(m);
    }
  });

  markerCluster.addLayers(visible);
  }

  // Add event listeners for filters
  document.querySelectorAll('#filters input[type="checkbox"]').forEach(cb => {
    cb.addEventListener('change', applyFilters);
  });
});
