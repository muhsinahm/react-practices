import { useState } from "react";
import countries from "../../Data/Data";

const Dropdown = () => {
  const [country, setCounty] = useState("");

  const onOptionChange = (e) => {
    setCounty(e.target.value);
    console.log("Selected Country", e.target.value);
  };

  return (
    <div>
      <select value={country} onChange={onOptionChange}>
        <option value="">Select a country</option>
        {countries.map((data, index) => {
          return (
            <option key={index} value={index}>
              {data?.name}
            </option>
          );
        })}
      </select>

      <select>
        {countries[country]?.cities.map((data, index) => {
          return (
            <option key={index} value={index}>
              {data}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Dropdown;
