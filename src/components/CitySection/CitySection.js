import React from "react";
import "./CitySection.css";
import Input from "../Input/Input.js";

export default function CitySection({ setCity, city, handleSubmit, weather }) {
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let minutes = weather.date.getMinutes();
  let hours = weather.date.getHours();
  const day = weekDays[weather.date.getDay()];
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }

  return (
    <section className="CitySection">
      {weather.error && <h1>City not found</h1>}
      {!weather.error && <h1>{weather.city}</h1>}
      <form onSubmit={handleSubmit}>
        <Input value={value} onChange={onChange} />

        <button type="submit">Search</button>
      </form>
      <p>
        Last updated: {day} {hours}:{minutes}
      </p>
    </section>
  );
}
