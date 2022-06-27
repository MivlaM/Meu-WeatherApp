const cityForm = document.querySelector('[data-js="change-location"]')

const cityNameContainer = document.querySelector('[data-js="city-name"]')
const cityWeatherContainer = document.querySelector('[data-js="city-weather"]')
const cityTemperatureContainer = document.querySelector('[data-js="city-temperature"]')
const timeIconContainer = document.querySelector('[data-js="time-icon"]')

const cityCard = document.querySelector('[data-js="city-card"]')
const timeImage = document.querySelector('[data-js="time"]')

const containerManipulation = (timeIcon, LocalizedName, WeatherText) => {
  timeIconContainer.innerHTML = timeIcon
  cityNameContainer.textContent = LocalizedName
  cityWeatherContainer.textContent = WeatherText
}

const displayCityCard = (cityCardson) => {
  if (cityCardson.classList.contains('d-none')) {
    cityCardson.classList.remove('d-none')
  }
}

cityForm.addEventListener('submit', async event => {
  event.preventDefault()

  const inputValue = event.target.city.value

  const [{Key, LocalizedName}] = await getCityData(inputValue)

  const [{WeatherText, Temperature, IsDayTime, WeatherIcon}] = await getCityWeather(Key)

  const timeIcon = `<img src="./src/icons/${WeatherIcon}.svg" />`

  displayCityCard(cityCard)

  if (IsDayTime){
    timeImage.src = './src/day.svg'
  } else {
    timeImage.src = './src/night.svg'
  }

  containerManipulation(timeIcon, LocalizedName, WeatherText)
  cityTemperatureContainer.textContent = Temperature.Metric.Value

  cityForm.reset()
})

