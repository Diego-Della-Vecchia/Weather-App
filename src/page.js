const  page  = {
    searchbar : document.querySelector('#searchbar'),
    search : document.querySelector('.searchIcon'),
    city : document.querySelector('.city'),
    country : document.querySelector('.country'),
    weatherIcon : document.querySelector('.weatherIcon'),
    currentTemperature : document.querySelector('.currentTemperature'),
    weatherCondition : document.querySelector('.weatherCondition'),
    feelsLike : document.querySelector('.feelsLike'),
    minTemperature : document.querySelector('.minTemperature'),
    maxTemperature : document.querySelector('.maxTemperature'),
    sunrise : document.querySelector('span.sunrise'),
    sunset : document.querySelector('span.sunset'),
    imperial : document.querySelector('.imperial'),
    metric : document.querySelector('.metric'),
    humidity : document.querySelector('.humidity'),
    rainChance : document.querySelector('.rainChance'),
    speedUnit : document.querySelector ('.speedUnit'),
    windSpeed : document.querySelector('.windSpeed'),
    uvIndex : document.querySelector('.uvIndex'),
    forecast: document.querySelector('.forecast'),
}

const update = {
    page : (unit, data) => {
        let speedUnit;
        let tempUnit;
        if(unit === 'imperial') {
            page.speedUnit.textContent = 'mph'
            speedUnit = 'mph'
            tempUnit = 'f'
        } else {
            page.speedUnit.textContent = 'km/h'
            speedUnit = 'kph'
            tempUnit = 'c'
        }
        page.city.textContent = data.location.name
        page.country.textContent = data.location.country
        page.currentTemperature.textContent = data.current[`temp_${  tempUnit}`]
        page.weatherIcon.src = data.current.condition.icon
        page.weatherCondition.textContent = data.current.condition.text
        if(unit ==='imperial') {
            page.feelsLike.textContent = `${data.current[`feelslike_${tempUnit}`]  }f°`;
            page.minTemperature.textContent = `${data.forecast.forecastday[0].day[`mintemp_${tempUnit}`]  }f°`
            page.maxTemperature.textContent = `${data.forecast.forecastday[0].day[`maxtemp_${tempUnit}`]  }f°`
        }
        else if(unit ==='metric') {
            page.feelsLike.textContent = `${data.current[`feelslike_${tempUnit}`]  }c°`;
            page.minTemperature.textContent = `${data.forecast.forecastday[0].day[`mintemp_${tempUnit}`]  }c°`
            page.maxTemperature.textContent = `${data.forecast.forecastday[0].day[`maxtemp_${tempUnit}`]  }c°`
        }
        page.sunrise.textContent = data.forecast.forecastday[0].astro.sunrise
        page.sunset.textContent = data.forecast.forecastday[0].astro.sunset
        page.humidity.textContent = data.current.humidity
        page.windSpeed.textContent = data.current[`wind_${speedUnit}`]
        page.rainChance.textContent = `${data.forecast.forecastday[0].day.daily_chance_of_rain  }%`
        page.uvIndex.textContent = data.forecast.forecastday[0].day.uv
    }
}

export {page, update}