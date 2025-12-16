
/* =========================
   MAP INIT
========================= */
const map = L.map('map').setView([20, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19
}).addTo(map);

/* =========================
   LAYER GROUPS
========================= */
// Type
const layers = {
  jets: L.layerGroup().addTo(map),
  drones: L.layerGroup().addTo(map),
  balloons: L.layerGroup().addTo(map),

  // Risk
  red: L.layerGroup().addTo(map),
  orange: L.layerGroup().addTo(map),
  yellow: L.layerGroup().addTo(map),
  green: L.layerGroup().addTo(map),
  blue: L.layerGroup().addTo(map),

  // Location
  airport: L.layerGroup().addTo(map),
  military: L.layerGroup().addTo(map),
  other: L.layerGroup().addTo(map)
};

/* =========================
   ICON FACTORY (example)
========================= */
function icon(file) {
  return L.icon({
    iconUrl: `icons/${file}`,
    iconSize: [28, 28],
    iconAnchor: [14, 28]
  });
}

/* =========================
   EXAMPLE MARKERS
   (You will replace/add many)
========================= */
const exampleMarker = L.marker([51.47, -0.45], {
  icon: icon('red_drone.png')
}).bindPopup("Example Drone at Airport");

// ADD MARKER TO MULTIPLE GROUPS
exampleMarker.addTo(layers.drones);
exampleMarker.addTo(layers.red);
exampleMarker.addTo(layers.airport);

/* =========================
   LEGEND TOGGLE
========================= */
const legend = document.getElementById('map-legend');
const toggleBtn = document.getElementById('legend-toggle');

toggleBtn.addEventListener('click', () => {
  legend.classList.toggle('open');
});

/* =========================
   CHECKBOX FILTERING
========================= */
document.querySelectorAll('#legend-content input[type="checkbox"]').forEach(cb => {
  cb.addEventListener('change', () => {
    const layer = layers[cb.dataset.layer];
    if (cb.checked) {
      map.addLayer(layer);
    } else {
      map.removeLayer(layer);
    }
  });
});

/* =========================
   ACTIVATE ALL
========================= */
document.getElementById('activate-all').addEventListener('click', () => {
  document.querySelectorAll('#legend-content input[type="checkbox"]').forEach(cb => {
    cb.checked = true;
    map.addLayer(layers[cb.dataset.layer]);
  });
});

/* =======================
   PANEL TOGGLES
======================= */
document.querySelectorAll('.panel-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const panel = document.getElementById(btn.dataset.target);
    panel.classList.toggle('collapsed');
    btn.textContent = panel.classList.contains('collapsed') ? '▸' : '▾';
  });
});
