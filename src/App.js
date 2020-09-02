import React from "react";
import "./App.css";
import Weather from "./Weather.js";
import IconTest from "./IconTest.js";

function App() {
  return (
    <div className="container">
      <div className="App">
        <Weather defaultCity="Dallas" />
        <div className="footer">
          <p>This project was coded by: Mallory Eastburn</p>
          <div className="container2">
            <IconTest />
            <p>
              Open-sourced on{" "}
              <a
                href="https://github.com/Ramayama1/weather-app-practice"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
