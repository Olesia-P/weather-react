import css from "./App.module.scss";
import CitySection from "./components/CitySection/CitySection.js";
import WeatherSection from "./components//WeatherSection/WeatherSection.js";
import ForecastSection from "./components//ForecastSection/ForecastSection.js";
import PopUp from "./components/PopUp/PopUp.js";
import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const AppContext = createContext(null);

function App() {
  const [loaded, setLoaded] = useState(false);
  const [city, setCity] = useState("Kyiv");
  const [weather, setWeather] = useState("");
  const [units, setUnits] = useState("C");
  const [globalErrorText, setGlobalErrorText] = useState("");

  function handleError(error) {
    if (error) {
      setGlobalErrorText(error.message);
    }
  }

  function showTemp(units, temp) {
    if (units === "C") {
      return Math.round(temp);
    }
    if (units === "F") {
      return Math.round((9 / 5) * temp + 32);
    }
  }

  function showWeather(response) {
    if (response.data.status === "not_found") {
      setWeather((state) => ({ ...state, error: "error_text" }));
      setGlobalErrorText(
        "City is not found. Please try again. Watch out for spelling mistakes."
      );
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

  return (
    <AppContext.Provider value={{ showTemp, units }}>
      <div className={css.App}>
        {loaded && (
          <>
            {globalErrorText !== "" && (
              <PopUp
                setGlobalErrorText={setGlobalErrorText}
                globalErrorText={globalErrorText}
              />
            )}

            <main>
              <CitySection
                city={city}
                setCity={setCity}
                handleSubmit={handleSubmit}
                weather={weather}
              />
              <WeatherSection
                weather={weather}
                units={units}
                setUnits={setUnits}
                showTemp={showTemp}
              />
              <ForecastSection
                city={city}
                weather={weather}
                handleError={handleError}
              />
              <footer>
                <a href="https://github.com/Olesia-P/weather-react">
                  Open-source code
                </a>{" "}
                by Olesia Pryhun
              </footer>
            </main>
          </>
        )}
        {loaded === false && <div className={css.loading}>Loading</div>}
      </div>
    </AppContext.Provider>
  );
}

export default App;
