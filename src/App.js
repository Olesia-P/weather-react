import "./App.css";
import CitySection from "./CitySection.js";
import WeatherSection from "./WeatherSection.js";

function App() {
  return (
    <body className="App">
      <main>
        <CitySection />
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
}

export default App;
