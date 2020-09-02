import React from "react";
import "./ForecastItem.css";

export default function ForecastItem(props) {
  let iconUrl = `https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;

  return (
    <div className="ForecastItem col">
      <div>
        <p>{new Date(props.data.dt * 1000).getHours()}:00</p>
      </div>
      <div>
        <img src={iconUrl} alt={props.data.weather[0].description} />
      </div>
      <div>
        <p>{Math.round(props.data.main.temp)}°F</p>
      </div>
    </div>
  );
}
