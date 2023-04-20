import React from "react";
import "./CitySection.css";

export default function CitySection({ setCity, city, handleSubmit, weather }) {
  function updateCity(event) {
    setCity(event.target.value);
  }

  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const minutes = weather.date.getMinutes();
  const hours = weather.date.getHours();
  const day = weekDays[weather.date.getDay()];
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }

  return (
    <section className="CitySection">
      <h1>{weather.city}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type a city..."
          autoComplete="off"
          onChange={updateCity}
          value={city}
        />
        <button type="submit">Search</button>
      </form>
      <p>
        Last updated: {day} {hours}:{minutes}
      </p>
    </section>
  );
}
