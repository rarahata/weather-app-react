import React from "react";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="search-engine">
      <form>
        <input type="text" placeholder="Enter your city..."></input>
        <input type="submit" value="Search"></input>
      </form>
      </div>
      <div className="weather-diaplay">
      <h1>Tokyo</h1>
      <p>Last updated: Monday 17:00</p>
      <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather-icon" />
      <p>7 °C | °F</p>
      <ul>
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
      <div className="weather-forecast">
      <p>Tue</p>
      <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather-forecast-icon" />
      <p>10 | 7</p>
      <p>Tue</p>
      <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather-forecast-icon" />
      <p>10 | 7</p>

      <p>Tue</p>
      <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather-forecast-icon" />
      <p>10 | 7</p>

      <p>Tue</p>
      <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather-forecast-icon" />
      <p>10 | 7</p>
      </div>
      <p>
        <a href="https://github.com/rarahata/vanilla-weather-app">Open-Source Code</a> by Rei Arahata
      </p>
    </div>
  );
}

export default App;
