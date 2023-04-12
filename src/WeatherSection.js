import React from "react";
import "./WeatherSection.css";
import Icons from "./Icons.js";

export default function WeatherSection({ weather }) {
  const { temperature, humidity, description, wind, icon } = weather;

  return (
    <section className="WeatherSection">
      <ul>
        <li>{Math.round(temperature)}°C</li>
        <li>{humidity}%</li>
      </ul>
      <i>
        <Icons icon={icon} />
      </i>
      <ul>
        <li>{description}</li>
        <li>Wind: {Math.round(wind)}m/h</li>
      </ul>
    </section>
  );
}
