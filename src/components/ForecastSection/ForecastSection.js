import React, { useState, useEffect } from "react";
import "./ForecastSection.css";
import Forecast from "../Forecast/Forecast.js";
import axios from "axios";

export default function ForecastSection({ city, weather, units, showTemp }) {
  const [forecastData, setForecastData] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState("");
  const [errorStatus, setErrorStatus] = useState(false);

  function handleForecast(response) {
    setForecastData(response);
    setLoaded(true);
  }

  function handleError(error) {
    if (error) {
      setErrorStatus(true);
      setError(error.message);
    }
  }

  function searchForecast() {
    const key = "f34eafbe5b20fo4443a0a3et0b481f5f";
    const url = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${key}&units=metric`;
    axios.get(url).then(handleForecast).catch(handleError);
  }

  useEffect(() => {
    searchForecast();
    // eslint-disable-next-line
  }, [weather.city]);

  if (loaded) {
    return (
      <section className="ForecastSection">
        <Forecast
          forecastData={forecastData}
          showTemp={showTemp}
          day={1}
          units={units}
        />
        <Forecast
          forecastData={forecastData}
          showTemp={showTemp}
          day={2}
          units={units}
        />
        <Forecast
          forecastData={forecastData}
          showTemp={showTemp}
          day={3}
          units={units}
        />
        <Forecast
          forecastData={forecastData}
          showTemp={showTemp}
          day={4}
          units={units}
        />
        <Forecast
          forecastData={forecastData}
          showTemp={showTemp}
          day={5}
          units={units}
        />
        <Forecast
          forecastData={forecastData}
          showTemp={showTemp}
          day={6}
          units={units}
        />
      </section>
    );
  } else if (errorStatus) {
    return <h1>{error}</h1>;
  } else {
    return <div>Loading...</div>;
  }
}
