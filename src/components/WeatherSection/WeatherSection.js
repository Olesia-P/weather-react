import React from "react";
import css from "./WeatherSection.module.scss";
// import Icons from "../Icons/Icons.js";
import MyIcons from "../MyIcons/MyIcons.js";
import Temperature from "../Temperature/Temperature.js";

export default function WeatherSection({ weather, units, setUnits, showTemp }) {
  const { temperature, humidity, description, wind, icon } = weather;

  return (
    <section className={css.WeatherSection}>
      <ul>
        <li className={css.temperature}>
          <Temperature
            temperature={temperature}
            units={units}
            setUnits={setUnits}
            showTemp={showTemp}
          />
        </li>
        <li>{description}</li>
        <li>Humidity: {humidity}%</li>

        <li>Wind: {Math.round(wind)} km/h</li>
      </ul>
      <i>
        {/* <Icons icon={icon} size={140} /> */}
        <div style={{ margin: "2rem" }}>
          <MyIcons icon={icon} />
        </div>
      </i>
    </section>
  );
}
