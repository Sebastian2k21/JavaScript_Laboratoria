const storage = {
    getCities: () => {
        const cities = localStorage.getItem('cities');
        return cities ? JSON.parse(cities) : [];
    },
    setCities: (cities) => {
        localStorage.setItem('cities', JSON.stringify(cities));
    }
};

export default storage;
