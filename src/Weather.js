import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast.js";

import "./Weather.css";

function Weather(props) {
  const [weather, getWeather] = useState({ ready: false });
  const [city, changeCity] = useState(props.defaultCity);
  const apiKey = "e5b908ddc9fb7ede69d3d189d61b9e6e";

  function handleResponse(response) {
    getWeather({
      ready: true,
      city: response.data.name,
      temp: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      feelsLike: response.data.main.feels_like,
      date: response.data.dt,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  function getPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let positionUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
    axios.get(positionUrl).then(handleResponse);
  }
  function getLocation() {
    navigator.geolocation.getCurrentPosition(getPosition);
  }
  function handleCityChange(event) {
    changeCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function search() {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }
  if (weather.ready) {
    return (
      <div className="Weather card">
        <div className="card-body headerCard">
          <nav className="navbar navbar-light">
            <h1 className="navbar-brand card-title">Weather</h1>
            <form
              className="form-inline card-subtitle mb-2 text-muted"
              onSubmit={handleSubmit}
            >
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Enter a city..."
                aria-label="Search"
                onChange={handleCityChange}
              />
              <button
                className="btn btn-outline-light my-2 my-sm-0"
                type="submit"
              >
                <i className="fas fa-search"></i>
              </button>

              <button
                className="btn btn-outline-light my-2 my-sm-0"
                type="submit"
                value="Location"
                onClick={getLocation}
              >
                <i className="fas fa-map-marker-alt"></i>
              </button>
            </form>
          </nav>
        </div>
        <hr />
        <WeatherInfo data={weather} />
        <hr />
        <Forecast city={weather.city} />
      </div>
    );
  } else {
    search();
    return (
      <Loader
        className="Loader"
        type="BallTriangle"
        color="tomato"
        height={100}
        width={100}
      />
    );
  }
}
export default Weather;
