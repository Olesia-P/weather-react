import React from "react";
import "./WeatherSection.css";

export default function WeatherSection() {
  return (
    <section className="WeatherSection">
      <ul>
        <li>10°C</li>
        <li>Humidity 60%</li>
      </ul>
      <icon>
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
          alt="Cloudy"
        />
      </icon>
      <ul>
        <li>Sunny</li>
        <li>Wind: 10m/h</li>
      </ul>
    </section>
  );
}
