import React from "react";
import "./WeatherSection.css";
import Icons from "./Icons.js";
import Temperature from "./Temperature.js";

export default function WeatherSection({ weather }) {
  const { temperature, humidity, description, wind, icon } = weather;

  return (
    <section className="WeatherSection">
      <ul>
        <li className="temperature">
          <Temperature temperature={temperature} />
        </li>
        <li>{description}</li>
        <li>Humidity: {humidity}%</li>

        <li>Wind: {Math.round(wind)} km/h</li>
      </ul>
      <i>
        <Icons icon={icon} size={140} />
      </i>
    </section>
  );
}
