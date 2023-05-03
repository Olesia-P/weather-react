import React from "react";
import css from "./Button.module.scss";
import cx from "classnames";

export default function Button({ handleSubmit, theme, buttonText, value }) {
  return (
    <div
      className={cx(css.Button, css[theme], value === "" && css.disabled)}
      onClick={handleSubmit}
    >
      {buttonText}
    </div>
  );
}
