import React, { useState } from "react";

const CountryAndStateSelection = () => {
  const data = [
    {
      country: "India",
      states: ["Tamil Nadu","Kerala","Uttar Pradesh","Maharashtra","Karnataka"],
    },
    {
      country: "United States",
      states: ["California", "Texas", "Florida", "New York", "Illinois"],
    },
    {
      country: "Canada",
      states: ["Ontario", "Quebec", "British Columbia", "Alberta", "Manitoba"],
    },
    {
      country: "Australia",
      states: ["New South Wales","Victoria","Queensland","Western Australia","Tasmania"],
    },
    {
      country: "Germany",
      states: ["Bavaria", "Berlin", "Hamburg", "Saxony", "Hesse"],
    },
     {
      country: "Brazil",
      states: ["São Paulo","Rio de Janeiro","Bahia","Minas Gerais","Paraná"],
    },
    {
      country: "Mexico",
      states: ["Jalisco", "Nuevo León", "Puebla", "Yucatán", "Oaxaca"],
    },
    {
      country: "Japan",
      states: ["Tokyo", "Osaka", "Hokkaido", "Kyoto", "Fukuoka"],
    },
    {
      country: "Nigeria",
      states: ["Lagos", "Kano", "Oyo", "Rivers", "Kaduna"],
    },
    {
      country: "France",
      states: ["Île-de-France","Provence-Alpes-Côte d'Azur","Occitanie","Normandy","Brittany",],
    }
  ];

  const [countryData, setCountryData] = useState("");
  const [states, setStates] = useState([]);

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setCountryData(selectedCountry);

    const filteredCountry = data.filter(
      (item) => item.country === selectedCountry
    );

    setStates(filteredCountry[0]?.states || []);
  };

  return (
    <div>
      <h1>Country and State Selection Page</h1>

      <label>Country : </label>
      <select value={countryData} onChange={handleCountryChange}>
        <option value="">Select</option>
        {data.map((item) => (
          <option key={item.country} value={item.country}>
            {item.country}
          </option>
        ))}
      </select>

      <br /><br />

      <label>State : </label>
      <select>
        <option value="">Select</option>
        {states.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountryAndStateSelection;

