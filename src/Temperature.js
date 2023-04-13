import React, { useState } from "react";
import "./Temperature.css";

export default function Temperature({ temperature }) {
  const [units, setUnits] = useState(Math.round(temperature));

  if (units === Math.round(temperature)) {
    return (
      <span>
        {units}
        {"° "}
        <span className="Temperature">
          {" "}
          <button className="clicked">C</button>/
          <button
            onClick={() => setUnits(Math.round((9 / 5) * temperature + 32))}
          >
            F
          </button>
        </span>
      </span>
    );
  } else {
    return (
      <span>
        {units}
        {"° "}
        <span className="Temperature">
          <button onClick={() => setUnits(Math.round(temperature))}>C</button>/
          <button className="clicked">F</button>
        </span>
      </span>
    );
  }
}
