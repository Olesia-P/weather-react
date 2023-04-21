import React, { useState, useEffect } from "react";
import "./ForecastSection.css";
import Forecast from "./Forecast.js";
import axios from "axios";

export default function ForecastSection({ city, weather }) {
  const [forecastData, setForecastData] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState("");
  const [errorStatus, setErrorStatus] = useState(false);

  function handleForecast(response) {
    setForecastData(response);
    setLoaded(true);
  }

  function handleError(error) {
    console.log(error);
    if (error) {
      setErrorStatus(true);
      setError(error.message);
    }
  }

  useEffect(() => {
    function searchForecast() {
      const key = "f34eafbe5b20fo4443a0a3et0b481f5f";
      const url = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${key}&units=metric`;
      axios.get(url).then(handleForecast).catch(handleError);
    }
    searchForecast();
  }, [weather.city]);

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
  } else if (errorStatus) {
    return <h1>{error}</h1>;
  } else {
    return <div>Loading...</div>;
  }
}
