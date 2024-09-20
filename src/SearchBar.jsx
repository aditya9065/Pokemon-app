import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleSearch = (event) => {
    onSearch(event.target.value);
  };

  return (
    <input 
      type="text" 
      placeholder="Search Pokémon..." 
      onChange={handleSearch} 
      className="search-bar" 
    />
  );
};

export default SearchBar;
