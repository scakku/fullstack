import axios from "axios";
import { useEffect, useState } from "react";

const WeatherApi = ({ capital }) => {
  const [weathers, setWeathers] = useState();
  const api_key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q= 
    ${capital}
    &appid=${api_key}&units=metric`
      )
      .then((response) => {
        setWeathers(response.data);
      });
  }, [api_key, capital]);

  if (weathers) {
    return (
      <div>
        <h2>Weather in {weathers.name}</h2>
        <p>temperature {weathers.main.temp} Celsius</p>
        <img
          src={`http://openweathermap.org/img/wn/${weathers.weather[0].icon}.png`}
          alt="weather"
        />
        <p>wind {weathers.wind.speed} m/s</p>
      </div>
    );
  }
};

export default WeatherApi;
