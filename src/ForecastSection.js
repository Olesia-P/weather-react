import React, { useState, useEffect } from "react";
import "./ForecastSection.css";
import Forecast from "./Forecast.js";
import axios from "axios";

export default function ForecastSection({ city }) {
  const [forecast, setForecast] = useState("");

  function handleForecast(response) {
    console.log(response.data);

    // setForecast(response);
  }

  function searchForecast() {
    const key = "f34eafbe5b20fo4443a0a3et0b481f5f";
    const url = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${key}&units=metric`;
    axios.get(url).then(handleForecast);
  }

  useEffect(() => {
    searchForecast();
    // eslint-disable-next-line
  }, []);

  console.log(forecast);
  return (
    <section className="ForecastSection">
      <ul>
        {/* <Forecast forecast={forecast} day={1} /> */}
        {/* <Forecast forecast={forecast} day={2} />
        <Forecast forecast={forecast} day={3} />
        <Forecast forecast={forecast} day={4} />
        <Forecast forecast={forecast} day={5} />
        <Forecast forecast={forecast} day={6} /> */}
      </ul>
    </section>
  );
}
