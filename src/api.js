const data = {
  response: null,
  location: null,
  unit: 'metric',
  userTyping: false,
  forecastMode: 'daily',
  get(location) {
    return fetch(`https://api.weatherapi.com/v1/forecast.json?key=ac9c75817a644c16976152742241204&q=${location}&days=3`, { mode: 'cors' });
  },
  convertTime(time) {
    let newTime = time.replace('PM', '');
    const temporary = newTime.split(':');
    temporary[0] = parseInt(temporary[0], 10) + 12;
    if (temporary[0] > 24) {
      temporary[0] -= 24;
    }
    newTime = temporary.join(':');
    return newTime;
  },
};

export default data;
