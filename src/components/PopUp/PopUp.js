import React from "react";
import css from "./PopUp.module.scss";

export default function PopUp({ setPopUp, setCity }) {
  return (
    <div className={css.overlay}>
      <div className={css.card}>
        <div
          onClick={() => {
            setPopUp(false);
            setCity("");
          }}
          className={css.btn}
        >
          {" "}
          X{" "}
        </div>
        <div className={css.title}>
          City is not found. Please try again.
          <br /> Watch out for spelling mistakes.
        </div>
      </div>
    </div>
  );
}
