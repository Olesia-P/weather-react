import React from "react";
import "./WeatherSection.css";

export default function WeatherSection(weather) {
  return (
    <section className="WeatherSection">
      <ul>
        <li>{weather.temperature}°C</li>
        <li>{weather.humidity} 60%</li>
      </ul>
      <icon>
        <img src={weather.icon} alt={weather.icon_description} />
      </icon>
      <ul>
        <li>{weather.description}</li>
        <li>Wind: {weather.wind}m/h</li>
      </ul>
    </section>
  );
}
