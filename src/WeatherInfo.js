import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherTemperature from "./WeatherTemperature.js";
import "./WeatherInfo.css";
export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo card-body row">
      <div className="col firstCol">
        <h1>{props.data.city}</h1>
        <ul>
          <li className="date">
            <em>
              <FormattedDate date={props.data.date} defer />
            </em>
          </li>
          <li className="weatherInfoDescriptions">
            <p>Feels like: {Math.round(props.data.feelsLike)}°F</p>
          </li>
          <li className="weatherInfoDescriptions">
            <p>Humidity: {props.data.humidity}%</p>
          </li>
          <li className="weatherInfoDescriptions">
            <p>Wind: {Math.round(props.data.wind)} mph</p>
          </li>
        </ul>
      </div>
      <div className="col">
        <img src={props.data.icon} alt="partially cloud" />
        <p className="description">{props.data.description}</p>
      </div>
      <div className="col">
        <WeatherTemperature fahrenheit={props.data.temp} defer />
      </div>
    </div>
  );
}
