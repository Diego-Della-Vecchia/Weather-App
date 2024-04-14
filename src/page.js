import api from './api';

const page = {
  searchbar: document.querySelector('#searchbar'),
  search: document.querySelector('.searchIcon'),
  city: document.querySelector('.city'),
  country: document.querySelector('.country'),
  weatherIcon: document.querySelector('.weatherIcon'),
  currentTemperature: document.querySelector('.currentTemperature'),
  weatherCondition: document.querySelector('.weatherCondition'),
  feelsLike: document.querySelector('.feelsLike'),
  minTemperature: document.querySelector('h2.minTemperature'),
  maxTemperature: document.querySelector('h2.maxTemperature'),
  sunrise: document.querySelector('span.sunrise'),
  sunset: document.querySelector('span.sunset'),
  imperial: document.querySelector('.imperial'),
  metric: document.querySelector('.metric'),
  humidity: document.querySelector('.humidity'),
  rainChance: document.querySelector('.rainChance'),
  speedUnit: document.querySelector('.speedUnit'),
  windSpeed: document.querySelector('.windSpeed'),
  uvIndex: document.querySelector('.uvIndex'),
  hourly: document.querySelector('.hourlyForecast'),
  daily: document.querySelector('.dailyForecast'),
  forecast: document.querySelector('.scrollcontainer'),
};

const update = {
  page: (unit, data) => {
    let speedUnit;
    let tempUnit;
    if (unit === 'imperial') {
      page.speedUnit.textContent = 'mph';
      speedUnit = 'mph';
      tempUnit = 'f';
      page.feelsLike.textContent = `${data.current[`feelslike_${tempUnit}`]}f°`;
      page.minTemperature.textContent = `${data.forecast.forecastday[0].day[`mintemp_${tempUnit}`]}f°`;
      page.maxTemperature.textContent = `${data.forecast.forecastday[0].day[`maxtemp_${tempUnit}`]}f°`;
    } else {
      page.speedUnit.textContent = 'km/h';
      speedUnit = 'kph';
      tempUnit = 'c';
      page.feelsLike.textContent = `${data.current[`feelslike_${tempUnit}`]}c°`;
      page.minTemperature.textContent = `${data.forecast.forecastday[0].day[`mintemp_${tempUnit}`]}c°`;
      page.maxTemperature.textContent = `${data.forecast.forecastday[0].day[`maxtemp_${tempUnit}`]}c°`;
    }
    page.city.textContent = data.location.name;
    page.country.textContent = data.location.country;
    page.currentTemperature.textContent = `${data.current[`temp_${tempUnit}`] + tempUnit}°`;

    const url = `https:${data.current.condition.icon}`;
    page.weatherIcon.src = url;
    page.weatherCondition.textContent = data.current.condition.text;

    page.sunrise.textContent = data.forecast.forecastday[0].astro.sunrise.replace('AM', '');
    page.sunset.textContent = api.convertTime(data.forecast.forecastday[0].astro.sunset);

    page.humidity.textContent = `${data.current.humidity}%`;
    page.windSpeed.textContent = data.current[`wind_${speedUnit}`];
    page.rainChance.textContent = `${data.forecast.forecastday[0].day.daily_chance_of_rain}%`;
    page.uvIndex.textContent = data.forecast.forecastday[0].day.uv;
  },
  hourlyForecast: (data, unit) => {
    let tempUnit;

    if (unit === 'imperial') {
      tempUnit = 'f';
    } else {
      tempUnit = 'c';
    }

    page.forecast.innerHTML = '';

    for (let i = 0; i < 3; i += 1) {
      for (let j = 0; j < 24; j += 1) {
        const card = document.createElement('div');
        card.classList.add('card');
        const when = document.createElement('p');
        when.textContent = data.forecast.forecastday[i].hour[j].time;
        when.classList.add('when');
        const weatherIcon = document.createElement('img');
        weatherIcon.classList.add('weatherIcon');
        const url = `https:${data.forecast.forecastday[i].hour[j].condition.icon}`;
        weatherIcon.src = url;
        const forecastTemperature = document.createElement('div');
        forecastTemperature.classList.add('forecastTemperature');
        forecastTemperature.textContent = `${data.forecast.forecastday[i].hour[j][`temp_${tempUnit}`]}${tempUnit}°`;

        page.forecast.appendChild(card);
        card.appendChild(when);
        card.appendChild(weatherIcon);
        card.appendChild(forecastTemperature);
      }
    }
  },
  dailyForecast: (data, unit) => {
    let tempUnit;

    if (unit === 'imperial') {
      tempUnit = 'f';
    } else {
      tempUnit = 'c';
    }
    page.forecast.innerHTML = '';
    for (let i = 0; i < 3; i += 1) {
      const card = document.createElement('div');
      card.classList.add('card');
      const when = document.createElement('p');
      when.textContent = data.forecast.forecastday[i].date;
      when.classList.add('when');
      const weatherIcon = document.createElement('img');
      weatherIcon.classList.add('weatherIcon');
      const url = `https:${data.forecast.forecastday[i].day.condition.icon}`;
      weatherIcon.src = url;
      const forecastTemperature = document.createElement('div');
      forecastTemperature.classList.add('forecastTemperature');
      const minTemperature = document.createElement('span');
      minTemperature.textContent = `${data.forecast.forecastday[i].day[`mintemp_${tempUnit}`]}${tempUnit}°/`;
      minTemperature.classList.add('minForecast');
      const maxTemperature = document.createElement('span');
      maxTemperature.textContent = `${data.forecast.forecastday[i].day[`maxtemp_${tempUnit}`]}${tempUnit}°`;
      maxTemperature.classList.add('maxForecast');

      page.forecast.appendChild(card);
      card.appendChild(when);
      card.appendChild(weatherIcon);
      card.appendChild(forecastTemperature);
      forecastTemperature.appendChild(minTemperature);
      forecastTemperature.appendChild(maxTemperature);
    }
  },
};

export { page, update };
