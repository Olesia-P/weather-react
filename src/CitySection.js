import React from "react";
import "./CitySection.css";

export default function CitySection({ setCity, city, handleSubmit, props }) {
  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <section className="CitySection">
      <h1>{props.city}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type a city..."
          autocomplete="off"
          onChange={updateCity}
        />
        <button type="submit">Search</button>
      </form>
      <p>Last updated: Tuesday 10:00</p>
    </section>
  );
}
