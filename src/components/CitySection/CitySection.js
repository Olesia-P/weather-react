import React from "react";
import css from "./CitySection.module.css";
import Input from "../Input/Input.js";

export default function CitySection({ city, handleSubmit, weather, setCity }) {
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
    <section className={css.CitySection}>
      {weather.error && <h1>City not found</h1>}
      {!weather.error && <h1>{weather.city}</h1>}
      <form onSubmit={handleSubmit}>
        <Input value={city} onChange={setCity} />

        <button type="submit">Search</button>
      </form>
      <p>
        Last updated: {day} {hours}:{minutes}
      </p>
    </section>
  );
}
