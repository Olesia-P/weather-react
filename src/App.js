import "./App.css";
import CitySection from "./CitySection.js";
import WeatherSection from "./WeatherSection.js";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [loaded, setLoaded] = useState({ loaded: false });
  const [city, setCity] = useState(null);
  const [weather, setWeather] = useState(null);

  function showWeather(response) {
    setWeather({
      city: response.data.city,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon_url,
      icon_description: response.data.condition.icon,
    });
    setLoaded(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const key = "f34eafbe5b20fo4443a0a3et0b481f5f";
    const url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=metric`;
    axios.get(url).then(showWeather);
  }

  if (loaded) {
    return (
      <body className="App">
        <main>
          <CitySection
            city={city}
            setCity={setCity}
            handleSubmit={handleSubmit}
            weather={weather}
          />
          <WeatherSection />
          <footer>
            <a href="https://github.com/Olesia-P/weather-react">
              Open-source code{" "}
            </a>
            by Olesia Pryhun
          </footer>
        </main>
      </body>
    );
  } else {
    return <div>Loading</div>;
  }
}

export default App;
