import React from "react";
import css from "./PopUp.module.scss";

export default function PopUp({ setGlobalErrorText, globalErrorText }) {
  return (
    <div className={css.overlay}>
      <div className={css.card}>
        <div
          onClick={() => {
            setGlobalErrorText("");
          }}
          className={css.btn}
        >
          {" "}
          X{" "}
        </div>
        <div className={css.title}>{globalErrorText}</div>
      </div>
    </div>
  );
}
