function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[dayIndex];
  return `${day} ${hours}:${minutes}`;
}
let dateElement = document.querySelector("#date");
let now = new Date();
dateElement.innerHTML = formatDate(now);

function displayTemperature(response){
    let locationElement= document.querySelector("#location");
    let descriptionElement = document.querySelector("#description");
    let temperatureElement = document.querySelector("#city-temperature");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let iconElement = document.querySelector("#icon");
    
    celsiusTemp = response.data.main.temp;

    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    locationElement.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humidity;
    windElement.innerHTML = Math.round(response.data.wind.speed);
    iconElement.setAttribute("src",`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    iconElement.setAttribute("alt",response.data.weather[0].description);
}

function search(location){
let apiKey="0a41317b31ebed3d5245fc696b6b07f2";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayTemperature);
  }

function handleSubmit(event){
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  search(cityInputElement.value);
}

function displayFahrenheitTemp(event){
  event.preventDefault();
  let fahrenheitTemp = (celsiusTemp * 9)/ 5 +32;
  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let temperatureElement = document.querySelector("#city-temperature");
  temperatureElement.innerHTML = Math.round(fahrenheitTemp);
}

function displayCelsiusTemp(event){
  event.preventDefault();
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  let temperatureElement = document.querySelector("#city-temperature");
  temperatureElement.innerHTML = Math.round(celsiusTemp);
}

let celsiusTemp = null;

    let form = document.querySelector("#search-city");
    form.addEventListener("submit", handleSubmit);

    let fahrenheitLink = document.querySelector("#fahrenheit-link");
    fahrenheitLink.addEventListener("click", displayFahrenheitTemp);

    let celsiusLink = document.querySelector("#celsius-link");
    celsiusLink.addEventListener("click", displayCelsiusTemp);

    search("New York");
