import "./App.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Weather from "./components/Weather";
import Loader from "./components/Loader";

function App() {
  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [weather, setWeather] = useState();
  const [temp, setTemp] = useState();
  const success = (pos) => {
    setLat(pos.coords.latitude);
    setLong(pos.coords.longitude);
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);
  useEffect(() => {
    if (lat && long) {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=c912a15d413557b9052b543a7e70aa32`;
      axios
        .get(url)
        .then((ans) => {
          setWeather(ans.data);
          const fahrenheit = (
            (ans.data.main.temp - 273.15) * (9 / 5) +
            32
          ).toFixed(1);
          const celsius = ((fahrenheit - 32) * (5 / 9)).toFixed(1);
          setTemp({ fahrenheit, celsius });
        })
        .catch((err) => console.log(err));
    }
  }, [lat, long]);

  return (
    <div className="App">
      {weather ? <Weather all={weather} temp={temp} /> : <Loader />}
    </div>
  );
}

export default App;
