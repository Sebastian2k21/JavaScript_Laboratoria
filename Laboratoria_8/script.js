const ICONS = {
    "Clear": "01d.png",
    "Partly cloudy": "02d.png",
    "Cloudy": "03d.png",
    "Light freezing rain": "09d.png",
    "Patchy rain possible": "10d.png",
    "Overcast": "11d.png",
    "Snow": "13d.png",
    "Mist": "50d.png"
}


document.getElementById('addCity').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    if(city) {
        addCity(city);
        document.getElementById('cityInput').value = ''; // Clear input field
        loadCities();
    }
});

function addCity(city) {
    let cities = localStorage.getItem('cities');
    cities = cities ? JSON.parse(cities) : [];
    if(cities.length < 10 && !cities.includes(city)) {
        cities.push(city);
        localStorage.setItem('cities', JSON.stringify(cities));
    }
}

function removeCity(city) {
    let cities = JSON.parse(localStorage.getItem('cities'));
    cities = cities.filter(c => c !== city);
    localStorage.setItem('cities', JSON.stringify(cities));
    loadCities();
}

function loadCities() {
    const citiesList = document.getElementById('citiesList');
    citiesList.innerHTML = ''; // Clear existing list
    let cities = localStorage.getItem('cities');
    cities = cities ? JSON.parse(cities) : [];
    cities.forEach(city => {
        fetchWeatherData(city);
    });
}

function fetchWeatherData(city) {
    fetch(`https://wttr.in/${city}?format=j1`)
        .then(response => response.json())
        .then(data => updateWeatherDisplay(city, data))
        .catch(error => console.error('Error:', error));
}

function updateWeatherDisplay(city, weatherData) {
    const citiesList = document.getElementById('citiesList');
    const cityDiv = document.createElement('div');
    cityDiv.className = 'city';

    const imgFilename = ICONS[weatherData.current_condition[0].weatherDesc[0].value];
    console.log(weatherData.current_condition[0].weatherDesc[0].value)
    
    cityDiv.innerHTML = `
        <h3>${city}</h3>
        <i class="fa-solid fa-sun">
        <p>Temperatura: ${weatherData.current_condition[0].temp_C} °C</p>
        </i>
        <p>Wilgotność: ${weatherData.current_condition[0].humidity}%</p>
        <p>Wiatr: ${weatherData.current_condition[0].windspeedKmph} km/h</p>
        <p>Wschód słońca: ${weatherData.weather[0].astronomy[0].sunrise}</p>
        <p>Zachód słońca: ${weatherData.weather[0].astronomy[0].sunset}</p>
        <p>Widoczność: ${weatherData.current_condition[0].visibility} km</p>

        <p>Opady: ${weatherData.current_condition[0].precipMM} mm</p>
        <p>Ciśnienie: ${weatherData.current_condition[0].pressure} hPa</p>
        <p style='display:flex;align-items:center;justify-content:center'>Niebo: <img src='https://openweathermap.org/img/wn/${imgFilename}'></p>
        <button onclick="removeCity('${city}')">Usuń</button>
    `;
    citiesList.appendChild(cityDiv);


   
}

window.onload = function() {
    loadCities();
};
