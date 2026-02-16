document.addEventListener('DOMContentLoaded', () => {
  // ------------------------
  // 1️⃣ Initialize map
  // ------------------------
  const map = L.map('map', { zoomControl: false }).setView([20, 0], 2);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(map);
  L.control.zoom({ position: 'bottomleft' }).addTo(map);

  // ------------------------
  // 2️⃣ MarkerCluster group
  // ------------------------
  const markerCluster = L.markerClusterGroup();
  map.addLayer(markerCluster);

  // ------------------------
  // 3️⃣ Icons
  // ------------------------
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

  // ------------------------
  // 4️⃣ Markers array
  // ------------------------
  const markers = [];

  // ------------------------
  // 5️⃣ Your incidents go here
  // ------------------------
  const incidents = [
   
 /* =========================
       B E L G I U M
    ========================= */

 {
    lat: 50.45731,
    lng: 6.22138,
    icon: icons.droneOrange,
    type: 'drone',      // used for filtering
    risk: 'orange',
    place: 'militarybases',
    year: '2025',
    month: '10',
    popupType: 'Drone sighting ', // shown in popup
    date: '03 Oct 2025, before 01:45',
    details: "15 drones were spotted by chance due to the test of anti drone equipment was tested",
    link: "https://www.vrt.be/vrtnws/en/2025/10/03/drones-spotted-above-belgian-military-bases/",
    country: "Elsenborn Military Base, Belgium 🇧🇪",
    note: "The Belgian security service considers Russia to be behind the drones",
    noteLink: "https://www.vrt.be/vrtnws/en/2025/11/05/belgian-security-services-convinced-russia-is-behind-the-drone-i/"
  },

    {
  lat: 50.23922,
  lng: 5.50552,
  icon: icons.droneOrange,
  type: 'drone',        // used for filtering
  risk: 'orange',
  place: 'militarybases',
  year: '2025',
  month: '10',
  country: "Marche-en-Famenne Air Base, Belgium 🇧🇪",

  note: "The Belgian security service considers Russia to be behind the drones",
  noteLink: "https://www.vrt.be/vrtnws/en/2025/11/05/belgian-security-services-convinced-russia-is-behind-the-drone-i/",

  incidents: [
    {
      popupType: 'Drone sighting',
      date: '25 Oct 2025, evening',
      details: "Four to five drones, flying above critical areas of the base, were reported by soldiers",
      link: "https://www.vrt.be/vrtnws/en/2025/10/29/drones-spotted-above-belgian-military-base/"
    },
    {
      popupType: 'Drone sighting',
      date: '28 Oct 2025',
      details: "Several drones have been spotted over the air base",
      link: "https://www.vrt.be/vrtnws/en/2025/10/29/drones-spotted-above-belgian-military-base/"
    }
  ]
},

  {
  lat: 50.24550,
  lng: 4.62085,
  icon: icons.droneOrange,
  type: 'drone',        // used for filtering
  risk: 'orange',
  place: 'militarybases',
  year: '2025',
  month: ['10', '11'],
  country: "Florennes Air Base, Belgium 🇧🇪",

  note: "Florennes air base is home to Belgium's F-35 jets <br><br> The Belgian security service considers Russia to be behind the drones",
  noteLink: "https://www.vrt.be/vrtnws/en/2025/11/05/belgian-security-services-convinced-russia-is-behind-the-drone-i/",

  incidents: [
    {
      popupType: 'Drone sighting',
      date: '30 Oct 2025, 20:30',
      details: "Employees at the base and local police report seeing drone-like lights",
      link: "https://www.rtbf.be/article/intrusions-de-drones-dans-l-espace-aerien-suspicion-de-vol-de-drones-a-proximite-de-la-base-aerienne-de-florennes-11627078"
    },
    {
      popupType: 'Drone sighting',
      date: ' 04 Nov 2025, 20:30',
      details: "Local citizens reported drones over the air base",
      link: "https://www.vrt.be/vrtnws/en/2025/11/05/air-traffic-halted-last-night-due-to-drones-at-brussels-airport/"
    },
     {
      popupType: 'Drone sighting',
      date: '06 Nov 2025, evening, before 21:30',
      details: "Drone sighting close to the Air Base. The police can't confirm that sighting but considers it to be very likely true",
      link: "https://vrtnws.be/p.Pqn1MwxDy#bGl2ZWJsb2dfaXRlbV8xNzYyNDYxMDA1NDQ4"
    }
  ]
},

{
  lat: 51.17255,
  lng: 5.45203,
  icon: icons.droneOrange,
  type: 'drone',        // used for filtering
  risk: 'orange',
  place: 'militarybases',
  year: '2025',
  month: '11',
  country: "Kleine-Brogel Air Base, Belgium 🇧🇪",

  note: "Kleine-Brogel is a NATO-used base and is believed to be home to US nuclear weapons <br><br> The Belgian security service considers Russia to be behind the drones",
  noteLink: "https://www.vrt.be/vrtnws/en/2025/11/05/belgian-security-services-convinced-russia-is-behind-the-drone-i/",

  incidents: [
    {
      popupType: 'Drone sighting',
      date: '01 Nov 2025, night',
      details: "The police got three reports of a drone. Belgian Minister of Defence, Theo Francken, says that those drones had targeted Kleine-Brogel and didn't coincidentally end up there <br> A drone jammer was used but was unsuccessful ",
      link: "https://x.com/franckentheo/status/1984908846339391647?s=61"
    },
    {
      popupType: 'Drone sighting',
      date: '04 Nov 2025, ~18:30',
      details: "Local citizens reported the sighting of six drones near the base, the police found two once they arrived",
      link: "https://www.vrt.be/vrtnws/en/2025/11/05/air-traffic-halted-last-night-due-to-drones-at-brussels-airport/"
    }
  ]
},
    
 {
    lat: 51.12018,
    lng: 5.30705,
    icon: icons.droneOrange,
    type: 'drone',      // used for filtering
    risk: 'orange',
    place: 'others',
    year: '2025',
    month: '11',
    popupType: 'Drone sighting ', // shown in popup
    date: 'Weekend of 01-02 Nov 2025',
    details: "Drones were spotted over the airfield <br> Beverlo is a former military airfield ",
    link: "https://www.bbc.com/news/articles/c20e8qzllewo",
    country: "Beverlo Airfield, Belgium 🇧🇪",
    note: "The Belgian security service considers Russia to be behind the drones",
    noteLink: "https://www.vrt.be/vrtnws/en/2025/11/05/belgian-security-services-convinced-russia-is-behind-the-drone-i/"
  },

    {
  lat: 51.20031,
  lng: 2.87392,
  icon: icons.droneOrange,
  type: 'drone',        // used for filtering
  risk: 'orange',
  place: 'airports',
  year: '2025',
  month: '11',
  country: "Ostend Airport, Belgium 🇧🇪",

  note: "The Belgian security service considers Russia to be behind the drones",
  noteLink: "https://www.vrt.be/vrtnws/en/2025/11/05/belgian-security-services-convinced-russia-is-behind-the-drone-i/",

  incidents: [
    {
      popupType: 'Drone sighting',
      date: '01 Nov 2025',
      details: "Drones were spotted",
      link: "https://www.bbc.com/news/articles/c20e8qzllewo"
    },
    {
      popupType: 'Drone sighting',
      date: '04 Nov 2025, ~19:00',
      details: "Drones were spotted",
      link: "https://www.reuters.com/world/belgium-scrambles-address-airport-closures-caused-by-drones-2025-11-05/"
    }
  ]
},

{
  lat: 51.18895,
  lng: 4.46305,
  icon: icons.droneOrange,
  type: 'drone',        // used for filtering
  risk: 'orange',
  place: 'airports',
  year: '2025',
  month: '11',
  country: "Antwerp Airport, Belgium 🇧🇪",

  note: "The Belgian security service considers Russia to be behind the drones",
  noteLink: "https://www.vrt.be/vrtnws/en/2025/11/05/belgian-security-services-convinced-russia-is-behind-the-drone-i/",

  incidents: [
    {
      popupType: 'Drone sighting',
      date: '01 Nov 2025',
      details: "A drone endangered a landing plane",
      link: "https://www.brusselstimes.com/1822518/another-drone-spotted-over-antwerp-airport-and-flemish-military-base"
    },
    {
      popupType: 'Drone sighting',
      date: '04 Nov 2025, ~19:00',
      details: "Drones were spotted forcing the airport to close",
      link: "https://www.reuters.com/world/belgium-scrambles-address-airport-closures-caused-by-drones-2025-11-05/"
    }
  ]
},

     {
    lat: 51.00058,
    lng: 5.08322,
    icon: icons.droneOrange,
    type: 'drone',      // used for filtering
    risk: 'orange',
    place: 'others',
    year: '2025',
    month: '11',
    popupType: 'Drone sighting ', // shown in popup
    date: '04 Nov 2025, ~21:30 ',
    details: "Police and military security services confirmed the sighting of four drones over the base ",
    link: "https://www.vrt.be/vrtnws/nl/2025/11/05/drones-boven-luchtmachtbasis-schaffen/",
    country: "Schaffen air base, Belgium 🇧🇪",
    note: "The Belgian security service considers Russia to be behind the drones",
    noteLink: "https://www.vrt.be/vrtnws/en/2025/11/05/belgian-security-services-convinced-russia-is-behind-the-drone-i/"
  },

  {
    lat: 50.81528,
    lng: 5.18589,
    icon: icons.droneOrange,
    type: 'drone',      // used for filtering
    risk: 'orange',
    place: 'others',
    year: '2025',
    month: '11',
    popupType: 'Drone sighting ', // shown in popup
    date: ' 04 / 05 Nov 2025, 23:00 / 02:00 ',
    details: "A single drone has been seen twice over the school by both the students and patrols ",
    link: "https://www.vrt.be/vrtnws/nl/2025/11/07/voorbije-2-nachten-ook-drone-gespot-boven-koninklijke-school-voo/",
    country: "Royal School for Non-Commissioned Officers, Sint-Truiden, Belgium 🇧🇪",
    note: "The Belgian security service considers Russia to be behind the drones",
    noteLink: "https://www.vrt.be/vrtnws/en/2025/11/05/belgian-security-services-convinced-russia-is-behind-the-drone-i/"
  },


{
  lat: 50.63821,
  lng: 5.44095,
  icon: icons.droneOrange,
  type: 'drone',        // used for filtering
  risk: 'orange',
  place: 'airports',
  year: '2025',
  month: '11',
  country: "Liège Airport, Belgium 🇧🇪",

  note: "Liège airport is a major cargo hub <br><br> The Belgian security service considers Russia to be behind the drones",
  noteLink: "https://www.vrt.be/vrtnws/en/2025/11/05/belgian-security-services-convinced-russia-is-behind-the-drone-i/",

  incidents: [
    {
      popupType: 'Drone sighting / airspace closure',
      date: '4 Nov 2025, ~21:30 ',
      details: "Liege airprot has been closed after the sighting of a drone",
      link: "https://www.vrt.be/vrtnws/nl/liveblog/niet-alleen-boven-eindhoven-ook-boven-volkel-zijn-opnieuw-drone~1762286776579/"
    },
    {
      popupType: 'Drone sighting / airspace closure',
      date: '06 Nov 2025, 22:00 - 23:20',
      details: "Air traffic was halted following a drone sighting at the airport",
      link: "https://vrtnws.be/p.Pqn1MwxDy#bGl2ZWJsb2dfaXRlbV8xNzYyNDY5NDc4OTY5"
    },
    {
      popupType: 'Drone sighting / airspace closure',
      date: ' 07 Nov 2025, 06:56 - 08:00',
      details: " Air traffic was halted following a drone sighting at the airport",
      link: "https://vrtnws.be/p.Pqn1MwxDy#bGl2ZWJsb2dfaXRlbV8xNzYyNDk3OTEyNzM5"
    },
    {
      popupType: 'Drone sighting / airspace closure',
      date: '08 Nov 2025, 19:00 - 19:30',
      details: "Air traffic was halted following a drone sighting at the airport",
      link: "https://vrtnws.be/p.Pqn1MwxDy#bGl2ZWJsb2dfaXRlbV8xNzYyNjI4MzgzMzU1"
    },
     {
      popupType: 'Drone sighting / airspace closure',
      date: '09 Nov 2025, 19:30 - 20:25',
      details: "Air traffic was halted following three drone sightings at the airport",
      link: "https://vrtnws.be/p.Pqn1MwxDy#bGl2ZWJsb2dfaXRlbV8xNzYyNzE1MzU4OTIw"
    }
  ]
},

    
{
  lat: 50.90090,
  lng: 4.48097,
  icon: icons.droneOrange,
  type: 'drone',        // used for filtering
  risk: 'orange',
  place: 'airports',
  year: '2025',
  month: '11',
  country: "Brussels Airport, Belgium 🇧🇪",

  note: "The Belgian security service considers Russia to be behind the drones",
  noteLink: "https://www.vrt.be/vrtnws/en/2025/11/05/belgian-security-services-convinced-russia-is-behind-the-drone-i/",

  incidents: [
    {
      popupType: 'Drone sighting / airspace closure',
      date: '04 Nov 2025, ~20:00 - ~21:20; ~21:50 - ~23:30 ',
      details: "A drone has been reported shortly before 20:00 which caused the airspace to be closed. The airspace was later closed again due to another drone sighting",
      link: "https://www.vrt.be/vrtnws/nl/liveblog/niet-alleen-boven-eindhoven-ook-boven-volkel-zijn-opnieuw-drone~1762286776579/"
    },
    {
      popupType: 'Drone sighting / airspace closure',
      date: '06 Nov 2025, 21:20 - 22:00',
      details: "The airport was closed following a drone sighting over the airport",
      link: "https://vrtnws.be/p.Pqn1MwxDy#bGl2ZWJsb2dfaXRlbV8xNzYyNDYyMDI5NDQw"
    }
  ]
},

     {
    lat: 50.86459,
    lng: 4.69377,
    icon: icons.droneGreen,
    type: 'drone',      // used for filtering
    risk: 'green',
    place: 'militarybases',
    year: '2025',
    month: '11',
    popupType: 'Drone sighting ', // shown in popup
    date: ' 05 Nov 2025, 18:15 ',
    details: "The police got notified about drones near the Heverlee barracks but the police could't verify these sightings once they arrived ",
    link: "https://today.rtl.lu/news/world/a/2352410.html",
    country: "Heverlee Barracks, Belgium 🇧🇪",
  },

    
  {
    lat: 51.20158,
    lng: 5.04505,
    icon: icons.droneOrange,
    type: 'drone',      // used for filtering
    risk: 'orange',
    place: 'infrastructure',
    year: '2025',
    month:'11',
    popupType: 'Drone sighting ', // shown in popup
    date: ' 06 Nov 2025, evening, before 21:30 ',
    details: "The police confirms a drone flying over the SCK CEN nuclear research center. The drone later flew over the European School in Mol",
    link: "https://vrtnws.be/p.Pqn1MwxDy#bGl2ZWJsb2dfaXRlbV8xNzYyNDYxMDY0MzMw",
    country: "Mol, Belgium 🇧🇪",
    note: "The Belgian security service considers Russia to be behind the drones",
    noteLink: "https://www.vrt.be/vrtnws/en/2025/11/05/belgian-security-services-convinced-russia-is-behind-the-drone-i/"
  },

  {
    lat: 51.29547,
    lng: 4.31852,
    icon: icons.droneOrange,
    type: 'drone',      // used for filtering
    risk: 'orange',
    place: 'infrastructure',
    year: '2025',
    month: '11',
    popupType: 'Drone sighting ', // shown in popup
    date: ' 06 Nov 2025, evening ',
    details: "The port police confirms the sighting of drones but can't give further details",
    link: "https://vrtnws.be/p.Pqn1MwxDy#bGl2ZWJsb2dfaXRlbV8xNzYyNDk3MDQ3MDc3",
    country: "Port of Antwerp, Belgium 🇧🇪",
    note: "The Belgian security service considers Russia to be behind the drones",
    noteLink: "https://www.vrt.be/vrtnws/en/2025/11/05/belgian-security-services-convinced-russia-is-behind-the-drone-i/"
  },

      {
    lat: 50.75114,
    lng: 4.04221,
    icon: icons.droneGreen,
    type: 'drone',      // used for filtering
    risk: 'green',
    place: 'others',
    year: '2025',
    month: '11',
    popupType: 'Drone sighting ', // shown in popup
    date: ' 08 Nov 2025 ',
    details: "Multiple drone sightings were reported but the police couldn't verify them yet <br> Reports came from Heikruis, Herfelingen, Herne, and Tollembeek",
    link: "https://www.vrt.be/vrtnws/nl/2025/11/09/meldingen-van-drones-in-buurt-van-satcom-bollen-van-navo-in-kest/",
    country: "Pajottegem, Belgium 🇧🇪",
    note: "The Kester NATO Setcom base is close to the locations of the reported drones",
  },

      {
    lat: 51.31112,
    lng: 4.26432,
    icon: icons.droneOrange,
    type: 'drone',      // used for filtering
    risk: 'orange',
    place: 'infrastructure',
    year: '2025',
    month: '11',
    popupType: 'Drone sighting ', // shown in popup
    date: ' 09 Nov 2025, ~22:00 - ~23:00 ',
    details: "Three drones have been reported shortly before 22:00, later two more drones have been discovered",
    link: "https://www.politico.eu/article/drones-spotted-belgium-nuclear-plant-doel-airspace-incursions/",
    country: "Doel Nuclear Power Plant, Belgium 🇧🇪",
    note: "The Belgian security service considers Russia to be behind the drones",
    noteLink: "https://www.vrt.be/vrtnws/en/2025/11/05/belgian-security-services-convinced-russia-is-behind-the-drone-i/"
  },
    
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
    month: '09',
    popupType: 'Drone sightings ', // shown in popup
    date: '2025',
    details: "On September 10th, the Czech army reported an growing number of drone sightings over it's military bases. No further details were provided",
    link: "https://www.reuters.com/business/aerospace-defense/russias-suspected-hybrid-war-puts-european-air-defences-test-2025-11-05/",
    country: "Czech Republic 🇨🇿"
  },
    
 /* =========================
       D E N M A R K
    ========================= */

  {
    lat: 55.60913,
    lng: 12.65098,
    icon: icons.droneOrange,
    type: 'drone',      // used for filtering
    risk: 'orange',
    place: 'airports',
    year: '2025',
    month: '09',
    popupType: 'Drone sighting / airport closure ', // shown in popup
    date: '22 Sep 2025, flights halted ~20:26–00:30',
    details: "Copenhagen Airport was temporarily closed after two–three drones were spotted. Danish authorities said that the drones were operated by a 'capable actor.' <br><br> Invoking NATO Article 4 was considered but ultimately Denmark decided against it",
    link: "https://news.sky.com/story/flights-suspended-at-copenhagen-airport-after-drone-sightings-13436457",
    country: "Copenhagen Airport, Denmark 🇩🇰",
    note: "The Danish PM says only one country could threaten Denmark and the Defence Intelligence Service says that Russia is engaging in hybrid warfare against Denmark",
    noteLink: "https://www.npr.org/2025/10/03/nx-s1-5561990/denmark-russia-drones-hybrid-war"
  },

  
{
  lat: 57.08644,
  lng: 9.86798,
  icon: icons.droneOrange,
  type: 'drone',        // used for filtering
  risk: 'orange',
  place: 'airports',
  year: '2025',
  month: ['09', '11'],
  country: "Aalborg Airport, Denmark 🇩🇰",

  note: "Aalborg airport is both a publicly and militarily used airport <br><br> The Danish PM says only one country could threaten Denmark and the Defence Intelligence Service says that Russia is engaging in hybrid warfare against Denmark",
   noteLink: "https://www.npr.org/2025/10/03/nx-s1-5561990/denmark-russia-drones-hybrid-war",

  incidents: [
    {
      popupType: 'Drone sighting / airport closure',
      date: '24 Sep 2025,, 21:45 -  ~3:00; airspace closed ~23:16- ~03:15',
      details: "Multiple unidentified drones reported on the area of the Aalborg airport. Authorities claim the pattern was similar to the accident in Copenhagen",
      link: "https://www.dr.dk/nyheder/indland/droner-set-over-koebenhavns-lufthavn?focusId=10234855"
    },
    {
      popupType: 'Suspected false alarm  / airport closure',
      date: '25 Sep 2025, ~23:40–00:35',
      details: "Air traffic was halted following a suspected drone observation by the police. Police wasn't able to confirm their sighting",
      link: "https://www.dr.dk/nyheder/indland/droner-set-over-koebenhavns-lufthavn?focusId=10242688"
    },
    {
      popupType: 'Drone sighting / airport closure',
      date: '14 Nov 2025, 21:30–23:10',
      details: "Air traffic halted after possible drone sighting",
      link: "https://www.anews.com.tr/europe/2025/11/17/drone-alert-temporarily-shuts-danish-airport"
    }
  ]
},
  
  {
    lat: 56.29746,
    lng: 9.12463,
    icon: icons.droneOrange,
    type: 'drone',      // used for filtering
    risk: 'orange',
    place: 'airports',
    year: '2025',
    month: '09',
    popupType: 'Drone sighting / airport closure ', // shown in popup
    date: '24 Sep 2025, 20:15',
    details: "One or two drones were seen over the air base. The drones weren't taken down",
    link: "https://www.france24.com/en/europe/20250927-new-drones-sighted-over-denmark-s-largest-military-base",
    country: "Karup Air Base, Denmark 🇩🇰",
    note: "All Danish military helicopters, airspace surveillance, the flight school, support functions, and the defence command are stationed in Karup <br><br> Karup Air Base shares one runway with the Midtjylland civilian airport <br><br> The Danish PM says only one country could threaten Denmark and the Defence Intelligence Service says that Russia is engaging in hybrid warfare against Denmark",
    noteLink: "https://www.npr.org/2025/10/03/nx-s1-5561990/denmark-russia-drones-hybrid-war"
  },

  {
    lat: 55.52572,
    lng: 8.55197,
    icon: icons.droneOrange,
    type: 'drone',      // used for filtering
    risk: 'orange',
    place: 'airports',
    year: '2025',
     month: '09',
    popupType: 'Drone sighting / airport closure ', // shown in popup
    date: '24 Sep 2025, sightings ~22:00 - 02:08',
    details: " Drones were reported in the airspace of Esbjerg Airport. Number of drones remains unknown. The airport wasn't closed due to no more flights being scheduled until the morning",
    link: "https://www.dr.dk/nyheder/indland/droner-set-over-koebenhavns-lufthavn",
    country: "Esbjerg Airport, Denmark 🇩🇰",
    note: "The Danish PM says only one country could threaten Denmark and the Defence Intelligence Service says that Russia is engaging in hybrid warfare against Denmark",
    noteLink: "https://www.npr.org/2025/10/03/nx-s1-5561990/denmark-russia-drones-hybrid-war"
  },

  {
    lat: 55.22555,
    lng: 9.26393,
    icon: icons.droneOrange,
    type: 'drone',      // used for filtering
    risk: 'orange',
    place: 'militarybases',
    year: '2025',
     month: '09',
    popupType: 'Drone sighting / airport closure ', // shown in popup
    date: '24 Sep 2025, sightings ~22:00 - 02:08',
    details: "Drones were reported in the airspace of Skrydstrup air abse. Number of drones remains unknown.",
    link: "https://www.dr.dk/nyheder/indland/droner-set-over-koebenhavns-lufthavn",
    country: "Skrydstrup Air Base, Denmark 🇩🇰",
    note: "The Danish PM says only one country could threaten Denmark and the Defence Intelligence Service says that Russia is engaging in hybrid warfare against Denmark",
    noteLink: "https://www.npr.org/2025/10/03/nx-s1-5561990/denmark-russia-drones-hybrid-war"
  },

  {
    lat: 54.96255,
    lng: 9.79265,
    icon: icons.droneOrange,
    type: 'drone',      // used for filtering
    risk: 'orange',
    place: 'airports',
    year: '2025',
     month: '09',
    popupType: 'Drone sighting / airport closure ', // shown in popup
    date: '24 Sep 2025, sightings ~22:00 - 02:08',
    details: "Drones were reported in the airspace near Sønderborg Airport. Number of drones remains unknown. The airport wasn't closed due to no more flights being scheduled until the morning.",
    link: "https://www.dr.dk/nyheder/indland/droner-set-over-koebenhavns-lufthavn",
    country: "Sønderborg Airport, Denmark 🇩🇰",
    note: "The Danish PM says only one country could threaten Denmark and the Defence Intelligence Service says that Russia is engaging in hybrid warfare against Denmark",
    noteLink: "https://www.npr.org/2025/10/03/nx-s1-5561990/denmark-russia-drones-hybrid-war"
  },

  {
    lat: 56.34824,
    lng: 8.60471,
    icon: icons.droneOrange,
    type: 'drone',      // used for filtering
    risk: 'orange',
    place: 'militarybases',
    year: '2025',
    month: '09',
    popupType: 'Drone sighting', // shown in popup
    date: '25 Sep 2025, sightings ~03:00',
    details: "The police confirmed that a drone was flying at this location after receiving reports about an unidentified drone",
    link: "https://www.kristeligt-dagblad.dk/drone-spottet-ved-kaserne-i-holstebro",
    country: "Jutland Dragoon Regiment barracks in Holstebro, Denmark 🇩🇰",
    note: "The Danish PM says only one country could threaten Denmark and the Defence Intelligence Service says that Russia is engaging in hybrid warfare against Denmark",
    noteLink: "https://www.npr.org/2025/10/03/nx-s1-5561990/denmark-russia-drones-hybrid-war"
  },

  {
    lat: 56.00270,
    lng: 2.81447,
    icon: icons.droneGreen,
    type: 'drone',      // used for filtering
    risk: 'green',
    place: 'others',
    year: '2025',
     month: '09',
    popupType: 'Unverified Drone sighting ', // shown in popup
    date: '24 Sep 2025',
    details: "Danish civil rescue company 'Esvagt' reports that it has possibly observed multiple drones flying over the North Sea, near oil fields",
    link: "https://www.reuters.com/world/europe/denmark-reopens-airports-after-drone-disruption-2025-09-25/",
    country: "North Sea 🇪🇺 / 🇩🇰",
  },
    
  {
    lat: 55.73502,
    lng: 9.12933,
    icon: icons.droneGreen,
    type: 'drone',      // used for filtering
    risk: 'green',
    place: 'airports',
    year: '2025',
     month: '09',
    popupType: 'Unverified Drone sighting / airport closure ', // shown in popup
    date: '25 Sep 2025, Reported 04:21, airport closed 04:40 - ~05:50',
    details: "The police was unable to verify the drone sighting",
    link: "https://www.dr.dk/nyheder/indland/droner-set-over-koebenhavns-lufthavn?focusId=10235626",
    country: "Billund Airport, Denmark 🇩🇰",
    note: "The Danish PM says only one country could threaten Denmark and the Defence Intelligence Service says that Russia is engaging in hybrid warfare against Denmark",
    noteLink: "https://www.npr.org/2025/10/03/nx-s1-5561990/denmark-russia-drones-hybrid-war"
  },

      {
    lat: 55.06486,
    lng: 14.75415,
    icon: icons.droneGreen,
    type: 'drone',      // used for filtering
    risk: 'green',
    place: 'airports',
    year: '2025',
     month: '09',
    popupType: 'Unverified Drone sighting ', // shown in popup
    date: '25 Sep 2025, sightings ~05:49',
    details: "Police confirmed that they have seen blinking lights over the airport but won't deny or confirm if those lights were a drone",
    link: "https://www.dr.dk/nyheder/indland/droner-set-over-koebenhavns-lufthavn?focusId=10235614",
    country: "Rønne Airport, Denmark 🇩🇰",
    note: "The Danish PM says only one country could threaten Denmark and the Defence Intelligence Service says that Russia is engaging in hybrid warfare against Denmark",
    noteLink: "https://www.npr.org/2025/10/03/nx-s1-5561990/denmark-russia-drones-hybrid-war"
  },


  {
    lat: 55.33158,
    lng: 11.13699,
    icon: icons.droneGreen,
    type: 'drone',      // used for filtering
    risk: 'green',
    place: 'infrastructure',
    year: '2025',
     month: '09',
    popupType: 'Unverified Drone sighting ', // shown in popup
    date: '25 Sep 2025',
    details: "The police responded to reports of drones over the Port of Korsør. No further information published since then",
    link: "https://x.com/ssj_lfpoliti/status/1971177421018890658?s=61",
    country: "Port of Korsør, Denmark 🇩🇰",
  },
    
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
     month: '09',
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
     month: '10',
    popupType: 'Drone sighting / drone downed ', // shown in popup
    date: '17 Oct 2025',
    details: "A drone flying near the US camp Reedo was downed by an anti-drone gun. Authorities couldn't find the remains of the drone in the area it was presumably shot down",
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
    month: '11',
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
     month: '12',
    popupType: 'Border crossing ', // shown in popup
    date: '  17 Dec 2025, ~10:00 ',
    details: "Three Russian border guards crossed the border on hovercrafts. They walked on the stone breakwater and returned to Russia again <br> It is unknown whether this was intentional or not",
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
    place: 'infrastructure',
    year: '2025',
     month: '09',
    popupType: 'Drone sighting ', // shown in popup
    date: ' 20/21 Sep 2025 ',
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
   month: '11',
    popupType: 'Drone sightings ', // shown in popup
    date: ' 07 Nov 2025, 23:45 - 23:50 ',
    details: "1: A Policeman reported a drone sighting at the Mulhouse Police station (he didn't see the drone but could hear it) at 23:45 <br> 2: At 23:50 a drone was reported at the Mulhouse Nord station, where a convoy of Leclerc tanks was stationed at 23:30. The drone flew without any lights on over the convoy and disappeared to an unknown location <br> <br> The police has no evidence to say whether it was a intentional or unintentional flight over these areas",
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
    month: '11',
    popupType: 'Drone sighting ', // shown in popup
    date: ' 10 Nov 2025, 19:00 ',
    details: "A drone flew twice over the Eurenco plant which produces gunpowder for the French Army. The drones couldn't be identified or downed",
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
    month: '12',
    popupType: 'Drone sighting ', // shown in popup
    date: ' 04 Dec 2025, 19:30 ',
    details: "Five drones were spotted over the base with the help of anti drone systems. The stationed battalion shot at the drones",
    link: "https://www.lemonde.fr/en/france/article/2025/12/05/france-takes-anti-drone-measures-after-flight-over-nuclear-sub-base_6748188_7.html",
    country: "Île Longue, France 🇫🇷",
    note: "Île Longue is home to four French nuclear ballistic missile submarines",
    note_Link: "https://www.lemonde.fr/en/france/article/2025/12/05/france-takes-anti-drone-measures-after-flight-over-nuclear-sub-base_6748188_7.html"
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
    place: 'infrastructure',
    year: '2025',
    month: '09',
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
     month: '09',
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
    place: 'infrastructure',
    year: '2025',
     month: '09',
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
     month: '09',
    popupType: 'Drone sightings ', // shown in popup
    date: '25? Sep 2025',
    details: "Coordinated and connected drones were spotted over the overseas port and the marine command in Rostock",
    link: "https://www.ndr.de/nachrichten/schleswig-holstein/spiegel-drohnen-ueber-schleswig-holstein-sollen-kritische-infrastruktur-ausgespaeht-haben,drohnen-182.html",
    country: "Rostock, Germany 🇩🇪",
    note: "Spiegel also reported a sighting over the Bundeswehr location in Sanitz, Mecklenburg-Vorpommern, which was denied by the Bundeswehr",
  },

{
  lat: 48.35396,
  lng: 11.77859,
  icon: icons.droneYellow,
  type: 'drone',        // used for filtering
  risk: 'yellow',
  place: 'airports',
  year: '2025',
   month: '10',
  country: "Munich Airport, Germany 🇩🇪",

  note: "The Oktoberfest was taking place during both incidents",

  incidents: [
    {
      popupType: 'Drone sighting / airport closure',
      date: '02  Oct 2025, sightings 20:30 - ~00:00, airspace closed 22:18 after the first drone sighting on airport territory at 22:10',
      details: "An unknown amount of drones was reported near and at the airport but the police wasn't able to find any suspects.",
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
     month: '10',
    popupType: 'Drone sighting ', // shown in popup
    date: '03 Oct 2025, 01:45',
    details: " The 15 drones from the Elsenborn military base were last spotted over Düren by the police",
    link: "https://www.vrt.be/vrtnws/en/2025/10/03/drones-spotted-above-belgian-military-bases/",
    country: "Düren, Germany 🇩🇪",
    note: "The Belgian security service considers Russia to be behind the drones",
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
    month: '10',
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
    place: 'airports',
    year: '2025',
    month: '10',
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
    place: 'airports',
    year: '2025',
     month: '11',
    popupType: 'Drone sighting / airport closure ', // shown in popup
    date: '2 Nov 2025, airspace  was closed in the evening for 40 minutes',
    details: "Drone sighting reported. The police won't give information about the drone. Espionage is unlikely but not ruled out according to the investigators",
    link: "https://www.butenunbinnen.de/nachrichten/drohne-flughafen-bremen-102.html",
    country: "Bremen Airport, Germany 🇩🇪",
  },

{
  lat: 52.46144,
  lng: 9.68633,
  icon: icons.droneYellow,
  type: 'drone',      // used for filtering
  risk: 'yellow',
  place: 'airports',
  year: '2025',
  month: '11',
  country: "Hannover Airport, Germany 🇩🇪",

  incidents: [
    {
    popupType: 'Drone sighting / airport closure ', // shown in popup
    date: '5 Nov 2025, 22:00 - 22:45',
    details: "A pilot sighted a drone while landing at the airport which caused the airport to close it's airspace. The drone reportedly flew over an industrial area next to the airport",
    link: "https://www.bild.de/news/flug-nach-muenchen-umgeleitet-drohnen-alarm-am-flughafen-hannover-690bce570580923d09988aec",
    },
    {
      popupType: 'Drone sighting / airport closure',
      date: '26 Dec 2025, 21:47 - 00:16',
      details: "At least five drones were reported near the airport disrupting air traffic. One of the drones was seen at the aerodrome near the airport. The airport was aproached by at least two of them",
      link: "https://www.dw.com/en/germany-drones-disrupt-air-traffic-in-hanover/a-75316744"
    },
    {
      popupType: 'Drone sighting / airport closure',
      date: '08 - 12 Jan 2026',
      details: "Five sightings were reported on multiple days in or near the borders of the drone flight restriction area. <br> The police identified two of those sightings as DJI-made drones, the other three sightings were not confirmed so far and are based on witness reports. ",
      link: "https://www.welt.de/politik/deutschland/plus698ed22a616e1cbb1fcd4be2/sabotage-drohnen-brandanschlaege-geheimpapier-zeigt-das-ausmass-der-angriffe-in-deutschland.html"
    }
  ]
},
    
  {
    lat: 52.59799,
    lng: 10.03044,
    icon: icons.droneOrange,
    type: 'drone',      // used for filtering
    risk: 'orange',
    place: 'militarybases',
    year: '2025',
    month: '12',
    popupType: 'Drone sighting ', // shown in popup
    date: '11 Dec 2025, 19:00 - 23:00',
    details: "Up to 25 drones flew over the barracks for multiple hours. The police says that it was a professional actor. According to the colonel, the drones were supposed to be seen as they had all lights on <br> The drones were large and flew in formation <br><br> The Bundeswehr didn't shoot them down or chase them away because there was nothing to spy on and no danger to the public or air traffic ",
    link: "https://www.haz.de/der-norden/luftalarm-bei-der-bundeswehr-zwei-dutzend-drohnen-kreisen-ueber-celler-kaserne-73NJM63WX5E45P4QOAUCX23OC4.html",
    country: "Immelmann barracks, Celle, Germany 🇩🇪",
    note: "The colonel suspects those drones to be Russian",
    noteLink: "https://www.haz.de/der-norden/luftalarm-bei-der-bundeswehr-zwei-dutzend-drohnen-kreisen-ueber-celler-kaserne-73NJM63WX5E45P4QOAUCX23OC4.html",
  },

  {
    lat: 52.91350,
    lng: 10.18650,
    icon: icons.droneYellow,
    type: 'drone',      // used for filtering
    risk: 'yellow',
    place: 'militarybases',
    year: '2025',
     month: '12',
    popupType: 'Drone sighting ', // shown in popup
    date: '15 Dec 2025',
    details: "Security personnel has spotted multiple drones over the northern part of the Air Base. The drones flew in formation and disappeared eastwards shortly afterwards. <br><br> Police and Bundeswehr didn't react to those drones because they didn't pose any immediate threat",
    link: "https://www.cz.de/lokales/celle-lk/celle/provokationen-gehen-weiter-unbekannte-drohnen-jetzt-auch-beim-bundeswehr-fliegerhorst-fassberg-QCF3BDQLM5DRJMUGOGQRZCJWEA.html",
    country: "Faßberg Air Base, Germany 🇩🇪",
    note: "Faßberg is home to the Air Force Technical Training Center",
  },

  {
    lat: 51.81460,
    lng: 13.21903,
    icon: icons.droneYellow,
    type: 'drone',      // used for filtering
    risk: 'yellow',
    place: 'militarybases',
    year: '2025',
     month: '12',
    popupType: 'Drone sighting ', // shown in popup
    date: '01 Dec 2025, 16:40',
    details: "Three drones of an unknown type were spotted above an Arrow 3, only two days before its commissioning. One of the drones was visually confirmed by a Bundeswehr drone and an attemt to shoot the drones down failed. <br><br> According to Bundeswehr it is already the second suspicious drone sighting over this weapon system and it is assumed that this incident was intended.",
    link: "https://www.tagesschau.de/investigativ/ndr-wdr/drohnenabwehr-120.html",
    country: " Schönewalde/Holzdorf, Germany 🇩🇪",
  },

  {
    lat: 50.979722,
    lng: 10.958056,
    icon: icons.droneYellow,
    type: 'drone',      // used for filtering
    risk: 'yellow',
    place: 'airports',
    year: '2025',
     month: '10',
    popupType: 'Drone sighting / airport closure', // shown in popup
    date: '22 Oct 2025, 00:30 - 01:49',
    details: "Five drones have been spotted in the area of the airport and an helicopter of the federal police was used. <br><br> According to MDR Thüringen, Investigators consider this case to be special since it was the first time this many drones were seen at a German airport.",
    link: "https://www.mdr.de/nachrichten/thueringen/mitte-thueringen/erfurt/flughafen-drohne-flugzeug-reise-102.html",
    country: "Erfurt-Weimar Airport, Germany 🇩🇪",
  },


  {
    lat: 50.87845,
    lng: 10.97222,
    icon: icons.droneYellow,
    type: 'drone',      // used for filtering
    risk: 'yellow',
    place: 'others',
    year: '2025',
     month: '10',
    popupType: 'Drone sighting ', // shown in popup
    date: '22 Oct 2025, sometime between 00:30 and 01:49',
    details: "Two drones were seen in the area of Amt Wachsenburg-Arnstadt, at the same time as the incident at Erfurt-Weimar Airport <br><br> It is unknown if this sighting is connected to the sighting at Erfurt-Weimar Airport",
    link: "https://www.mdr.de/nachrichten/thueringen/mitte-thueringen/erfurt/flughafen-drohne-flugzeug-reise-102.html",
    country: "Amt Wachsenburg-Arnstadt, Germany 🇩🇪",
  },

  {
    lat: 54.43683,
    lng: 11.19755,
    icon: icons.droneYellow,
    type: 'drone',      // used for filtering
    risk: 'yellow',
    place: 'others',
    year: '2026',
     month: '01',
    popupType: 'Drone sighting ', // shown in popup
    date: '11 Jan 2026, around 01:00 a.m. - around 03:00 a.m.',
    details: "A vessel of the federal police spotted multiple drone-like objects with blinking red-green lights. The naval coastal station on Fehrmarn confirmed the sighting of six objects and lost sight of them at around 03:00 a.m.. <br><br> The sanctioned Russian tanker 'KRITI VIGOR' was passing trough at the Fehrmarn Belt during this incident. ",
    link: "https://www.welt.de/politik/deutschland/plus698ed22a616e1cbb1fcd4be2/sabotage-drohnen-brandanschlaege-geheimpapier-zeigt-das-ausmass-der-angriffe-in-deutschland.html",
    country: "Fehmarn, Germany 🇩🇪",
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
    place: 'airports',
    year: '2025',
     month: '12',
    popupType: 'Drone sighting ', // shown in popup
    date: '01 Dec 2025, shortly before 23:00',
    details: "Four military grade drones flew near the airport when Zelensky´s plane was supposed to land. The lights were on therefore authorities assume that it was only supposed to be a disruption of the landing, not threaten the plane<br>The drones were likely launched near Howth, from where they first flew above a naval vessel and then towards the location where Zelensky´s plane was supposed to be but his plane was slightly ahead of schedule<br><br>Authorities believe the drones were quadcopters",
    link: "https://www.thejournal.ie/drones-dublin-ireland-hybrid-warfare-russia-6893104-Dec2025/",
    country: "Dublin Airport, Ireland 🇮🇪"
  },

     /* =========================
       L I T H U A N I A
    ========================= */

  {
  lat: 54.63497,
  lng: 25.29054,
  icon: icons.balloonYellow,
  type: 'balloon',        // used for filtering
  risk: 'yellow',
  place: 'airports',
  year: '2025',
  month: ['10', '11', '12'],  
  country: "Vilnius Airport, Lithuania 🇱🇹",

  note: "List is scrollable due to too many incidents",

  incidents: [
    {
      popupType: ' Weather balloons / Smuggle balloons / Airport closure',
      date: ' 04 Oct 2025, 22:16 - 04:50',
      details: "Air traffic was halted due to balloons moving in he direction of Vilnius Airport",
      link: "https://www.vilnius-airport.lt/en/news/flights-and-operations-at-vilnius-airport-fully-resumed-on-sunday-morning-delays-possible-throughout-the-day"
    },
    {
      popupType: 'Weather balloons / Smuggle balloons / Airport closure',
      date: '21 Oct 2025, 22:23 - 06:40',
      details: "Air traffic was halted due to balloons moving in he direction of Vilnius Airport",
      link: "https://www.vilnius-airport.lt/en/news/flights-and-operations-at-vilnius-airport-fully-resumed-on-wednesday-morning-delays-possible-throughout-the-day"
    },
     {
      popupType: ' Weather balloons / Smuggle balloons / Airport closure',
      date: '  24 Oct 2025, 20:31 - 02:35',
      details: "Air traffic was halted due to balloons moving in he direction of Vilnius Airport",
      link: "https://www.vilnius-airport.lt/en/news/on-saturday-night-flight-operations-at-vilnius-and-kaunas-airports-were-fully-restored-although-flight-delays-may-occur-throughout-the-day"
    },
    {
      popupType: 'Weather balloons / Smuggle balloons / Airport closure',
      date: '25 Oct 2025, 21:35 - 03:30',
      details: "Air traffic was halted due to balloons moving in he direction of Vilnius Airport",
      link: "https://www.vilnius-airport.lt/en/news/on-sunday-night-flight-operations-at-vilnius-airport-were-fully-restored-some-flight-delays-may-still-occur-throughout-the-day"
    },
       {
      popupType: ' Weather balloons / Smuggle balloons / Airport closure',
      date: '26 Oct 2025, 21:42 - 04:30',
      details: "Air traffic was halted due to balloons moving in he direction of Vilnius Airport",
      link: "https://www.vilnius-airport.lt/en/news/on-monday-night-flights-and-operations-at-vilnius-airport-were-fully-resumed-however-flight-delays-may-occur-throughout-the-day"
    },
    {
      popupType: 'Weather balloons / Smuggle balloons / Airport closure',
      date: '30 Oct 2025, 20:10 - 22:43',
      details: "Air traffic was halted due to balloons moving in he direction of Vilnius Airport",
      link: "https://www.vilnius-airport.lt/en/news/flights-and-operations-fully-resumed-at-vilnius-airport-overnight-minor-delays-possible-during-the-day"
    },
     {
      popupType: ' Weather balloons / Smuggle balloons / Airport closure',
      date: ' 08 Nov 2025, 20:45 - 21:50',
      details: "Air traffic was halted due to balloons moving in he direction of Vilnius Airport",
      link: "https://www.vilnius-airport.lt/en/news/vilnius-airport-operations-temporarily-disrupted-on-saturday-evening-have-been-restored"
    },
    {
      popupType: 'Weather balloons / Smuggle balloons / Airport closure',
      date: '23 / 24 Nov 2025, 18:55 - 00:25; 01:40 - 03:25',
      details: "Air traffic was halted due to balloons moving in he direction of Vilnius Airport",
      link: "https://www.vilnius-airport.lt/en/news/vilnius-airport-operations-disrupted-on-november-23-24"
    },
    {
      popupType: 'Weather balloons / Smuggle balloons / Airport closure',
      date: ' 28 Nov 2025, 23:15 - 07:03',
      details: "Air traffic was halted due to balloons moving in he direction of Vilnius Airport",
      link: "https://www.vilnius-airport.lt/en/news/airspace-restrictions-at-vilnius-airport-on-november-28-29"
    },
     {
      popupType: ' Weather balloons / Smuggle balloons / Airport closure',
      date: '30 Nov 2025, 18:09 - 05:00 ',
      details: "Air traffic was halted due to balloons moving in he direction of Vilnius Airport",
      link: "https://www.vilnius-airport.lt/en/news/temporary-airspace-restrictions-above-vilnius-airport-lifted-operations-restored"
    },
    {
      popupType: 'Weather balloons / Smuggle balloons / Airport closure',
      date: '03 / 04 Dec 2025, 19:36 - 21:06; 22:24 - 00:56; 01:15 - 02:30',
      details: "Air traffic was halted due to balloons moving in he direction of Vilnius Airport <br>The report by the airport called this attack a 'hybrid attack by Belarus'",
      link: "https://www.vilnius-airport.lt/en/news/temporary-disruptions-at-vilnius-airport-resolved"
    },
  ]
},

{
    lat: 55.10704,
    lng: 21.91684,
    icon: icons.jetRed,
    type: 'jet',      // used for filtering
    risk: 'red',
    place: 'others',
    year: '2025',
    month: '10',
    popupType: 'Airspace incursion ', // shown in popup
    date: '23 Oct 2025, 17:00',
    details: "Two Russian military aircraft (SU-30 fighter jet & Il-78 refueling tanker) entered Lithuanian airspace for ~18 seconds",
    link: "https://www.euronews.com/2025/10/23/two-russian-military-aircraft-enter-nato-member-lithuanias-airspace-military-says",
    country: "Border region with Kaliningrad, Lithuania 🇱🇹"
  },

{
    lat: 54.96462,
    lng: 24.08813,
    icon: icons.balloonYellow,
    type: 'balloon',      // used for filtering
    risk: 'yellow',
    place: 'airports',
    year: '2025',
    month: '10',
    popupType: 'Weather balloons / Smuggle balloons / Airport closure ', // shown in popup
    date: '24 Oct 2025, 20:36 - 02:35',
    details: "Air traffic was halted due to balloons moving in he direction of Kaunas Airport",
    link: "https://www.vilnius-airport.lt/en/news/on-saturday-night-flight-operations-at-vilnius-and-kaunas-airports-were-fully-restored-although-flight-delays-may-occur-throughout-the-day",
    country: "Kaunas Airport, Lithuania 🇱🇹"
  },
    
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
  month: '11',
  country: "Volkel Air Base, Netherlands 🇳🇱",

  note: "Volkel is believed to be home to Dutch F-35 jets and US nuclear weapons",

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
    place: 'airports',
    year: '2025',
    month: '11',
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
     month: '12',
    popupType: 'Drone sighting ', // shown in popup
    date: '07 Dec 2025, 10:20',
    details: "A drone entered Dutch airspace on an level where identification is required. The lack of it triggered the Quick Reaction Alert and two F-35 jets were scrambled. The drone left Dutch airspace ",
    link: "https://www.defensie.nl/actueel/nieuws/2025/12/07/f-35-gevechtsvliegtuigen-ingezet-voor-onbekend-object",
    country: "Netherlands 🇳🇱",
  },

     {
    lat: 52.511389,
    lng: 6.353056,
    icon: icons.droneYellow,
    type: 'drone',      // used for filtering
    risk: 'yellow',
    place: 'others',
    year: '2025',
     month: '11',
    popupType: 'Drone sighting ', // shown in popup
    date: '21 Nov 2025',
    details: "Multiple drones have been spotted over the Gasunie site in Vilsteren, Ommen muncipality. The police could not identify their origin or say what the drones did. <br><br> The muncipality decided not to inform the public in November.",
    link: "https://nos.nl/regio/overijssel/artikel/719487-drone-mysterie-boven-gasunie-in-ommen-herkomst-onbekend-gemeente-zweeg-na-melding",
    country: "Vilsteren, Netherlands 🇳🇱",
  },

    
  {
    lat: 51.338056,
    lng: 3.8275,
    icon: icons.droneGreen,
    type: 'drone',      // used for filtering
    risk: 'green',
    place: 'others',
    year: '2025',
     month: '11',
    popupType: 'Drone sighting', // shown in popup
    date: '17 Nov 2025',
    details: "According to the port authority NSP, 'an unprecedented amount of drones' was seen over the port. Drones were seen over the chemical company Dow. The police was unable to independently verify those sightings",
    link: "https://nos.nl/artikel/2591151-drones-gezien-boven-havengebied-terneuzen-politie-vindt-niets",
    country: "Port of Terneuzen, Netherlands 🇳🇱",
  },

  {
    lat: 51.566433,
    lng: 3.550519,
    icon: icons.droneYellow,
    type: 'drone',      // used for filtering
    risk: 'yellow',
    place: 'others',
    year: '2025',
     month: '11',
    popupType: 'Drone sighting', // shown in popup
    date: '12 Nov 2025, 19:00',
    details: "The coast guard spotted an unknown amount of drone(s). Police and coast guard were unable to find the drones later again.",
    link: "https://www.omroepzeeland.nl/nieuws/17958150/kustwacht-ziet-meerdere-drones-voor-zeeuwse-kust-vliegen",
    country: "Oostkapelle, Netherlands 🇳🇱",
  },

  {
    lat: 51.567222,
    lng: 4.931667,
    icon: icons.droneYellow,
    type: 'drone',      // used for filtering
    risk: 'yellow',
    place: 'militarybases',
    year: '2025',
     month: '11',
    popupType: 'Drone sighting', // shown in popup
    date: '05 Nov 2025',
    details: "An air traffic controller spotted a drone over the control tower and calls it 'potentially espionage'. The drone was already gone once the police arrived",
    link: "https://www.volkskrant.nl/buitenland/de-spookdrone-die-angst-en-vertwijfeling-oproept-is-het-ultieme-russische-wapen~b89dcb62/",
    country: "Gilze-Rijen, Netherlands 🇳🇱",
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
    place: 'airports',
    year: '2025',
    month: '09',
    popupType: 'Drone sighting / airport closure ', // shown in popup
    date: '23 Sep 2025, 00:30-04:00',
    details: "The airspace was closed following a drone sighting. A few hours earlier two foreign nationals were arrested for operating a different drone <br> Authorities do not rule out a connection to the incident in Copenhagen",
    link: "https://www.dr.dk/nyheder/indland/droner-set-over-koebenhavns-lufthavn",
    country: "Oslo Gardermoen Airport, Norway 🇳🇴"
  },

  {
    lat: 69.05483,
    lng: 18.54067,
    icon: icons.droneYellow,
    type: 'drone',      // used for filtering
    risk: 'yellow',
    place: 'airports',
    year: '2025',
     month: '09',
    popupType: 'Drone sighting / airport closure ', // shown in popup
    date: '28 Sep 2025, 20:18',
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
    place: 'airports',
    year: '2025',
     month: '09',
    popupType: 'Drone sighting / airport closure ', // shown in popup
    date: '29 Sep 2025, 20:18',
    details: "The police confirms the drone sighting and say that it has seen five to six drone in the sky. The police lost sight of the drones. <br><br>The police considers the Ørland incident, which was reported at the same time, as a likely false alarm",
    link: "https://www.nrk.no/nordland/politiet-om-droner-ved-bronnoysund-lufthavn_-_-sa-fem-seks-stykker-1.17590655#:~:text=Nyhetssenter%20Nordland-,Politiet%20om%20droner%20ved%20Brønnøysund%20lufthavn%3A%20–%20Så%20fem%2Dseks,vei%20fra%20Bodø%20til%20Trondheim.",
    country: "Brønnøysund Airport, Norway 🇳🇴"
  },
    
     /* =========================
        P O L A N D
    ========================= */

 {
    lat: 54.07913,
    lng: 19.28654,
    icon: icons.droneRed,
    type: 'drone',      // used for filtering
    risk: 'red',
    place: 'others',
    year: '2025',
    month: '09',
    popupType: 'Drone incursion / crash site ', // shown in popup
    date: ' 09–10 Sep 2025, ~23:30–06:45',
    details: "Russian drone crashed here (23 overall). Airspace closures affected Warsaw Chopin, Warsaw Modlin, Lublin, and Rzeszów‑Jasionka airports. <br> Multiple drones were shot down by Polish and Dutch jets. <br> Drones crashed up to 450 km from the Ukrainian border and 300 km from the Belarusian border and entered Polish airspace from both Ukrainian and Belarusian airspace. <br><br> NATO Article 4 was invoked following this incident",
    link: "https://tvpworld.com/88854104/russian-drone-incursion-into-poland-factbox",
    country: "Oleśno, Poland 🇵🇱",
    note: "It is suspected that at least some of the drones were equipped with explosives",
    noteLink: "https://www.rp.pl/wojsko/art43326881-gen-maciej-klisz-w-wyrykach-po-zniszczeniu-domu-zapadla-decyzja-ze-bierzemy-to-na-klate"
  },

 {
    lat: 54.17067,
    lng: 21.14419,
    icon: icons.droneRed,
    type: 'drone',      // used for filtering
    risk: 'red',
    place: 'others',
    year: '2025',
    month: '09',
    popupType: 'Drone incursion / crash site ', // shown in popup
    date: ' 09–10 Sep 2025, ~23:30–06:45',
    details: "Russian drone crashed here (23 overall). Airspace closures affected Warsaw Chopin, Warsaw Modlin, Lublin, and Rzeszów‑Jasionka airports. <br> Multiple drones were shot down by Polish and Dutch jets. <br> Drones crashed up to 450 km from the Ukrainian border and 300 km from the Belarusian border and entered Polish airspace from both Ukrainian and Belarusian airspace. <br><br> NATO Article 4 was invoked following this incident",
    link: "https://tvpworld.com/88854104/russian-drone-incursion-into-poland-factbox",
    country: "Korsze, Poland 🇵🇱",
    note: "It is suspected that at least some of the drones were equipped with explosives",
    noteLink: "https://www.rp.pl/wojsko/art43326881-gen-maciej-klisz-w-wyrykach-po-zniszczeniu-domu-zapadla-decyzja-ze-bierzemy-to-na-klate"
  },

 {
    lat: 52.41383,
    lng: 21.78624,
    icon: icons.droneRed,
    type: 'drone',      // used for filtering
    risk: 'red',
    place: 'others',
    year: '2025',
    month: '09',
    popupType: 'Drone incursion / crash site ', // shown in popup
    date: ' 09–10 Sep 2025, ~23:30–06:45',
    details: "Russian drone crashed here (23 overall). Airspace closures affected Warsaw Chopin, Warsaw Modlin, Lublin, and Rzeszów‑Jasionka airports. <br> Multiple drones were shot down by Polish and Dutch jets. <br> Drones crashed up to 450 km from the Ukrainian border and 300 km from the Belarusian border and entered Polish airspace from both Ukrainian and Belarusian airspace. <br><br> NATO Article 4 was invoked following this incident",
    link: "https://tvpworld.com/88854104/russian-drone-incursion-into-poland-factbox",
    country: "Rabiany, Poland 🇵🇱",
    note: "It is suspected that at least some of the drones were equipped with explosives",
    noteLink: "https://www.rp.pl/wojsko/art43326881-gen-maciej-klisz-w-wyrykach-po-zniszczeniu-domu-zapadla-decyzja-ze-bierzemy-to-na-klate"
  },

 {
    lat: 52.03402,
    lng: 21.97834,
    icon: icons.droneRed,
    type: 'drone',      // used for filtering
    risk: 'red',
    place: 'others',
    year: '2025',
    month: '09',
    popupType: 'Drone incursion / crash site ', // shown in popup
    date: ' 09–10 Sep 2025, ~23:30–06:45',
    details: "Russian drone crashed here (23 overall). Airspace closures affected Warsaw Chopin, Warsaw Modlin, Lublin, and Rzeszów‑Jasionka airports. <br> Multiple drones were shot down by Polish and Dutch jets. <br> Drones crashed up to 450 km from the Ukrainian border and 300 km from the Belarusian border and entered Polish airspace from both Ukrainian and Belarusian airspace. <br><br> NATO Article 4 was invoked following this incident",
    link: "https://tvpworld.com/88854104/russian-drone-incursion-into-poland-factbox",
    country: "Wodynie, Poland 🇵🇱 ",
    note: "It is suspected that at least some of the drones were equipped with explosives",
    noteLink: "https://www.rp.pl/wojsko/art43326881-gen-maciej-klisz-w-wyrykach-po-zniszczeniu-domu-zapadla-decyzja-ze-bierzemy-to-na-klate"
  },

 {
    lat: 51.71693,
    lng: 21.10515,
    icon: icons.droneRed,
    type: 'drone',      // used for filtering
    risk: 'red',
    place: 'others',
    year: '2025',
    month: '09',
    popupType: 'Drone incursion / crash site ', // shown in popup
    date: ' 09–10 Sep 2025, ~23:30–06:45',
    details: "Russian drone crashed here (23 overall). Airspace closures affected Warsaw Chopin, Warsaw Modlin, Lublin, and Rzeszów‑Jasionka airports. <br> Multiple drones were shot down by Polish and Dutch jets. <br> Drones crashed up to 450 km from the Ukrainian border and 300 km from the Belarusian border and entered Polish airspace from both Ukrainian and Belarusian airspace. <br><br> NATO Article 4 was invoked following this incident",
    link: "https://tvpworld.com/88854104/russian-drone-incursion-into-poland-factbox",
    country: "Biała Góra, Poland 🇵🇱",
    note: "It is suspected that at least some of the drones were equipped with explosives",
    noteLink: "https://www.rp.pl/wojsko/art43326881-gen-maciej-klisz-w-wyrykach-po-zniszczeniu-domu-zapadla-decyzja-ze-bierzemy-to-na-klate"
  },

 {
    lat: 51.61669,
    lng: 20.57962,
    icon: icons.droneRed,
    type: 'drone',      // used for filtering
    risk: 'red',
    place: 'others',
    year: '2025',
    month: '09',
    popupType: 'Drone incursion / crash site ', // shown in popup
    date: ' 09–10 Sep 2025, ~23:30–06:45',
    details: "Russian drone crashed here (23 overall). Airspace closures affected Warsaw Chopin, Warsaw Modlin, Lublin, and Rzeszów‑Jasionka airports. <br> Multiple drones were shot down by Polish and Dutch jets. <br> Drones crashed up to 450 km from the Ukrainian border and 300 km from the Belarusian border and entered Polish airspace from both Ukrainian and Belarusian airspace. <br><br> NATO Article 4 was invoked following this incident",
    link: "https://tvpworld.com/88854104/russian-drone-incursion-into-poland-factbox",
    country: "Nowe Miasto nad Pilicą, Poland 🇵🇱",
    note: "It is suspected that at least some of the drones were equipped with explosives",
    noteLink: "https://www.rp.pl/wojsko/art43326881-gen-maciej-klisz-w-wyrykach-po-zniszczeniu-domu-zapadla-decyzja-ze-bierzemy-to-na-klate"
  },

 {
    lat: 51.37017,
    lng: 20.03559,
    icon: icons.droneRed,
    type: 'drone',      // used for filtering
    risk: 'red',
    place: 'others',
    year: '2025',
    month: '09',
    popupType: 'Drone incursion / crash site ', // shown in popup
    date: ' 09–10 Sep 2025, ~23:30–06:45',
    details: "Russian drone crashed here (23 overall). Airspace closures affected Warsaw Chopin, Warsaw Modlin, Lublin, and Rzeszów‑Jasionka airports. <br> Multiple drones were shot down by Polish and Dutch jets. <br> Drones crashed up to 450 km from the Ukrainian border and 300 km from the Belarusian border and entered Polish airspace from both Ukrainian and Belarusian airspace. <br><br> NATO Article 4 was invoked following this incident",
    link: "https://tvpworld.com/88854104/russian-drone-incursion-into-poland-factbox",
    country: "Mniszków, Poland 🇵🇱",
    note: "It is suspected that at least some of the drones were equipped with explosives",
    noteLink: "https://www.rp.pl/wojsko/art43326881-gen-maciej-klisz-w-wyrykach-po-zniszczeniu-domu-zapadla-decyzja-ze-bierzemy-to-na-klate"
  },

     {
    lat: 50.81616,
    lng: 20.87094,
    icon: icons.droneRed,
    type: 'drone',      // used for filtering
    risk: 'red',
    place: 'others',
    year: '2025',
    month: '09',
    popupType: 'Drone incursion / crash site ', // shown in popup
    date: ' 09–10 Sep 2025, ~23:30–06:45',
    details: "Russian drone crashed here (23 overall). Airspace closures affected Warsaw Chopin, Warsaw Modlin, Lublin, and Rzeszów‑Jasionka airports. <br> Multiple drones were shot down by Polish and Dutch jets. <br> Drones crashed up to 450 km from the Ukrainian border and 300 km from the Belarusian border and entered Polish airspace from both Ukrainian and Belarusian airspace. <br><br> NATO Article 4 was invoked following this incident",
    link: "https://tvpworld.com/88854104/russian-drone-incursion-into-poland-factbox",
    country: "Smyków, Poland 🇵🇱",
    note: "It is suspected that at least some of the drones were equipped with explosives",
    noteLink: "https://www.rp.pl/wojsko/art43326881-gen-maciej-klisz-w-wyrykach-po-zniszczeniu-domu-zapadla-decyzja-ze-bierzemy-to-na-klate"
  },

     {
    lat: 50.48317,
    lng: 20.99855,
    icon: icons.droneRed,
    type: 'drone',      // used for filtering
    risk: 'red',
    place: 'others',
    year: '2025',
    month: '09',
    popupType: 'Drone incursion / crash site ', // shown in popup
    date: ' 09–10 Sep 2025, ~23:30–06:45',
    details: "Russian drone crashed here (23 overall). Airspace closures affected Warsaw Chopin, Warsaw Modlin, Lublin, and Rzeszów‑Jasionka airports. <br> Multiple drones were shot down by Polish and Dutch jets. <br> Drones crashed up to 450 km from the Ukrainian border and 300 km from the Belarusian border and entered Polish airspace from both Ukrainian and Belarusian airspace. <br><br> NATO Article 4 was invoked following this incident",
    link: "https://tvpworld.com/88854104/russian-drone-incursion-into-poland-factbox",
    country: "Czyżów, Poland 🇵🇱",
    note: "It is suspected that at least some of the drones were equipped with explosives",
    noteLink: "https://www.rp.pl/wojsko/art43326881-gen-maciej-klisz-w-wyrykach-po-zniszczeniu-domu-zapadla-decyzja-ze-bierzemy-to-na-klate"
  },

     {
    lat: 50.79509,
    lng: 21.68261,
    icon: icons.droneRed,
    type: 'drone',      // used for filtering
    risk: 'red',
    place: 'others',
    year: '2025',
    month: '09',
    popupType: 'Drone incursion / crash site ', // shown in popup
    date: ' 09–10 Sep 2025, ~23:30–06:45',
    details: "Russian drone crashed here (23 overall). Airspace closures affected Warsaw Chopin, Warsaw Modlin, Lublin, and Rzeszów‑Jasionka airports. <br> Multiple drones were shot down by Polish and Dutch jets. <br> Drones crashed up to 450 km from the Ukrainian border and 300 km from the Belarusian borderand entered Polish airspace from both Ukrainian and Belarusian airspace. <br><br> NATO Article 4 was invoked following this incident",
    link: "https://tvpworld.com/88854104/russian-drone-incursion-into-poland-factbox",
    country: "Sobótka, Poland 🇵🇱",
    note: "It is suspected that at least some of the drones were equipped with explosives",
    noteLink: "https://www.rp.pl/wojsko/art43326881-gen-maciej-klisz-w-wyrykach-po-zniszczeniu-domu-zapadla-decyzja-ze-bierzemy-to-na-klate"
  },

     {
    lat: 50.70306,
    lng: 23.44076,
    icon: icons.droneRed,
    type: 'drone',      // used for filtering
    risk: 'red',
    place: 'others',
    year: '2025',
     month: '09',   
    popupType: 'Drone incursion / crash site ', // shown in popup
    date: ' 09–10 Sep 2025, ~23:30–06:45',
    details: "Russian drone crashed here (23 overall). Airspace closures affected Warsaw Chopin, Warsaw Modlin, Lublin, and Rzeszów‑Jasionka airports. <br> Multiple drones were shot down by Polish and Dutch jets. <br> Drones crashed up to 450 km from the Ukrainian border and 300 km from the Belarusian border and entered Polish airspace from both Ukrainian and Belarusian airspace. <br><br> NATO Article 4 was invoked following this incident",
    link: "https://tvpworld.com/88854104/russian-drone-incursion-into-poland-factbox",
    country: "Cześniki, Poland 🇵🇱",
    note: "It is suspected that at least some of the drones were equipped with explosives",
    noteLink: "https://www.rp.pl/wojsko/art43326881-gen-maciej-klisz-w-wyrykach-po-zniszczeniu-domu-zapadla-decyzja-ze-bierzemy-to-na-klate"
  },

     {
    lat: 50.87200,
    lng: 23.31099,
    icon: icons.droneRed,
    type: 'drone',      // used for filtering
    risk: 'red',
    place: 'others',
    year: '2025',
    month: '09',
    popupType: 'Drone incursion / crash site ', // shown in popup
    date: ' 09–10 Sep 2025, ~23:30–06:45',
    details: "Russian drone crashed here (23 overall). Airspace closures affected Warsaw Chopin, Warsaw Modlin, Lublin, and Rzeszów‑Jasionka airports. <br> Multiple drones were shot down by Polish and Dutch jets. <br> Drones crashed up to 450 km from the Ukrainian border and 300 km from the Belarusian border and entered Polish airspace from both Ukrainian and Belarusian airspace. <br><br> NATO Article 4 was invoked following this incident",
    link: "https://tvpworld.com/88854104/russian-drone-incursion-into-poland-factbox",
    country: "Sulmice, Poland 🇵🇱",
    note: "It is suspected that at least some of the drones were equipped with explosives",
    noteLink: "https://www.rp.pl/wojsko/art43326881-gen-maciej-klisz-w-wyrykach-po-zniszczeniu-domu-zapadla-decyzja-ze-bierzemy-to-na-klate"
  },

     {
    lat: 51.06694,
    lng: 22.53167,
    icon: icons.droneRed,
    type: 'drone',      // used for filtering
    risk: 'red',
    place: 'others',
    year: '2025',
     month: '09',   
    popupType: 'Drone incursion / crash site ', // shown in popup
    date: ' 09–10 Sep 2025, ~23:30–06:45',
    details: "Russian drone crashed here (23 overall). Airspace closures affected Warsaw Chopin, Warsaw Modlin, Lublin, and Rzeszów‑Jasionka airports. <br> Multiple drones were shot down by Polish and Dutch jets. <br> Drones crashed up to 450 km from the Ukrainian border and 300 km from the Belarusian border and entered Polish airspace from both Ukrainian and Belarusian airspace. <br><br> NATO Article 4 was invoked following this incident",
    link: "https://tvpworld.com/88854104/russian-drone-incursion-into-poland-factbox",
    country: "Bychawka Trzecia, Poland 🇵🇱",
    note: "It is suspected that at least some of the drones were equipped with explosives",
    noteLink: "https://www.rp.pl/wojsko/art43326881-gen-maciej-klisz-w-wyrykach-po-zniszczeniu-domu-zapadla-decyzja-ze-bierzemy-to-na-klate"
  },

     {
    lat: 51.48374,
    lng: 23.20494,
    icon: icons.droneRed,
    type: 'drone',      // used for filtering
    risk: 'red',
    place: 'others',
    year: '2025',
    month: '09',    
    popupType: 'Drone incursion / crash site ', // shown in popup
    date: ' 09–10 Sep 2025, ~23:30–06:45',
    details: "Russian drone crashed here (23 overall). Airspace closures affected Warsaw Chopin, Warsaw Modlin, Lublin, and Rzeszów‑Jasionka airports. <br> Multiple drones were shot down by Polish and Dutch jets. <br> Drones crashed up to 450 km from the Ukrainian border and 300 km from the Belarusian border and entered Polish airspace from both Ukrainian and Belarusian airspace. <br><br> NATO Article 4 was invoked following this incident",
    link: "https://tvpworld.com/88854104/russian-drone-incursion-into-poland-factbox",
    country: "Wielki Łan, Poland 🇵🇱",
    note: "It is suspected that at least some of the drones were equipped with explosives",
    noteLink: "https://www.rp.pl/wojsko/art43326881-gen-maciej-klisz-w-wyrykach-po-zniszczeniu-domu-zapadla-decyzja-ze-bierzemy-to-na-klate"
  },

     {
    lat: 51.56174,
    lng: 23.36537,
    icon: icons.droneRed,
    type: 'drone',      // used for filtering
    risk: 'red',
    place: 'others',
    year: '2025',
     month: '09',   
    popupType: 'Drone incursion / crash site ', // shown in popup
    date: ' 09–10 Sep 2025, ~23:30–06:45',
    details: "Russian drone crashed here (23 overall). Airspace closures affected Warsaw Chopin, Warsaw Modlin, Lublin, and Rzeszów‑Jasionka airports. <br> Multiple drones were shot down by Polish and Dutch jets. <br> Drones crashed up to 450 km from the Ukrainian border and 300 km from the Belarusian border and entered Polish airspace from both Ukrainian and Belarusian airspace. <br><br> NATO Article 4 was invoked following this incident",
    link: "https://tvpworld.com/88854104/russian-drone-incursion-into-poland-factbox",
    country: "Wyryki-Wola, Poland 🇵🇱",
    note: "It is suspected that at least some of the drones were equipped with explosives",
    noteLink: "https://www.rp.pl/wojsko/art43326881-gen-maciej-klisz-w-wyrykach-po-zniszczeniu-domu-zapadla-decyzja-ze-bierzemy-to-na-klate"
  },

         {
    lat: 51.59417,
    lng: 23.15667,
    icon: icons.droneRed,
    type: 'drone',      // used for filtering
    risk: 'red',
    place: 'others',
    year: '2025',
     month: '09',       
    popupType: 'Drone incursion / crash site ', // shown in popup
    date: ' 09–10 Sep 2025, ~23:30–06:45',
    details: "Russian drone crashed here (23 overall). Airspace closures affected Warsaw Chopin, Warsaw Modlin, Lublin, and Rzeszów‑Jasionka airports. <br> Multiple drones were shot down by Polish and Dutch jets. <br> Drones crashed up to 450 km from the Ukrainian border and 300 km from the Belarusian border and entered Polish airspace from both Ukrainian and Belarusian airspace. <br><br> NATO Article 4 was invoked following this incident",
    link: "https://tvpworld.com/88854104/russian-drone-incursion-into-poland-factbox",
    country: "Krzywowierzba-Kolonia, Poland 🇵🇱",
    note: "It is suspected that at least some of the drones were equipped with explosives",
    noteLink: "https://www.rp.pl/wojsko/art43326881-gen-maciej-klisz-w-wyrykach-po-zniszczeniu-domu-zapadla-decyzja-ze-bierzemy-to-na-klate"
  },

         {
    lat: 51.61859,
    lng: 23.16541,
    icon: icons.droneRed,
    type: 'drone',      // used for filtering
    risk: 'red',
    place: 'others',
    year: '2025',
     month: '09',       
    popupType: 'Drone incursion / crash site ', // shown in popup
    date: ' 09–10 Sep 2025, ~23:30–06:45',
    details: "Russian drone crashed here (23 overall). Airspace closures affected Warsaw Chopin, Warsaw Modlin, Lublin, and Rzeszów‑Jasionka airports. <br> Multiple drones were shot down by Polish and Dutch jets. <br> Drones crashed up to 450 km from the Ukrainian border and 300 km from the Belarusian border and entered Polish airspace from both Ukrainian and Belarusian airspace. <br><br> NATO Article 4 was invoked following this incident",
    link: "https://tvpworld.com/88854104/russian-drone-incursion-into-poland-factbox",
    country: "Wyhalew, Poland 🇵🇱",
    note: "It is suspected that at least some of the drones were equipped with explosives",
    noteLink: "https://www.rp.pl/wojsko/art43326881-gen-maciej-klisz-w-wyrykach-po-zniszczeniu-domu-zapadla-decyzja-ze-bierzemy-to-na-klate"
  },

         {
    lat: 51.75623,
    lng: 22.78631,
    icon: icons.droneRed,
    type: 'drone',      // used for filtering
    risk: 'red',
    place: 'others',
    year: '2025',
     month: '09',       
    popupType: 'Drone incursion / crash site ', // shown in popup
    date: ' 09–10 Sep 2025, ~23:30–06:45',
    details: "Russian drone crashed here (23 overall). Airspace closures affected Warsaw Chopin, Warsaw Modlin, Lublin, and Rzeszów‑Jasionka airports. <br> Multiple drones were shot down by Polish and Dutch jets. <br> Drones crashed up to 450 km from the Ukrainian border and 300 km from the Belarusian border and entered Polish airspace from both Ukrainian and Belarusian airspace. <br><br> NATO Article 4 was invoked following this incident",
    link: "https://tvpworld.com/88854104/russian-drone-incursion-into-poland-factbox",
    country: "Wohyń, Poland 🇵🇱",
    note: "It is suspected that at least some of the drones were equipped with explosives",
    noteLink: "https://www.rp.pl/wojsko/art43326881-gen-maciej-klisz-w-wyrykach-po-zniszczeniu-domu-zapadla-decyzja-ze-bierzemy-to-na-klate"
  },

         {
    lat: 52.01447,
    lng: 23.22587,
    icon: icons.droneRed,
    type: 'drone',      // used for filtering
    risk: 'red',
    place: 'others',
    year: '2025',
     month: '09',
    popupType: 'Drone incursion / crash site ', // shown in popup
    date: ' 09–10 Sep 2025, ~23:30–06:45',
    details: "Russian drone crashed here (23 overall). Airspace closures affected Warsaw Chopin, Warsaw Modlin, Lublin, and Rzeszów‑Jasionka airports. <br> Multiple drones were shot down by Polish and Dutch jets. <br> Drones crashed up to 450 km from the Ukrainian border and 300 km from the Belarusian border and entered Polish airspace from both Ukrainian and Belarusian airspace. <br><br> NATO Article 4 was invoked following this incident",
    link: "https://tvpworld.com/88854104/russian-drone-incursion-into-poland-factbox",
    country: "Czosnówka, Poland 🇵🇱",
    note: "It is suspected that at least some of the drones were equipped with explosives",
    noteLink: "https://www.rp.pl/wojsko/art43326881-gen-maciej-klisz-w-wyrykach-po-zniszczeniu-domu-zapadla-decyzja-ze-bierzemy-to-na-klate"
  },

         {
    lat: 51.84140,
    lng: 23.57214,
    icon: icons.droneRed,
    type: 'drone',      // used for filtering
    risk: 'red',
    place: 'others',
    year: '2025',
 month: '09',
    popupType: 'Drone incursion / crash site ', // shown in popup
    date: ' 09–10 Sep 2025, ~23:30–06:45',
    details: "Russian drone crashed here (23 overall). Airspace closures affected Warsaw Chopin, Warsaw Modlin, Lublin, and Rzeszów‑Jasionka airports. <br> Multiple drones were shot down by Polish and Dutch jets. <br> Drones crashed up to 450 km from the Ukrainian border and 300 km from the Belarusian border and entered Polish airspace from both Ukrainian and Belarusian airspace. <br><br> NATO Article 4 was invoked following this incident",
    link: "https://tvpworld.com/88854104/russian-drone-incursion-into-poland-factbox",
    country: "Zabłocie-Kolonia, Poland 🇵🇱",
    note: "It is suspected that at least some of the drones were equipped with explosives",
    noteLink: "https://www.rp.pl/wojsko/art43326881-gen-maciej-klisz-w-wyrykach-po-zniszczeniu-domu-zapadla-decyzja-ze-bierzemy-to-na-klate"
  },

    
    {
    lat: 55.40000,
    lng: 18.72167,
    icon: icons.jetBlue,
    type: 'jet',      // used for filtering
    risk: 'blue',
    place: 'infrastructure',
    year: '2025',
    month: '09',
    popupType: 'Safety-zone violation ', // shown in popup
    date: ' 19 Sep 2025, Twitter statement at 18:54; no time of the incident published',
    details: "Two Russian jets performed a low pass over the Petrobaltic platform at ~150 m altitude, violating the platform’s safety zone in the Polish EEZ.",
    link: "https://www.polskieradio.pl/395/7784/artykul/3582003,russian-fighter-jets-make-low-pass-over-polish-offshore-platform?",
    country: "Petrobaltic platform, Poland 🇵🇱",
    note: "This was not a violation of Polish airspace but a violation of the safety zone of the platform",
  },
  {
    lat: 53.26685,
    lng: 22.85258,
    icon: icons.balloonYellow,
    type: 'balloon',      // used for filtering
    risk: 'yellow',
    place: 'others',
    year: '2025',
    month: '12',
    popupType: 'Weather balloons / Smuggle balloons / Airspace closure ', // shown in popup
    date: ' 24 Dec 2025, 20:08 - 04:30',
    details: "Balloons, most likely smuggler balloons, entered Polish airspace from Belarus <br><br> On the morning of Dec 25, Polish Airforce escorted an Russian reconnaissance plane flying close to Polish borders. The plane did not enter Polish airspace and such flights are an regular occurrence",
    link: "https://www.polsatnews.pl/wiadomosc/2025-12-25/dowodztwo-operacyjne-informuje-o-incydentach-rosyjski-samolot-przechwycony/",
    country: "Eastern Poland, Poland 🇵🇱",
    note: "Source for the time:",
    noteLink: "https://x.com/PANSA_PL/status/2004141048017330265?s=20"
  },

      {
    lat: 53.016667,
    lng: 20.883333,
    icon: icons.droneYellow,
    type: 'drone',      // used for filtering
    risk: 'yellow',
    place: 'militarybases',
    year: '2026',
     month: '01',
    popupType: 'Drone sighting / crash site', // shown in popup
    date: '28 Jan 2026, ~18:00',
    details: "The drone was flying above the base and later crashed 70 meters from the weapons depot. <br><br> It is suspected that it was an reconnaissance drone scanning antena field devices.",
    link: "https://wiadomosci.radiozet.pl/polska/niezidentyfikowany-dron-spadl-na-jednostke-wojskowa-w-przasnyszu-ujawniamy-szczegoly",
    country: "Przasnysz, Poland 🇵🇱",
    note: "The Przasnysz military unit is specialised in reconnaissance and radioelectronic warfare and responsible for monitoring radio spectrum in North-Eastern Poland, including the well known Suwałki Gap"
  },

  {
    lat: 51.994444,
    lng: 19.161667,
    icon: icons.droneYellow,
    type: 'drone',      // used for filtering
    risk: 'yellow',
    place: 'militarybases',
    year: '2026',
    month: '02',
    popupType: 'Drone sighting / crash site', // shown in popup
    date: '06 Feb 2026, public informed at 12:07',
    details: "A drone crashed into the 1st Air Cavalry Battalion in Leźnica Wielka",
    link: "https://wiadomosci.onet.pl/kraj/dron-spadl-na-jednostke-wojskowa-jest-sledztwo/js7nfhw",
    country: "Leźnica Wielka, Poland 🇵🇱",
    note: "A 22 year old Pole was arrested for flying this drone",
    noteLink: "https://x.com/zandarmeria/status/2019782967770366384?s=61"
  },
    
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
    month: '09',
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
     month: '11',
    popupType: 'Drone incursion / crash site', // shown in popup
    date: '11 Nov 2025',
    details: "Russian drone entered Romanian airspace but due to the weather NATO jets weren't able to be scrambled. The remains were found 5km deep in Romania's territory",
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
     month: '11',
    popupType: 'Drone incursion ', // shown in popup
    date: '19 Nov 2025, 00:20 - 01:00 ',
    details: "Russian drone flew up to ~8 km into Romanian airspace where it disappeared from the radars. The drone later reappeared in Moldovan airspace from where it reentered Romania and was spotted in Foltești, Galați county again. Two German Eurofighters were scrambled <br> It is unknown what eventually happened to it",
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
     month: '11',
    popupType: 'Drone incursion ', // shown in popup
    date: '25 Nov 2025, ',
    details: "Two Russian drones flew into Romanian airspace through Ukraine and Moldova. Two German Eurofighters were scrambled and given permission to shot the drones down, but they didn't to avoid colateral damage. One of them flew back into Ukrainian airspace, the other crashed in Puiești, despite being spotted further inside the country earlier (Galati county)",
    link: "https://www.reuters.com/world/romania-scrambles-fighter-jets-after-drones-breach-its-airspace-2025-11-25/",
    country: "Puiești, Romania 🇷🇴",
  },

   {
    lat: 45.43252,
    lng: 25.13196,
    icon: icons.droneYellow,
    type: 'drone',      // used for filtering
    risk: 'yellow',
    place: 'others',
    year: '2025',
     month: '12',
    popupType: 'Drone incursion / crash site ', // shown in popup
    date: ' 21 Dec 2025, 10:40, ',
    details: "Police was notified about a crashed drone by a local citizen on a hunting trip. The drone is two meters wide, has a parachute attached, and is intact.",
    link: "https://www.digi24.ro/stiri/actualitate/evenimente/drona-de-2-metri-cu-o-parasuta-atasata-gasita-agatata-in-copacii-de-pe-muntele-stramtu-in-leresti-arges-3556063",
    country: "Strâmtu Mountain, Argeș County, Romania 🇷🇴",
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
    place: 'airports',
    year: '2025',
     month: '10',
    popupType: 'Drone sighting / airport closure ', // shown in popup
    date: '19 Oct 2025, 19:00 - ~19:30',
    details: "Multiple pilots reported a drone which resulted in the airport being closed. Police unsuccessfully used their own drone to localize the drone",
    link: "https://www.ondacero.es/emisoras/baleares/mallorca/noticias/aeropuerto-palma-opera-normalidad-cerrar-este-domingo-trafico-aereo-avistamiento-dron_2025102068f5e4db76c80d35b5f0b84e.html",
    country: "Palma de Mallorca Airport, Spain 🇪🇸"
  },

   {
    lat: 38.28757,
    lng: -0.55278,
    icon: icons.droneYellow,
    type: 'drone',      // used for filtering
    risk: 'yellow',
    place: 'airports',
    year: '2025',
     month: '10',
    popupType: 'Drone sighting / airport closure ', // shown in popup
    date: '27 Oct 2025, 20:53 - ~23:00',
    details: " A drone has been seen near the runway. The perpatrator hasn't been found",
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
   month: '09',
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
    month: '09',
    popupType: 'Drone sighting ', // shown in popup
    date: '26 Sep 2025, at night',
    details: "An unidentified drone was seen about a mile from the naval base. The drone did not fly over any restricted objects",
    link: "https://www.sverigesradio.se/artikel/suspected-drones-spotted-near-karlskrona-naval-base",
    country: "Karlskrona naval base, Sweden 🇸🇪"
  },

  {
    lat: 57.66242,
    lng: 12.28776,
    icon: icons.droneYellow,
    type: 'drone',      // used for filtering
    risk: 'yellow',
    place: 'airports',
    year: '2025',
    month: '11',
    popupType: ' Drone sighting / airport closure ', // shown in popup
    date: '06 Nov 2025, 17:41 - 21:30',
    details: "One or more drones have been observed at the coast, close to the airport. Air traffic resumed at around 21:30",
    link: "https://www.reuters.com/world/traffic-halted-swedish-city-gothenburgs-airport-after-drone-sighting-daily-2025-11-06/",
    country: "Gothenburg Landvetter Airport, Sweden 🇸🇪"
  },
    
     /* =========================
       T U R K E Y
    ========================= */

   {
    lat: 39.93011,
    lng: 32.85744,
    icon: icons.droneYellow,
    type: 'drone',      // used for filtering
    risk: 'yellow',
    place: 'others',
    year: '2025',
    popupType: 'Drone incursion ', // shown in popup
    date: '15 Dec 2025',
    month: '12',
    details: " Turkish F-16 fighters shot down an out-of-control unidentified UAV. The drone was shot down near Ankara",
    link: "https://www.trtworld.com/article/efc330793d51",
    country: "Ankara Region, Türkiye 🇹🇷"
  },

   {
    lat: 40.86296,
    lng: 30.02798,
    icon: icons.droneRed,
    type: 'drone',      // used for filtering
    risk: 'red',
    place: 'others',
    year: '2025',
     month: '12',
    popupType: 'Drone incursion / crash site ', // shown in popup
    date: '19 Dec 2025',
    details: "A crashed, unidentified UAV was found by citizens in the rural Çubuklubala neighborhood in Izmit. The camera is still working. <br> The drone is an Russian-made Orlan-10 drone, which is used for surveillance and reconnaissance ",
    link: "https://www.trtworld.com/article/82a95c0936d0",
    country: "Izmit, Türkiye 🇹🇷"
  },


   {
    lat: 40.04769,
    lng: 27.96799,
    icon: icons.droneRed,
    type: 'drone',      // used for filtering
    risk: 'red',
    place: 'others',
    year: '2025',
     month: '12',
    popupType: 'Drone incursion / crash site ', // shown in popup
    date: ' 10 Dec 2025,  evening',
    details: "A crashed, unidentified UAV was found by citizens in the Balıkesir’s Manyas district in an uninhabited field. <br> The drone is an Russian Merlin VR drone, which is used for reconnaissance and has a range of ~600km ",
    link: "https://www.hurriyet.com.tr/gundem/balikesirde-insansiz-hava-araci-dustu-inceleme-icin-ankaraya-gonderildi-43060797",
    country: "Manyas, Türkiye 🇹🇷",
  },

     /* =========================
       U K
    ========================= */
  ];

  // ------------------------
  // 6️⃣ Add markers to cluster (handles multi-incidents)
  // ------------------------
  incidents.forEach(i => {
    let popupHtml = `<b>${i.link ? `<a href="${i.link}" target="_blank">${i.country}</a>` : i.country}</b><br>`;
    
    if(i.note) {
      popupHtml += `<em>${i.note}</em>`;
      if(i.noteLink) popupHtml += ` <a href="${i.noteLink}" target="_blank">Source</a>`;
      popupHtml += '<br><br>';
    }

    if(Array.isArray(i.incidents)) {
      i.incidents.forEach((inc, idx) => {
        popupHtml += `<b>Incident ${idx + 1}</b><br>
                      <b>Type:</b> ${inc.popupType}<br>
                      <b>Date:</b> ${inc.date}<br>
                      <b>Details:</b> ${inc.details}<br>
                      ${inc.link ? `<a href="${inc.link}" target="_blank">Source</a>` : ''}
                      <hr>`;
      });
    } else {
      popupHtml += `<b>Type:</b> ${i.popupType}<br>
                    <b>Date:</b> ${i.date}<br>
                    <b>Details:</b> ${i.details}<br>
                    ${i.link ? `<a href="${i.link}" target="_blank">Source</a>` : ''}`;
    }

    const marker = L.marker([i.lat, i.lng], { icon: i.icon }).bindPopup(popupHtml, {
      maxHeight: 300,
      autoPan: true
    });

    marker.meta = i;
    markers.push(marker);
    markerCluster.addLayer(marker);
  });

  // ------------------------
  // 7️⃣ Filter logic
  // ------------------------
function applyFilters() {
  markerCluster.clearLayers();

  const fActor = document.getElementById('f-actor').value;
  const fType = document.getElementById('f-type').value;
  const fLocation = document.getElementById('f-location').value;
  const fMonth = document.getElementById('f-month').value;
  const fYear = document.getElementById('f-year').value;

  const visible = markers.filter(m => {
    const { risk, type, place, month, year } = m.meta;

    const matchActor = fActor === 'any' || risk === fActor;
    const matchType = fType === 'any' || type === fType;
    const matchPlace = fLocation === 'any' || place === fLocation;

    // handle month as string or array
    let matchMonth = false;
    if (fMonth === 'any') {
      matchMonth = true;
    } else if (Array.isArray(month)) {
      matchMonth = month.includes(fMonth.padStart(2,'0'));
    } else {
      matchMonth = month === fMonth.padStart(2,'0');
    }

    const matchYear = fYear === 'any' || year === fYear;

    return matchActor && matchType && matchPlace && matchMonth && matchYear;
  });

  markerCluster.addLayers(visible);
}

  // ------------------------
  // 8️⃣ Attach event listeners to filters
  // ------------------------
  document.querySelectorAll('#filters select').forEach(sel => {
    sel.addEventListener('change', applyFilters);
  });
});
