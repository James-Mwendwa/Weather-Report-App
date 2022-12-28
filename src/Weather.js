import React, { useEffect, useState } from "react";
import "./Weather.css";

function Weather() {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState({});

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=4cf5ac539e5d841de6360af7e94a2eaf`;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocation("");
  };

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, [url]);

  return (
    <div className="weather">
      <div className="container">
        <div className="search">
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Enter Location"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </form>
        </div>

        <div className="city">
          <h2>Weather in {weatherData.name}</h2>
          {weatherData.main ? (
            <h3>Temperature : {weatherData.main.temp.toFixed()} °F</h3>
          ) : null}
        </div>

        <div className="feels">
          {weatherData.main ? (
            <h4>Humidity : {weatherData.main.humidity.toFixed()} %</h4>
          ) : null}
        </div>

        <div className="feels">
          {weatherData.main ? (
            <h4>Wind speed : {weatherData.wind.speed.toFixed()} MPH</h4>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Weather;
