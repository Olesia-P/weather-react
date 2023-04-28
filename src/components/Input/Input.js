import React, { useState, useEffect } from "react";

export default function Input({ value, onChange }) {
  const [inputValue, setInputValue] = useState(value || "");

  function handleChange(handledValue) {
    setInputValue(handledValue);
    onChange(handledValue);
  }
  useEffect(() => {
    if (inputValue !== value) {
      handleChange(value);
    }
  }, [value]);

  return (
    <input
      type="text"
      placeholder="Type a city..."
      autoComplete="off"
      onChange={(event) => handleChange(event.target.value)}
      value={inputValue}
    />
  );
}
