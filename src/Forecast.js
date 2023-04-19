import React from "react";
import "./Forecast.css";

export default function Forecast({ forecastData, day }) {
  console.log(forecastData);
  let singleForecast = {
    minTemp: forecastData.data.daily[day].temperature.minimum,
    maxTemp: forecastData.data.daily[day].temperature.maximum,
    time: forecastData.data.daily[day].time,
    icon: forecastData.data.daily[day].condition.icon,
  };
  const { minTemp, maxTemp, time, icon } = singleForecast;

  return (
    <li className="Forecast">
      <div>{time}</div>
      <div>{icon}</div>
      <div>{minTemp}°</div>
      <div>{maxTemp}°</div>
    </li>
  );
}
