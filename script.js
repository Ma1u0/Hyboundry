// Initialize the map centered over Europe
var map = L.map('map').setView([54.5, 10], 5); // latitude, longitude, zoom

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19
}).addTo(map);

// Example marker
L.marker([55.6761, 12.5683]) // Copenhagen coordinates
    .addTo(map)
    .bindPopup("<b>Copenhagen Airport</b><br>Date: 22 Sep 2025<br>Drone sighting");
