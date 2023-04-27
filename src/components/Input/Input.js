import React, { useState, useEffect } from "react";

export default function Input(value, onChange) {
  const [inputValue, setInputValue] = useState("value");

  useEffect(() => {
    if (inputValue !== value) onChange(value);
  }, [value]);

  return (
    <input
      type="text"
      placeholder="Type a city..."
      autoComplete="off"
      onChange={(event) => setInputValue(event.target.value)}
      value={inputValue}
    />
  );
}
