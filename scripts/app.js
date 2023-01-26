function FetchWeather(city) {
    return fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&APPID=96edd3c43f4b504c6a9d62bc01e7dae9"
    )
      .then((response) => response.json())
      .then((data) => {
        return data;
     });
  }
  
  function FetchForecast(city) {
      fetch(
          "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&APPID=96edd3c43f4b504c6a9d62bc01e7dae9"
        )
          .then((response) => response.json())
          .then((data) => {
             return data;
          });
  }
  
  
// let modesto =  FetchWeather("95355");
// console.log(modesto)

let searchText = document.getElementById("searchText");
let search = document.getElementById("search");
let container = document.getElementById("container");
search.addEventListener("click", displayCity);

async function displayCity() {
    let myCity = await FetchWeather(searchText.value); 

    console.log(myCity)
    let weatherData = document.createElement("div")
    weatherData.innerHTML = "feels like: " + myCity.main.feels_like;
    container.append(weatherData);

}

function displayFavorites() {

}

  FetchForecast("modesto,ca,us");