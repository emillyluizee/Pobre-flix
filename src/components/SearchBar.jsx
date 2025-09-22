import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Pesquisar filmes..."
        value={query}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;