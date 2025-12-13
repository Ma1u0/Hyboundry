alert("SCRIPT LOADED");

// Create the map
var map = L.map('map').setView([54.5, 10], 5);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors',
  maxZoom: 19
}).addTo(map);

// Test marker
L.marker([55.6761, 12.5683])
  .addTo(map)
  .bindPopup("BASIC MARKER");
