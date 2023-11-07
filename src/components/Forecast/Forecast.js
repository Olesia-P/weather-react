import React, { useContext } from "react";
import css from "./Forecast.module.scss";
import Icons from "../Icons/Icons.js";
import { AppContext } from "../../App";

export default function Forecast({ forecastData, day }) {
  const { showTemp, units } = useContext(AppContext);

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
    <div className={css.Forecast}>
      <div>{specificDay}</div>
      <div className={css.iconWrap}>
        <Icons icon={icon} size={50} />
      </div>
      <div className={css.maxTemp}>
        {showTemp(units, Math.round(maxTemp))}°{units}
      </div>
      <div className={css.minTemp}>
        {" "}
        {showTemp(units, Math.round(minTemp))}°{units}
      </div>
    </div>
  );
}
