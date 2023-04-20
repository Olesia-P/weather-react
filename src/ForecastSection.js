import React, { useState, useEffect } from "react";
import "./ForecastSection.css";
import Forecast from "./Forecast.js";
import axios from "axios";

export default function ForecastSection({ city }) {
  const [forecastData, setForecastData] = useState("");
  const [loaded, setLoaded] = useState(false);

  function handleForecast(response) {
    setForecastData(response);
    setLoaded(true);
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

  if (loaded) {
    return (
      <section className="ForecastSection">
        <Forecast forecastData={forecastData} day={1} />
        <Forecast forecastData={forecastData} day={2} />
        <Forecast forecastData={forecastData} day={3} />
        <Forecast forecastData={forecastData} day={4} />
        <Forecast forecastData={forecastData} day={5} />
        <Forecast forecastData={forecastData} day={6} />
      </section>
    );
  } else {
    <div>Loading...</div>;
  }
}
