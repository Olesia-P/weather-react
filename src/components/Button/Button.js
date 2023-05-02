import React from "react";
import css from "./Button.module.scss";
import cx from "classnames";

export default function Button({ handleSubmit, theme }) {
  return (
    <div className={cx(css.Button, css[theme])} onClick={handleSubmit}>
      Search
    </div>
  );
}
