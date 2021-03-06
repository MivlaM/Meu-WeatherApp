const APIKey = 'bD7IRZY8T1brvlAr2LZGnnDIg8FeAGGe'

const baseUrl = 'http://dataservice.accuweather.com/'

const Chave = 'http://dataservice.accuweather.com/locations/v1/cities/search'

const getCityUrl = cityName => `${baseUrl}locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const getWeatherUrl = cityKey => `${baseUrl}currentconditions/v1/${cityKey}?apikey=${APIKey}&language=pt-br`

const fetchData = async url => {
  try {
    const response = await fetch(url)

    if (!response.ok){
      throw new Error('Não foi possível executar com sucesso')
    }

    return response.json()

  } catch ({ name, message}) {
    alert(`${name}: ${message}`)
  }
}

const getCityData = cityName => fetchData(getCityUrl(cityName))
const getCityWeather = cityKey => fetchData(getWeatherUrl(cityKey))
