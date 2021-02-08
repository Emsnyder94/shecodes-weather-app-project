function displayTemperature(response){
    let cityElement= document.querySelector("#city");
    let temperatureElement = document.querySelector("#city-temperature");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML = response.data.name;
    humidityElement.innerHTML = response.data.main.humidity;
    windElement.innerHTML = Math.round(response.data.wind.speed);
}

    let apiKey="0a41317b31ebed3d5245fc696b6b07f2";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metrics`;

    axios.get(apiUrl).then(displayTemperature);