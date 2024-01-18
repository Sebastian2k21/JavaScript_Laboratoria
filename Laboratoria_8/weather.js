const weather = {
    fetchWeatherData: (city) => {
        return fetch(`https://wttr.in/${city}?format=j1`)
            .then(response => response.json())
            .catch(error => console.error('Error:', error));
    }
};

export default weather;
