import React from "react";
import css from "./CitySection.module.scss";
import Input from "../Input/Input.js";
import Button from "../Button/Button.js";

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

      <div className={css.inputContainer}>
        <Input
          value={city}
          onChange={setCity}
          fontSize="S"
          placeholder="Type a city"
        />
        <Button handleSubmit={handleSubmit} theme="cold" />
      </div>
      <p>
        Last updated: {day} {hours}:{minutes}
      </p>
    </section>
  );
}
