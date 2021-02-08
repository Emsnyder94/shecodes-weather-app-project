function displayTemperature(response){
    let cityElement= document.querySelector("#city");
    let temperatureElement = document.querySelector("#city-temperature");
    temperatureElement.innerHTML = Math.round(response.data);
    cityElement.innerHTML = response.data.name;
}

    let apiKey="0a41317b31ebed3d5245fc696b6b07f2";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metrics`;

    axios.get(apiUrl).then(displayTemperature);