import React, { useState, useEffect } from "react";
import css from "./ForecastSection.module.scss";
import Forecast from "../Forecast/Forecast.js";
import axios from "axios";

export default function ForecastSection({
  city,
  weather,
  units,
  showTemp,
  handleError,
}) {
  const [forecastData, setForecastData] = useState("");
  const [loaded, setLoaded] = useState(false);

  const days = [
    { day: "1" },
    { day: "2" },
    { day: "3" },
    { day: "4" },
    { day: "5" },
    { day: "6" },
  ];

  function handleForecast(response) {
    setForecastData(response);
    setLoaded(true);
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
      <section className={css.ForecastSection}>
        {days.map((it) => (
          <Forecast key={it.day} forecastData={forecastData} day={it.day} />
        ))}
      </section>
    );
  } else {
    return <div className={css.loading}>Loading...</div>;
  }
}
