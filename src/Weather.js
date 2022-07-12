import React, { useEffect, useState } from 'react';
import './Weather.css';

function Weather() {

     const [location, setLocation] = useState("");
     const [data, setData] = useState([]);

    const url =
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=3cc23a56d72e010f375c8d7ba6450c78`;   
   

    
    useEffect(() => {
      fetch(url)
      .then((response) => {
        setData(response.data);
        console.log(response.data)
      })
      .catch((error) => console.log(error.message))

    },[url]);  

  return (
    <div className="weather">
      <div className="container">
        <div className="search">
          <input
            placeholder="Enter Location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="city">
          <h2>Weather in {data.name}</h2>
          <h3>18C</h3>
        </div>

        <div className="feels">
          <h4>Humidity {data.main.temp} </h4>
        </div>

        <div className="feels">
          <h4>Wind speed {data.wind.speed}</h4>
        </div>
      </div>
    </div>
  );
}

export default Weather;