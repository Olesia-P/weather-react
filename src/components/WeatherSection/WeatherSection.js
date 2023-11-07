import React from "react";
import css from "./WeatherSection.module.scss";
import Icons from "../Icons/Icons.js";
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
        <li className={css.text}>{description}</li>
        <li className={css.text}>Humidity: {humidity}%</li>

        <li className={css.text}>Wind: {Math.round(wind)} km/h</li>
      </ul>
      <i className={css.iconWrap}>
        <Icons icon={icon} size={140} />
      </i>
    </section>
  );
}
