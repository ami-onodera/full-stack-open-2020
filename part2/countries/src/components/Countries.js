import React from "react";
import Country from "./Country";

const Countries = ({ countries, handleClick }) => {
  const tooMuchCountries = countries.length > 10;
  const severalCountries = countries.length > 1 && countries.length <= 10;
  const oneCountry = countries.length === 1;

  const countriesList = countries.map((country) => {
    return (
      <div key={country.alpha3Code}>
        {country.name}{" "}
        <button onClick={handleClick} id={country.name}>
          Show
        </button>
      </div>
    );
  });

  return (
    <div>
      {tooMuchCountries && "Too many matches, specify another filter"}
      {severalCountries && <div>{countriesList}</div>}
      {oneCountry && <Country country={countries[0]} />}
    </div>
  );
};

export default Countries;
