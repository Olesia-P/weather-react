import React from "react";
import cx from "classnames";
import "./Temperature.css";

export default function Temperature({
  temperature,
  units,
  setUnits,
  showTemp,
}) {
  console.log(temperature);
  return (
    <span>
      {showTemp(units, temperature)}
      {"° "}
      <span className="Temperature">
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
