import { useState, useEffect } from "react";
import axios from "axios";
import CountrySearch from "./CountrySearch";

function App() {
  const [countries, setCountries] = useState([]);
  const [filterSearch, setFilterSearch] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);
  //console.log("COUNTRIES", countries);

  const filterCountry = countries.filter((country) =>
    country.name.common.toLowerCase().includes(filterSearch.toLowerCase())
  );
  // console.log("FILTERcountry", filterCountry);

  return (
    <>
      find countries <input onChange={(e) => setFilterSearch(e.target.value)} />
      <CountrySearch
        filterCountry={filterCountry}
        setFilterSearch={setFilterSearch}
      />
    </>
  );
}

export default App;
