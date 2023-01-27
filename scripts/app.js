import { prod, dev } from "./environment.js";

let apiKey = '&appid=';

if(prod.isLive == true)
{
    apiKey += prod.apiKey;
}else{
    apiKey += dev.apiKey;
}



function FetchWeather(city) {
  return fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + apiKey)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}

function FetchForecast(city) {
  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial" + apiKey)
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
let todaysBoxTitle = document.getElementById("todaysBoxTitle")
let todaysBoxBody = document.getElementById("todaysBoxBody")

search.addEventListener("click", displayCity);

async function displayCity() {
  let myCity = await FetchWeather(searchText.value);

  console.log(myCity)
  let weatherData1 = document.createElement("div")
  let weatherData2 = document.createElement("div")
  let weatherData3 = document.createElement("div")
  let weatherData4 = document.createElement("div")
  todaysBoxTitle.innerHTML = "";
  todaysBoxBody.innerHTML = "";

  let weatherTitle = `${myCity.name}, ${myCity.sys.country} As of ${new Date(Date.now() + (-1*new Date().getTimezoneOffset()*60000)).toISOString()}`;
  weatherData1.innerHTML = "High: " + myCity.main.temp_max;
  weatherData2.innerHTML = "Low: " + myCity.main.temp_min;  
  weatherData3.innerHTML = " " + myCity.main.temp;
  weatherData4.innerHTML = "" + myCity.weather[0].description;

  console.log(todaysBoxBody);
  todaysBoxTitle.append(weatherTitle);
  weatherData3.classList.add("col-6", "bigText");
  weatherData4.classList.add("weatherTxt");
  weatherData1.classList.add("highLow");
  weatherData2.classList.add("highLow");

  console.log(weatherData3);
  
  todaysBoxBody.append(weatherData3);
  todaysBoxBody.append(weatherData4);
  todaysBoxBody.append(weatherData1);
  todaysBoxBody.append(weatherData2);
  console.log(todaysBoxBody);
  // container.append(weatherData1);
  // container.append(weatherData2);
  // container.append(weatherData4);

}

async function displayWeek(){
  let myWeek = await FetchForecast(seatchText.value);

  console.log(myWeek);
  let week1 = document.createElement("div")
  week1.innerHTML = myWeek.list[1].weather.main.temp;
  
}
function displayFavorites() {

}

FetchForecast("modesto,ca,us");

let todaysRow;
let h2;

// function todaysBox() {
//   todaysRow = document.createElement("div");
//   todaysRow.id = "todaysRow";
//   todaysRow.className = "today";
  
//   todaysRow.appendChild();
// }