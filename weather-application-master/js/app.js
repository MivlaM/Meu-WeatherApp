const cityForm = document.querySelector('[data-js="change-location"]')

const cityNameContainer = document.querySelector('[data-js="city-name"]')
const cityWeatherContainer = document.querySelector('[data-js="city-weather"]')
const cityTemperatureContainer = document.querySelector('[data-js="city-temperature"]')

const cityCard = document.querySelector('[data-js="city-card"]')
const timeImg = document.querySelector('[data-js="time"]')




cityForm.addEventListener('submit', async event => {
  event.preventDefault()

  const inputValue = event.target.city.value
  const [{Key, LocalizedName}] = await getCityData(inputValue)

  const [{WeatherText, Temperature, isDayTime}] = await getCityWeather(Key)

  if (cityCard.classList.contains('d-none')){
    cityCard.classList.remove('d-none')
  }


  if (!isDayTime){
    console.log('Tá de dia')
  } else {
    console.log('Tá de noite')
  }


  cityNameContainer.textContent = LocalizedName
  cityWeatherContainer.textContent = WeatherText
  cityTemperatureContainer.textContent = Temperature.Metric.Value


  console.log(WeatherText, Temperature.Metric.Value)

  cityForm.reset()
})