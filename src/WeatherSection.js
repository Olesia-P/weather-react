import React from "react";
import "./WeatherSection.css";

export default function WeatherSection(props) {
  return (
    <section className="WeatherSection">
      <ul>
        <li>{props.temperature}°C</li>
        <li>{props.humidity} 60%</li>
      </ul>
      <icon>
        <img src={props.icon} alt={props.icon_description} />
      </icon>
      <ul>
        <li>{props.description}</li>
        <li>Wind: {props.wind}m/h</li>
      </ul>
    </section>
  );
}
