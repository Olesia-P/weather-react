import React from "react";
import css from "./Temperature.module.scss";
import Button from "../Button/Button.js";

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
        <Button
          handleSubmit={() => {
            setUnits("C");
          }}
          theme="warm"
          buttonText="C"
          value="yes"
          size="small"
          clicked={units === "C"}
        />
        /
        <Button
          handleSubmit={() => {
            setUnits("F");
          }}
          theme="warm"
          buttonText="F"
          value="yes"
          size="small"
          clicked={units === "F"}
        />
      </span>
    </span>
  );
}
