import React from "react";
import "./WeatherSection.css";

export default function WeatherSection({ weather }) {
  const { temperature } = weather;
  const { humidity } = weather;
  const { icon } = weather;
  const { icon_description } = weather;
  const { description } = weather;
  const { wind } = weather;

  return (
    <section className="WeatherSection">
      <ul>
        <li>{temperature}°C</li>
        <li>{humidity} 60%</li>
      </ul>
      <icon>
        <img src={icon} alt={icon_description} />
      </icon>
      <ul>
        <li>{description}</li>
        <li>Wind: {wind}m/h</li>
      </ul>
    </section>
  );
}
