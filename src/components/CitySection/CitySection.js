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
      <h1>{weather.city}</h1>
      <div className={css.inputContainer}>
        <div className={css.input}>
          <Input
            value={city}
            onChange={setCity}
            fontSize="S"
            placeholder="Type a city"
          />
        </div>
        <div className={css.button}>
          <Button
            handleSubmit={handleSubmit}
            theme="warm"
            buttonText="Search"
            value={city}
          />
        </div>
      </div>
      <p>
        Last updated: {day} {hours}:{minutes}
      </p>
    </section>
  );
}
