import React from "react";
import "./WeatherSection.css";

export default function WeatherSection({ weather }) {
  const { temperature, humidity, icon, icon_description, description, wind } =
    weather;

  return (
    <section className="WeatherSection">
      <ul>
        <li>{temperature}°C</li>
        <li>{humidity} 60%</li>
      </ul>
      <i>
        <img src={icon} alt={icon_description} />
      </i>
      <ul>
        <li>{description}</li>
        <li>Wind: {wind}m/h</li>
      </ul>
    </section>
  );
}
