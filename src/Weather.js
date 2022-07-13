import React, { useEffect, useState } from 'react';
import './Weather.css';

import axios from 'axios';

function Weather() {

     const [location, setLocation] = useState("");
     const [weatherData, setWeatherData] = useState([]);
  

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=3cc23a56d72e010f375c8d7ba6450c78`; 

    const searchLocation = (e) => {
      e.preventDefault();
       fetch(url)
         .then((response) => response.json())
         .then((data) => {
           console.log(data.response);
           setWeatherData(data);
         })
         .catch((error) => console.log(error));

    }
    
    
 


  return (
    <div className="weather">
      <div className="container">
        <div className="search">
          <input
            placeholder="Enter Location"
            type="text"
            value={location}  
            onKeyPress={searchLocation}         
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="city">
          <h2>Weather in </h2>
          <h3>18C</h3>
        </div>

        <div className="feels">
          <h4>Humidity  </h4>
        </div>

        <div className="feels">
          <h4>Wind speed </h4>
        </div>
      </div>
    </div>
  );
}

export default Weather;