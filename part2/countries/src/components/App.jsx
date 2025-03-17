import { useState, useEffect } from "react";
import axios from "axios";

import Results from "./Results.jsx";

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
      <Results
        countryText={countryText}
        setCountryText={setCountryText}
        countries={countries}
      ></Results>
    </div>
  );
};
export default App;
