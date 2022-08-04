import React from "react";

const CountrySearch = ({ filterCountry }) => {
  // console.log(filterCountry.length);
  if (filterCountry.length >= 10) {
    return <p>Too many matches, specify another filter</p>;
  } else if (filterCountry.length === 1) {
    return (
      <>
        {filterCountry.map((country, index) => (
          <div key={index}>
            <div>
              <h1>{country.name.common}</h1>
            </div>
            <div>capital {country.capital}</div>
            <div>area {country.area}</div>
            <br />
            <div>
              <h2>languages:</h2>
            </div>
            <div>
              {Object.values(country.languages).map((lang) => (
                <li key={lang + 1}>{lang}</li>
              ))}
            </div>
            <br />
            <div>
              <img src={country.flags.png} alt="flag" />
            </div>
          </div>
        ))}
      </>
    );
  } else {
    return (
      <>
        {filterCountry.map((country, index) => (
          <li key={index}>{country.name.common}</li>
        ))}
      </>
    );
  }
};
export default CountrySearch;

//     {country.languages.map((lang) => (
// <li>{lang}</li>
//  ))}
