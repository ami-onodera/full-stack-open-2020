import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import Countries from "./components/Countries";

function App() {
  const [countries, setCountries] = useState([]);
  const [countryFilter, setCountryFilter] = useState("");
  const [hasFilter, setHasFilter] = useState(false);

  const getCountry = () => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  };

  useEffect(getCountry, []);

  const filterCountries = countries.filter((country) => {
    return country.name.toLowerCase().includes(countryFilter.toLowerCase());
  });

  const hasMatch = filterCountries.some((country) => {
    return country.name.toLowerCase() === countryFilter.toLowerCase();
  });

  let exactfilterCountries;
  if (hasMatch) {
    exactfilterCountries = filterCountries.filter((country) => {
      return country.name.toLowerCase() === countryFilter.toLowerCase();
    });
  }

  const handleChange = (event) => {
    setFilterCountry(event.target.value);

    if (event.target.value === "") setHasFilter(false);
    else setHasFilter(true);
  };

  const handleClick = (event) => {
    setFilterCountry(event.target.id);
  };

  return (
    <div>
      <h1>Data For Countries</h1>
      <Filter onChange={(event) => handleChange(event)} value={countryFilter} />
      {hasFilter && hasMatch && <Countries countries={exactfilterCountries} />}
      {hasFilter && !hasMatch && (
        <Countries
          countries={filterCountries}
          handleClick={(event) => handleClick(event)}
        />
      )}
    </div>
  );
}

export default App;
