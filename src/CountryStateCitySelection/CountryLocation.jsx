import React, { useState } from "react";
import { Data } from "./Data";
const CountryLocation = () => {
  const [countrySearch, setCountrySearch] = useState("");
  const [selectedCountry, SetSelectedCountry] = useState("");
const[selectedState,setSelectedState]=useState("");
const [selectedCity, setSelectedCity] = useState("");


const country = Object.keys(Data);
console.log(country);

  const filteredCountry = Object.keys(Data).filter((c) =>
    c.toLowerCase().includes(countrySearch.toLowerCase()),
  );
 
//   console.log(filteredCountry);
  const handleSelect = (c) => {
    SetSelectedCountry(c);
    setCountrySearch("");
    setSelectedState("");
      setSelectedCity("");
     
   
    };


  const handleStateSelect = (e) => {
    setSelectedState(e.target.value);
    setSelectedCity("");
  }

  const handleCitySelect = (e) => {
    setSelectedCity(e.target.value);
   
  }

  const handleReset = () => {
    setSelectedCity("");
    setSelectedState("");
    setSelectedCity("");
    setCountrySearch("");
  }

  
  return (
    <>

    <h1>Location Selector</h1>
      <input
        type="search"
        value={countrySearch}
        onChange={(e) => setCountrySearch(e.target.value)}
        placeholder="search the country"
      ></input>
      {countrySearch !== "" && (
        <ul>
          {filteredCountry.map((c) => (
            <li key={c} onClick={() => handleSelect(c)}>
              {c}
            </li>
          ))}
        </ul>
      )}

      <select value={selectedState} onChange={handleStateSelect} disabled={!selectedCountry}>
        <option value="">Select State</option>
        {selectedCountry && Object.keys(Data[selectedCountry]).map((s)=>(
            <option key={s} value={s}>{s}</option>)
          )
        }
      </select>


      <select name="" id="" onChange={handleCitySelect} disabled={!selectedState}>
        <option value="">Select City</option>
        {selectedState && Data[selectedCountry][selectedState].map((c)=> (
          <option key={c} value={c}>{c}</option>
        ))}

      </select>

      {selectedCountry && selectedState && selectedCity && (
        <div>
          <h4>Location Details</h4>
          <p>Country : {selectedCountry}</p>
          <p>State : {selectedState}</p>
          <p>City : {selectedCity}</p>
        </div>
      )}

      <button onClick={handleReset}>Reset</button>
    
    </>
  );
};

export default CountryLocation;