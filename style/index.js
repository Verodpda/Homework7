//time and date
let currentDate = new Date();
let h2 = document.querySelector("h2");
let daysWeek =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let day = daysWeek[currentDate.getDay()];
let hour = currentDate.getHours();
let minutes = currentDate.getMinutes();
if (minutes > 10) {
h2.innerHTML = `${day} ${hour}:${minutes}`;
} else {
h2.innerHTML = `${day} ${hour}:0${minutes}`;
}

//current position
  function currentPosition (position){
      function displayCityWeather (response){
      let currentTemp = document.querySelector("#current-temp");
      currentTemp.innerHTML = `${Math.round(response.data.main.temp_max)}/${Math.round(response.data.main.temp_min)} C°|F°`;

      let currentHumidity = document.querySelector("#humidity");
      currentHumidity.innerHTML = `${response.data.main.humidity}%`;

      let currentWindSpeed = document.querySelector("#wind");
      currentWindSpeed.innerHTML = `${Math.round(response.data.wind.speed)} Km/h`

      let weatherDescription = document.querySelector("#weather-description");
      weatherDescription.innerHTML = (response.data.weather[0].description);

      let cityName = document.querySelector("h1");
      cityName.innerHTML = response.data.name;

      let weatherType = response.data.weather[0].main;
      let weatherIcon = document.querySelector("#weather-image");
      if (weatherType === "Clouds") {
      weatherIcon.setAttribute("src", `images/cloudy.svg`);
      }
      else
      if (weatherType === "Rain") {
      weatherIcon.setAttribute("src", `images/rain.svg`);
      }
      else
      if (weatherType === "Clear") {
        weatherIcon.setAttribute("src", `images/clear-day.svg`)
      }
      else
      if (weatherType === "Thunderstorm") {
        weatherIcon.setAttribute("src", `images/thunderstorm.svg`)
      }
      else
      if (weatherType === "Drizzle") {
        weatherIcon.setAttribute("src", `images/drizzle.svg`)
      }
      else
      if (weatherType === "Snow") {
        weatherIcon.setAttribute("src", `images/snow.svg`)
      }
      else
      if (weatherType === "Mist") {
        weatherIcon.setAttribute("src", `images/mist.svg`)
      }

  }
   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=70a117d10548a7cde81c5d73ab55d01b&units=metric`;
   axios.get(apiUrl).then(displayCityWeather)
  }
  navigator.geolocation.getCurrentPosition(currentPosition);


//city search
  function citySubmit(event){
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let cityHTML = document.querySelector("h1");
  cityHTML.innerHTML = (`${cityInput.value}`)

  function displayCityWeather (response){
      let currentTemp = document.querySelector("#current-temp");
      currentTemp.innerHTML = `${Math.round(response.data.main.temp_max)}/${Math.round(response.data.main.temp_min)} C°|F°`;

      let currentHumidity = document.querySelector("#humidity");
      currentHumidity.innerHTML = `${response.data.main.humidity}%`;

      let currentWindSpeed = document.querySelector("#wind");
      currentWindSpeed.innerHTML = `${Math.round(response.data.wind.speed)} Km/h`

      let weatherDescription = document.querySelector("#weather-description");
      weatherDescription.innerHTML = (response.data.weather[0].description);

      let weatherType = response.data.weather[0].main;
      let weatherIcon = document.querySelector("#weather-image");
      if (weatherType === "Clouds") {
      weatherIcon.setAttribute("src", `images/cloudy.svg`);
      }
      else
      if (weatherType === "Rain") {
      weatherIcon.setAttribute("src", `images/rain.svg`);
      }
      else
      if (weatherType === "Clear") {
        weatherIcon.setAttribute("src", `images/clear-day.svg`)
      }
      else
      if (weatherType === "Thunderstorm") {
        weatherIcon.setAttribute("src", `images/thunderstorm.svg`)
      }
      else
      if (weatherType === "Drizzle") {
        weatherIcon.setAttribute("src", `images/drizzle.svg`)
      }
      else
      if (weatherType === "Snow") {
        weatherIcon.setAttribute("src", `images/snow.svg`)
      }
      else
      if (weatherType === "Mist") {
        weatherIcon.setAttribute("src", `images/mist.svg`)
      }
      console.log(response)
  }
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=70a117d10548a7cde81c5d73ab55d01b&units=metric`;
  axios.get(apiUrl).then(displayCityWeather)
}

let cityForm = document.querySelector("#city-search");
cityForm.addEventListener("submit", citySubmit);