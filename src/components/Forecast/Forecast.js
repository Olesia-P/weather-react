import React, { useContext } from "react";
import css from "./Forecast.module.scss";
import Icons from "../Icons/Icons.js";
import { AppContext } from "../../App";
// import MyIcons from "../MyIcons/MyIcons.js";

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
      <div>
        <Icons icon={icon} size={50} />
        {/* <MyIcons icon={icon} size={50} /> */}
      </div>
      <div className={css.maxTemp}>
        {showTemp(units, Math.round(maxTemp))}°{units}
      </div>
      <div>
        {" "}
        {showTemp(units, Math.round(minTemp))}°{units}
      </div>
    </div>
  );
}
