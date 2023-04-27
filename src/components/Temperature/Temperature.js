import React from "react";
import cx from "classnames";
import css from "./Temperature.module.css";

export default function Temperature({
  temperature,
  units,
  setUnits,
  showTemp,
}) {
  return (
    <span>
      {showTemp(units, temperature)}
      {"° "}
      <span className={css.Temperature}>
        {" "}
        <button
          className={cx(units === "C" && "clicked")}
          onClick={() => {
            setUnits("C");
          }}
        >
          C
        </button>
        /
        <button
          className={cx(units === "F" && "clicked")}
          onClick={() => {
            setUnits("F");
          }}
        >
          F
        </button>
      </span>
    </span>
  );
}
