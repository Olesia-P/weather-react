import "./App.css";
import CitySection from "./components/CitySection/CitySection.js";
import WeatherSection from "./components//WeatherSection/WeatherSection.js";
import ForecastSection from "./components//ForecastSection/ForecastSection.js";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [loaded, setLoaded] = useState(false);
  const [city, setCity] = useState("Kyiv");
  const [weather, setWeather] = useState("");

  function showWeather(response) {
    if (response.data.status === "not_found") {
      setWeather((state) => ({ ...state, error: "error_text" }));
    } else {
      setWeather({
        city: response.data.city,
        temperature: response.data.temperature.current,
        description: response.data.condition.description,
        humidity: response.data.temperature.humidity,
        wind: response.data.wind.speed,
        date: new Date(response.data.time * 1000),
        icon: response.data.condition.icon,
      });
      setLoaded(true);
    }
  }

  function search() {
    const key = "f34eafbe5b20fo4443a0a3et0b481f5f";
    const url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=metric`;
    axios.get(url).then(showWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  useEffect(() => {
    search();
    // eslint-disable-next-line
  }, []);

  if (loaded) {
    return (
      <div className="App">
        <main>
          <CitySection
            city={city}
            setCity={setCity}
            handleSubmit={handleSubmit}
            weather={weather}
          />
          <WeatherSection weather={weather} />
          <ForecastSection city={city} weather={weather} />
          <footer>
            <a href="https://github.com/Olesia-P/weather-react">
              Open-source code{" "}
            </a>
            by Olesia Pryhun
          </footer>
        </main>
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
}

export default App;
