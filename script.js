alert("JS IS RUNNING");

var map = L.map('map').setView([54.5, 10], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

L.marker([55.6761, 12.5683])
  .addTo(map)
  .bindPopup("TEST MARKER");
