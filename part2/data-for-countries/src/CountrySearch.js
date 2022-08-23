import React from "react";
import WeatherApi from "./WeatherApi";

const CountrySearch = ({ filterCountry, setFilterSearch }) => {
  // console.log(filterCountry.length);
  // const [display, setDisplay] = useState(false);
  const buttonShow = (e) => {
    setFilterSearch(e.target.value);
  };

  if (filterCountry.length >= 10) {
    return <p>Too many matches, specify another filter</p>;
  } else if (filterCountry.length === 1) {
    return (
      <>
        {filterCountry.map((country, index) => (
          <div key={index}>
            <h1>{country.name.common}</h1>
            <div>capital {country.capital}</div>
            <div>area {country.area}</div>
            <h2>languages:</h2>
            <div>
              {Object.values(country.languages).map((lang) => (
                <li key={lang + 1}>{lang}</li>
              ))}
            </div>
            <div>
              <img src={country.flags.png} alt="flag" />
            </div>
            <WeatherApi capital={country.capital} />
          </div>
        ))}
      </>
    );
  } else {
    return (
      <>
        {filterCountry.map((country, index) => (
          <li key={index}>
            {country.name.common}
            <button value={country.name.common} onClick={buttonShow}>
              show
            </button>
          </li>
        ))}
      </>
    );
  }
};
export default CountrySearch;
