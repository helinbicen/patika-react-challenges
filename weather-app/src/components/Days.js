import axios from "axios";
import React, { useEffect } from "react";
import { useWeather } from "../context/WeatherContext";

function Days() {
  const { city, days, weatherData, setWeatherData } = useWeather();
  useEffect(() => {
    const getData = () => {
      axios(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${city.latitude}&lon=${city.longitude}&units=metric&appid=${"8be19b6a48a45b9aaab8467d00a2787b"}`
      )
        .then((res) => setWeatherData(res.data.daily))
        .catch((err) => console.log(err));
    };
    getData();
    
  }, [city, setWeatherData]);

  return (
    <div className="days-container">
      {weatherData.map((item, index) => {
        return (
            
          <div className="day" key={index}>
         
            <div className="day-title">
              <span>{days[new Date(item.dt * 1000).getDay()]}</span>
            </div>
            <img
              className="day-img"
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt={item.weather[0].description}
              title={item.weather[0].description}
            />
            <div className="day-deg">
              <span className="tmp-high">
                {Math.round(item.temp["max"])}
                &deg;
              </span>
              <span>
                {Math.round(item.temp["min"])}
                &deg;
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Days;