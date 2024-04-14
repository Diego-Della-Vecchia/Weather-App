const data = {
    response : null,
    location : null,
    unit: 'metric',
    get (location) {
        return fetch(`https://api.weatherapi.com/v1/forecast.json?key=ac9c75817a644c16976152742241204&q=${location}`, {mode: 'cors'})
    }
}

export default data;