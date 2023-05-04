import React, { useState, useEffect, useCallback } from "react";
import css from "./Input.module.scss";
import cx from "classnames";

export default function Input({
  value,
  onChange,
  fontSize = "L",
  placeholder,
}) {
  const [inputValue, setInputValue] = useState(value || "");

  const handleChange = useCallback(
    (handledValue) => {
      setInputValue(handledValue);
      onChange(handledValue);
    },
    [onChange]
  );

  useEffect(() => {
    if (inputValue !== value) {
      handleChange(value);
    }
  }, [value, inputValue, handleChange]);

  return (
    <div className={cx(css.Input, css[fontSize])}>
      <input
        type="text"
        placeholder={placeholder}
        autoComplete="off"
        onChange={(event) => handleChange(event.target.value)}
        value={inputValue}
      />
    </div>
  );
}
