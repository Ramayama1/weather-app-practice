import React, { useState } from "react";
import axios from "axios";
import ForecastItem from "./ForecastItem.js";
import "./Forecast.css";

export default function Forecast(props) {
  const [loaded, isLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  function forecastResponse(response) {
    setForecast(response.data);
    isLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="Forecast row">
        {forecast.list.slice(0, 5).map(function (forecastItem) {
          return <ForecastItem data={forecastItem} />;
        })}
      </div>
    );
  } else {
    const apiKey = "e5b908ddc9fb7ede69d3d189d61b9e6e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(forecastResponse);
    return "loading";
  }
}
