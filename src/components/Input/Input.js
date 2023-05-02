import React, { useState, useEffect } from "react";
import css from "./Input.module.scss";
import cx from "classnames";

export default function Input({ value, onChange, fontSize = "L" }) {
  const [inputValue, setInputValue] = useState(value || "");

  function handleChange(handledValue) {
    setInputValue(handledValue);
    onChange(handledValue);
  }
  useEffect(() => {
    if (inputValue !== value) {
      handleChange(value);
    }
    // eslint-disable-next-line
  }, [value, handleChange, inputValue]);

  return (
    <div className={cx(css.Input, css[fontSize])}>
      <input
        type="text"
        placeholder="Type a city..."
        autoComplete="off"
        onChange={(event) => handleChange(event.target.value)}
        value={inputValue}
      />
    </div>
  );
}
