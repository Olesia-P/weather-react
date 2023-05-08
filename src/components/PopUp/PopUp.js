import React from "react";
import css from "./PopUp.module.scss";

export default function PopUp({ setPopUp, onClose, globalErrorText }) {
  return (
    <div className={css.overlay}>
      <div className={css.card}>
        <div
          onClick={() => {
            setPopUp(false);
            onClose("");
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
