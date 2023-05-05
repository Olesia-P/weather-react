import React from "react";
import css from "./Button.module.scss";
import cx from "classnames";

export default function Button({
  handleSubmit,
  theme,
  buttonText,
  value,
  size,
  clicked,
}) {
  return (
    <div
      className={cx(
        css.Button,
        css[theme],
        css[size],
        value === "" && css.disabled,
        clicked && css.clicked
      )}
      onClick={handleSubmit}
    >
      {buttonText}
    </div>
  );
}
