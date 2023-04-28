import React, { useState, useEffect } from "react";
import css from "./Input.module.scss";
import cx from "classnames";

export default function Input({ value, onChange, fontSize }) {
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
    <input
      type="text"
      placeholder="Type a city..."
      autoComplete="off"
      onChange={(event) => handleChange(event.target.value)}
      value={inputValue}
      className={cx(
        css.Input,
        fontSize === "S" && css.sizeS,
        fontSize === "M" && css.sizeM,
        fontSize === "L" && css.sizeL
      )}
    />
  );
}
