
import React, { useState } from "react";

const SearchForm = ({ onCityChange }) => {
  const [inputValue, setInputValue] = useState("Madrid");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onCityChange(inputValue);
      setInputValue(""); 
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;