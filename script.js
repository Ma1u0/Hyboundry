// Initialize the map centered over Europe
var map = L.map('map').setView([54.5, 10], 5); // latitude, longitude, zoom

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
    maxZoom: 19
}).addTo(map);

// Example marker
L.marker([55.6761, 12.5683]) // Copenhagen coordinates
    .addTo(map)
    .bindPopup("<b>Copenhagen Airport</b><br>Date: 22 Sep 2025<br>Drone sighting");
