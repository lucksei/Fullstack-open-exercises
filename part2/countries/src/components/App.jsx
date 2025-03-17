import { useState, useEffect } from "react";
import axios from "axios";

const isSubstring = (string, substring) => {
  return string.indexOf(substring, 0) === -1 ? false : true;
};
const Results = ({ countryText, countries }) => {
  // Return if countries are loading
  if (countries === null) {
    return <div>Loading Content...</div>;
  }

  const filteredCountries = countries.filter((country) => {
    return isSubstring(
      country.name.common.toLowerCase(),
      countryText.toLowerCase()
    );
  });

  // Return if more than 10 countries
  if (filteredCountries.length > 10) {
    return <div>Too many matches, specify another filter</div>;
  }
  // Return if more than 1 countries but less or equal to 10
  if (filteredCountries.length > 1) {
    return (
      <div>
        {filteredCountries.map((country) => (
          <div key={country.name.common}>{country.name.common}</div>
        ))}
      </div>
    );
  }

  // Return if exactly one match
  if (filteredCountries.length == 1) {
    const country = filteredCountries[0];
    return (
      <div>
        <h2>{country.name.common}</h2>
        <div>Capital: {country.capital}</div>
        <div>Area: {country.area}</div>
        <h3>Languages</h3>
        <ul>
          {Object.entries(country.languages).map(([key, lang]) => (
            <div key={key}>{lang}</div>
          ))}
        </ul>
        <img src={country.flags.png} alt={country.flags.alt} />
      </div>
    );
  }
};

const App = () => {
  const [countries, setCountries] = useState(null);
  const [countryText, setCountryText] = useState("");
  const handleCountryTextChange = (event) => {
    setCountryText(event.target.value);
  };

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => {
        setCountries(response.data);
        console.log("response.data", response.data);
      });
  }, []);

  return (
    <div>
      <span>find countries </span>
      <input
        type="text"
        value={countryText}
        onChange={handleCountryTextChange}
      />
      <Results countryText={countryText} countries={countries}></Results>
    </div>
  );
};
export default App;
