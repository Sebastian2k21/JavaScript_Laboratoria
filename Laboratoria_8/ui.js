
import storage from './storage.js';
import weather from './weather.js';

const ICONS = {
    "Clear": "01d.png",
    "Partly cloudy": "02d.png",
    "Cloudy": "03d.png",
    "Light freezing rain": "09d.png",
    "Patchy rain possible": "10d.png",
    "Overcast": "11d.png",
    "Snow": "13d.png",
    "Mist": "50d.png"
};

const ui = {
    addCity: (city) => {
        let cities = storage.getCities();
        if (cities.length < 10 && !cities.includes(city)) {
            cities.push(city);
            storage.setCities(cities);
        }
    },
    removeCity: (city) => {
        let cities = storage.getCities();
        cities = cities.filter(c => c !== city);
        storage.setCities(cities);
        ui.loadCities();
    },
    loadCities: () => {
        const citiesList = document.getElementById('citiesList');
        citiesList.innerHTML = ''; 
        let cities = storage.getCities();
        cities.forEach(city => {
            weather.fetchWeatherData(city)
                .then(data => ui.updateWeatherDisplay(city, data));
        });
    },
    updateWeatherDisplay: (city, weatherData) => {
        const citiesList = document.getElementById('citiesList');
        const cityDiv = document.createElement('div');
        cityDiv.className = 'city';

        const imgFilename = ICONS[weatherData.current_condition[0].weatherDesc[0].value];

        cityDiv.innerHTML = `
            <h3>${city}</h3>
            <i class="fa-solid fa-sun">
            <p>Temperatura: ${weatherData.current_condition[0].temp_C} °C</p>
            <p>Wilgotność: ${weatherData.current_condition[0].humidity}%</p>
            <p>Wiatr: ${weatherData.current_condition[0].windspeedKmph} km/h</p>
            <p>Wschód słońca: ${weatherData.weather[0].astronomy[0].sunrise}</p>
            <p>Zachód słońca: ${weatherData.weather[0].astronomy[0].sunset}</p>
            <p>Widoczność: ${weatherData.current_condition[0].visibility} km</p>

            <p>Opady: ${weatherData.current_condition[0].precipMM} mm</p>
            <p>Ciśnienie: ${weatherData.current_condition[0].pressure} hPa</p>
            <p style='display:flex;align-items:center;justify-content:center'>Niebo: <img src='https://openweathermap.org/img/wn/${imgFilename}'></p>
        `;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Usuń';
        removeButton.addEventListener('click', () => ui.removeCity(city));

        cityDiv.appendChild(removeButton);
        citiesList.appendChild(cityDiv);
    }
};

export default ui;
