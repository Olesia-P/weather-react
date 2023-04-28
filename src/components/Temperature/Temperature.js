import React from "react";
import cx from "classnames";
import css from "./Temperature.module.scss";

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
          className={cx(units === "C" && css.clicked)}
          onClick={() => {
            setUnits("C");
          }}
        >
          C
        </button>
        /
        <button
          className={cx(units === "F" && css.clicked)}
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
