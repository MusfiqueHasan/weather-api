const loadWeather = async () => {

    const weatherInput = document.getElementById('weather-input');
    const weatherValue = weatherInput.value;
    weatherInput.value = ''
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${weatherValue}&appid=b90bbd1e7d02772b43fd638fcd5529de`
    const res = await fetch(url);
    const data = await res.json()
    console.log(data)
    displayWeatherDetails(data)

}


const displayWeatherDetails = (tempData) => {

    dataCalling('city', tempData.name, true)
    dataCalling('temp', (tempData.main.temp - 273).toFixed(2), true)
    dataCalling('status', tempData.weather[0].main, true)
    dataCalling('icon', `https://openweathermap.org/img/wn/${tempData.weather[0].icon}@2x.png`, false)

}

const dataCalling = (weatherId, value, weatherValue) => {

    if (weatherValue == true) {
        const weatherInput = document.getElementById('weather-' + weatherId).innerText = value;
        return weatherInput;
    }else if (weatherValue == false) {
        const weatherInput = document.getElementById('weather-' + weatherId).src = value;
        return weatherInput;
    }
    
}
