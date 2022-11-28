import React from "react";
import { useEffect } from "react";
import { useState } from "react";
const Weather = ({ all, temp }) => {
  const today = new Date();
  const [change, setChange] = useState(true);
  const [obj, setObj] = useState();
  const chan = () => {
    setChange(!change);
  };
  const nigth = {
    backgroundImage: 'url("https://images8.alphacoders.com/797/797935.jpg")',
  };
  const day = {
    backgroundImage: 'url("https://images3.alphacoders.com/757/757021.jpg")',
  };

  const backImg = () => {
    const state = all?.weather[0].description;
    const icon = all?.weather[0].icon;
    const obj = {};
    if (state?.includes("rain") || state?.includes("thunderstorm")) {
      if (icon.includes("d")) {
        obj.backgroundImage =
          'url("https://wallpapers.com/images/high/wooden-house-most-beautiful-rain-pu86xzh0k5iv654k.jpg")';
      } else {
        obj.backgroundImage =
          'url("https://i.ytimg.com/vi/mbE0-XeRAzc/maxresdefault.jpg")';
      }
    } else {
      if (icon?.includes("d")) {
        obj.backgroundImage =
          'url("https://images3.alphacoders.com/757/757021.jpg")';
      } else {
        obj.backgroundImage =
          'url("https://images8.alphacoders.com/797/797935.jpg")';
      }
    }
    return obj;
  };
  const result = backImg();
  return (
    <div className="mainCont" style={result}>
      <article className="card">
        <div className="time">
          <div>
            <h1>{`${all?.name}, ${all?.sys.country}`}</h1>
            <h2>{today.toDateString()}</h2>
          </div>
          <p>{today.toTimeString().slice(0, 5)}</p>
        </div>
        <div className="info">
          <div className="temperature">
            <h2>
              <span className="tempNum">
                {change ? temp?.fahrenheit : temp?.celsius}
              </span>
              <span className="fOc">{change ? " °F" : " °C"}</span>
            </h2>
            <button onClick={chan}>
              °F
              <span></span>°C
            </button>
          </div>
          <div>
            <img
              className="state"
              src={`http://openweathermap.org/img/wn/${all?.weather[0].icon}@2x.png`}
              alt="icon"
            />
            <p>{all?.weather[0].description}</p>
          </div>
        </div>
        <div className="addInfo">
          <div className="hume">
            <img
              className="icon"
              src="./src/assets/humidity.png"
              alt="humidity"
            />
            <p>{all?.main.humidity}% Humidity</p>
          </div>
          <div className="wind">
            <img className="icon" src="./src/assets/wind.png" alt="wind" />
            <p>{(all?.wind.speed * 1.852).toFixed(1)} km/h Winds</p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Weather;
