import React from "react";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="weather-display border border-dark border-1 p-4 m-4">
      <form className="d-flex justify-content-center">
        <input type="text" placeholder="Enter your city..."></input>
        <input type="submit" value="Search"></input>
      </form>
      <h1 className="text-center pt-5">Tokyo</h1>
      <p className="text-center mb-0">Last updated: Monday 17:00</p>
      <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather-icon" className="d-block m-auto pt-5 pb-5"/>
      <div className="d-flex justify-content-evenly">
      <span><span className="temperature">7</span>°C | °F</span>
      <ul className="condition p-0">
        <li>
          Broken Clouds
        </li>
        <li>
          Humidity: 55%
        </li>
        <li>
          Wind: 1 m/s
        </li>
      </ul>
      </div>
      </div>
      <div className="weather-forecast border border-dark border-1 p-4 m-4">
      <div className="container">
      <div className="row">
      <div className="col-3">
      <p>Tue</p>
      <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather-forecast-icon" />
      <p>10 | 7</p>
      </div>
      <div className="col-3">
      <p>Tue</p>
      <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather-forecast-icon" />
      <p>10 | 7</p>
      </div>
      <div className="col-3">
      <p>Tue</p>
      <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather-forecast-icon" />
      <p>10 | 7</p>
      </div>
      <div className="col-3">
      <p>Tue</p>
      <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather-forecast-icon" />
      <p>10 | 7</p>
      </div>
      </div>
      </div>
      </div>
      <p className="text-center">
        <a href="https://github.com/rarahata/vanilla-weather-app">Open-Source Code</a> by Rei Arahata
      </p>
    </div>
  );
}

export default App;
