import { useState, useEffect } from "react";

import countriesServices from "./../services/countries.jsx";

import Results from "./Results.jsx";

const App = () => {
  const [countries, setCountries] = useState(null);
  const [countryText, setCountryText] = useState("");
  const handleCountryTextChange = (event) => {
    setCountryText(event.target.value);
  };

  useEffect(() => {
    countriesServices.getAllCountries().then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <span>find countries </span>
      <input
        type="text"
        value={countryText}
        onChange={handleCountryTextChange}
      />
      <Results
        countryText={countryText}
        setCountryText={setCountryText}
        countries={countries}
      ></Results>
    </div>
  );
};
export default App;
