
//App.js
import React, { useState } from "react";
import CountryDropdown from "./CountryDropdown";
import "./App.css";

function App() {
const [capital, setCapital] = useState("");
const countries = [
{ name: "United States", capital: "Washington, D.C." },
{ name: "India", capital: "New Delhi" },
{ name: "France", capital: "Paris" },
{ name: "Germany", capital: "Berlin" },
{ name: "Japan", capital: "Tokyo" },
];
function handleCountrySelect(countryName) {
const country = countries.find(function (c) {
return c.name === countryName;
});
setCapital(country ? country.capital : "");
}
return (
<div>
<h1>Country and Capital Finder</h1>
<CountryDropdown countries={countries}
onSelect={handleCountrySelect} />
{capital && <p>Capital: {capital}</p>}
</div>
);
}

export default App;


//App.css
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    text-align: center;
    margin: 0;
    padding: 0;
  }
  
  h1 {
    color: #333;
    margin-top: 20px;
  }
  
  div {
    max-width: 400px;
    margin: 50px auto;
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
  
  select {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }
  
  p {
    font-size: 18px;
    color: #555;
    margin-top: 15px;
    font-weight: bold;
  }

  
  //CountryDropdown.js
function CountryDropdown(props) {
    function handleChange(event) {
    props.onSelect(event.target.value);
    }
    return (
    <select onChange={handleChange}>
    <option value="">Select a Country</option>
    {props.countries.map(function (country) {
    return (
    <option key={country.name} value={country.name}>
    {country.name}
    </option>
    );
    })}
    </select>
    );
    }
    export default CountryDropdown;