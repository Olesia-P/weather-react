import React from "react";

export default function Input(city, setCity) {
  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <input
      type="text"
      placeholder="Type a city..."
      autoComplete="off"
      onChange={updateCity}
      value={city}
    />
  );
}
