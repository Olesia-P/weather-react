import React from "react";
import "./CitySection.css";

export default function CitySection() {
  return (
    <section className="CitySection">
      <h1>Kyiv</h1>
      <form>
        <input type="text" placeholder="Type a city..." autocomplete="off" />
        <button type="submit">Search</button>
      </form>
      <p>Last updated: Tuesday 10:00</p>
    </section>
  );
}
