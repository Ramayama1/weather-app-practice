import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");
  function fToC(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function cToF(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  if (unit === "fahrenheit") {
    return (
      <div className="WeatherTemperature">
        <div className="units">
          <strong>
            <u>°F</u>
          </strong>{" "}
          | <button onClick={fToC}>°C</button>
        </div>
        <div className="temp">{props.fahrenheit}</div>
      </div>
    );
  } else {
    let celsius = Math.round(((props.fahrenheit - 32) * 5) / 9);
    return (
      <div className="WeatherTemperature">
        <div className="units">
          <button onClick={cToF}>°F</button> |{" "}
          <strong>
            <u>°C</u>
          </strong>
        </div>
        <div className="temp">{celsius}</div>
      </div>
    );
  }
}
