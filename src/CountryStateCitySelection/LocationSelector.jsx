import React, { useState } from "react";

const locationData = {
  USA: {
    California: ["Los Angeles", "San Francisco", "San Diego", "Sacramento"],
    Texas: ["Houston", "Austin", "Dallas", "San Antonio"],
    "New York": ["New York City", "Buffalo", "Rochester", "Albany"],
  },
  India: {
    Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik"],
    Karnataka: ["Bangalore", "Mysore", "Mangalore", "Hubli"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli"],
  },
  Canada: {
    Ontario: ["Toronto", "Ottawa", "Mississauga", "Hamilton"],
    "British Columbia": ["Vancouver", "Victoria", "Surrey", "Burnaby"],
    Quebec: ["Montreal", "Quebec City", "Laval", "Gatineau"],
  },
  Australia: {
    "New South Wales": ["Sydney", "Newcastle", "Wollongong", "Gosford"],
    Victoria: ["Melbourne", "Geelong", "Ballarat", "Bendigo"],
    Queensland: ["Brisbane", "Gold Coast", "Townsville", "Cairns"],
  },
};

const LocationSelector = () => {
  const countries = Object.keys(locationData);

  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  // Filter countries based on search
  const filteredCountries = countries.filter((c) =>
    c.toLowerCase().includes(search.toLowerCase())
  );

  const handleCountrySelect = (c) => {
    setCountry(c);
    setState("");
    setCity("");
    setSearch("");
  };

  const handleStateChange = (e) => {
    setState(e.target.value);
    setCity("");
  };

  const handleReset = () => {
    setSearch("");
    setCountry("");
    setState("");
    setCity("");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h2>Location Selection</h2>

      {/* STEP 1: Country Search */}
      <label>Search Country : </label>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Type country name..."
      />

      {search && (
        <ul style={{ border: "1px solid #ccc", padding: "5px" }}>
          {filteredCountries.map((c) => (
            <li
              key={c}
              style={{ cursor: "pointer" }}
              onClick={() => handleCountrySelect(c)}
            >
              {c}
            </li>
          ))}
        </ul>
      )}

      <br />

      {/* STEP 2: State */}
      <label>State : </label>
      <select disabled={!country} value={state} onChange={handleStateChange}>
        <option value="">Select State</option>
        {country &&
          Object.keys(locationData[country]).map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
      </select>

      <br /><br />

      {/* STEP 3: City */}
      <label>City : </label>
      <select
        disabled={!state}
        value={city}
        onChange={(e) => setCity(e.target.value)}
      >
        <option value="">Select City</option>
        {state &&
          locationData[country][state].map((ct) => (
            <option key={ct} value={ct}>
              {ct}
            </option>
          ))}
      </select>

      <br /><br />

      {/* SUMMARY */}
      {country && state && city && (
        <div style={{ border: "1px solid green", padding: "10px" }}>
          <h4>Selected Location</h4>
          <p><b>Country:</b> {country}</p>
          <p><b>State:</b> {state}</p>
          <p><b>City:</b> {city}</p>
        </div>
      )}

      <br />

      {/* RESET */}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default LocationSelector;
