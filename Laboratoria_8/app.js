import ui from './ui.js';

document.getElementById('addCity').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    if (city) {
        ui.addCity(city);
        document.getElementById('cityInput').value = ''; // Clear input field
        ui.loadCities();
    }
});

window.onload = function() {
    ui.loadCities();
};
