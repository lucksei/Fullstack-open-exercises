import { useState, useEffect } from "react";

import weatherService from "./../services/weather.jsx";

const WeatherInfo = ({ country }) => {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    weatherService
      .getWeather(country.latlng[0], country.latlng[1])
      .then((data) => setWeather(data));
  }, []);
  return (
    <div>
      <div>
        <span>Temperature: </span>
        <span>{weather?.main.temp} Celsius</span>
      </div>
      <img src={weatherService.getImageUrl(weather?.weather[0].icon)} />
      <div>
        <span>Wind: </span>
        <span>{weather?.wind.speed} m/s</span>
      </div>
    </div>
  );
};
const CountryInfo = ({ country }) => {
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
      <h3>Weather in {country.capital}</h3>
      <WeatherInfo country={country} />
    </div>
  );
};

const ShowButton = ({ country, setCountryText }) => {
  const handleShowButtonClick = () => {
    setCountryText(country.name.common);
  };

  return (
    <button type="button" onClick={() => handleShowButtonClick()}>
      Show
    </button>
  );
};
const Results = ({ countryText, setCountryText, countries }) => {
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
          <div key={country.name.common}>
            <span>{country.name.common}</span>
            <ShowButton country={country} setCountryText={setCountryText} />
          </div>
        ))}
      </div>
    );
  }

  // Return if exactly one match
  if (filteredCountries.length == 1) {
    return <CountryInfo country={filteredCountries[0]} />;
  }
};

// Helper that checks if the substring exists inside the string.
// Returns a bool with either true or false
const isSubstring = (string, substring) => {
  return string.indexOf(substring, 0) === -1 ? false : true;
};

export default Results;
