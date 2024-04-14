import './style.css';
import './index.html';
import data from './api.js';
import { page, update } from './page';

function getNewData(location) {
  data
    .get(location)
    .then((response) => response.json())
    .then((response) => {
      data.response = response;
      data.location = response.location.name;
      update.page(data.unit, response);
      return response;
    })
    .then((response) => {
      if (data.forecastMode === 'hourly') {
        update.hourlyForecast(response, data.unit);
      } else {
        update.dailyForecast(response, data.unit);
      }
    })
    .then(() => {
      localStorage.setItem('location', data.location);
    })
    .catch(() => {
      const container = document.createElement('div');
      const errorMessage = document.createElement('h2');
      container.classList.add('error');
      errorMessage.textContent = 'Oops, something went wrong! Try again';
      document.body.appendChild(container);
      container.appendChild(errorMessage);
      setTimeout(() => {
        document.body.removeChild(container);
      }, 3000);
    });
}

function getLocation() {
  const location = localStorage.getItem('location');
  if (location) {
    getNewData(location);
  } else {
    getNewData('London');
  }
}

getLocation();

page.imperial.addEventListener('click', () => {
  data.unit = 'imperial';
  update.page(data.unit, data.response);
  if (data.forecastMode === 'hourly') {
    update.hourlyForecast(data.response, data.unit);
  } else {
    update.dailyForecast(data.response, data.unit);
  }
  page.metric.classList.remove('active');
  page.imperial.classList.add('active');
});

page.metric.addEventListener('click', () => {
  data.unit = 'metric';
  update.page(data.unit, data.response);
  if (data.forecastMode === 'hourly') {
    update.hourlyForecast(data.response, data.unit);
  } else {
    update.dailyForecast(data.response, data.unit);
  }
  page.imperial.classList.remove('active');
  page.metric.classList.add('active');
});

page.searchbar.addEventListener('focus', () => {
  data.userTyping = true;
});

page.searchbar.addEventListener('blur', () => {
  data.userTyping = false;
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'Enter' && data.userTyping === true && page.searchbar.value !== '') {
    getNewData(page.searchbar.value);
    page.searchbar.value = '';
  }
});

page.search.addEventListener('click', () => {
  if (page.searchbar.value !== '') {
    getNewData(page.searchbar.value);
    page.searchbar.value = '';
  }
});

page.hourly.addEventListener('click', () => {
  data.forecastMode = 'hourly';
  update.hourlyForecast(data.response, data.unit);
  page.hourly.classList.add('active');
  page.daily.classList.remove('active');
});

page.daily.addEventListener('click', () => {
  data.forecastMode = 'daily';
  update.dailyForecast(data.response, data.unit);
  page.hourly.classList.remove('active');
  page.daily.classList.add('active');
});
