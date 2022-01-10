import React, {useState} from "react";
import './App.css';
import axios from "axios";

export default function App(props) {
  let [city, setCity]=useState("");
  let [weather, setWeather]=useState({});
  let [pageShwon, setPageShown]=useState(false);

  function displayWeather(response){
    setPageShown(true);
    setWeather({
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  });
  }

  function handleSubmit(event){
    event.preventDefault();
    let apiKey="7796ed76d4738ed90e39d5875eb78f75";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event){
    setCity(event.target.value);
  }

  let form = <div className="search-engine border border-dark border-1 p-4 m-4">
  <form className="d-flex justify-content-center" onSubmit={handleSubmit}>
  <input type="text" placeholder="Enter your city..." onChange={updateCity}></input>
  <input type="submit" value="Search"></input>
  </form>
  </div>

  if (pageShwon){
  return (
    <div className="App">
      <div className="container">
      {form}
      <div className="weather-display border border-dark border-1 p-4 m-4">
      <h1 className="text-center mt-2">{city}</h1>
      <p className="text-center mb-0">Last updated: Monday 17:00</p>
      <img src={weather.icon} alt="weather-icon" className="d-block m-auto pt-5 pb-5"/>
      <div className="d-flex justify-content-evenly">
      <span><span className="temperature">{weather.temperature} </span>°C | °F</span>
      <ul className="condition p-0">
        <li>
          {weather.description}
        </li>
        <li>
          humidity: {weather.humidity}%
        </li>
        <li>
          wind: {weather.wind} m/s
        </li>
      </ul>
      </div>
      </div>
      <div className="weather-forecast border border-dark border-1 p-3 m-4">
      <div className="row">
      <div className="col-3">
      <p>Tue</p>
      <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather-forecast-icon" className="image-fluid" />
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
      <p className="text-center">
        <a href="https://github.com/rarahata/vanilla-weather-app">Open-Source Code</a> by Rei Arahata
      </p>
      </div>
    </div>
  )}else{
    return form;
  }
}