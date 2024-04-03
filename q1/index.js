async function getWeather() {
  const input = document.getElementById("cityName").value;
  const apiKey = "84da51d440187ca383174852717ad983";
  const baseUrl = "http://api.openweathermap.org/data/2.5/weather?";
  const completeUrl = `${baseUrl}q=${input}&appid=${apiKey}&units=imperial`;

  try {
    const response = await fetch(completeUrl);
    const data = await response.json();
    const tempInCelsius = convertFahrenheitToCelsius(data.main.temp);
    const feelsLikeInCelsius = convertFahrenheitToCelsius(data.main.feels_like);

    const weatherInfo = `Weather in ${input}:<br>
        Temperature: ${tempInCelsius.toFixed(2)}&deg;C<br>
        Feels like: ${feelsLikeInCelsius.toFixed(2)}&deg;C<br>
        Description: ${data.weather[0].description}`;

    document.getElementById("weatherInfo").innerHTML = weatherInfo;
  } catch (error) {
    document.getElementById("weatherInfo").innerText =
      "City or ZIP code not found";
  }
}

function convertFahrenheitToCelsius(tempFahrenheit) {
  return ((tempFahrenheit - 32) * 5) / 9;
}
