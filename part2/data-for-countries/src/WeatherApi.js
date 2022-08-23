import axios from "axios";
import { useEffect, useState } from "react";

const WeatherApi = ({ capital }) => {
  const [weathers, setWeathers] = useState({});
  const api_key = process.env.REACT_APP_API_KEY;
  let pic;

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
  }, []);

  if (!weathers.weather) {
    <p>Loading image</p>;
  } else {
    pic = weathers.weather[0].icon;
  }

  return (
    <div>
      <h2>Weather in {weathers.name}</h2>
      {weathers.main ? <p>temperature {weathers.main.temp} Celsius</p> : null}
      <img src={`http://openweathermap.org/img/wn/${pic}.png`} alt="weather" />
      {weathers.wind ? <p>wind {weathers.wind.speed} m/s</p> : null}
    </div>
  );
};

export default WeatherApi;
