import React from "react";
import "./Forecast.css";
import Icons from "./Icons.js";

export default function Forecast({ forecastData, day }) {
  let singleForecast = {
    minTemp: forecastData.data.daily[day].temperature.minimum,
    maxTemp: forecastData.data.daily[day].temperature.maximum,
    time: forecastData.data.daily[day].time,
    icon: forecastData.data.daily[day].condition.icon,
  };
  const { minTemp, maxTemp, time, icon } = singleForecast;

  const date = new Date(time * 1000);
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const specificDay = weekDays[date.getDay()];

  return (
    <div className="Forecast">
      <div>{specificDay}</div>
      <div>
        <Icons icon={icon} size={50} />
      </div>
      <div className="maxTemp">{Math.round(maxTemp)}°С</div>
      <div>{Math.round(minTemp)}°С</div>
    </div>
  );
}
