import React from "react";

export default function Input(city, setCity, handleSubmit) {
  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
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
  );
}
