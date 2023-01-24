function FetchWeather(city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&APPID=96edd3c43f4b504c6a9d62bc01e7dae9"
    )
      .then((response) => response.json())
      .then((data) => {
          console.log(data);
      });
  }
  
  function FetchForecast(city) {
      fetch(
          "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&APPID=96edd3c43f4b504c6a9d62bc01e7dae9"
        )
          .then((response) => response.json())
          .then((data) => {
             console.log(data);
          });
  }
  
  
  FetchWeather("modesto,ca,us");
  FetchForecast("modesto,ca,us");