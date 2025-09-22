import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    onSearch(value); // Chama a função de busca no componente pai (App.jsx)
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Buscar filmes, séries..."
        value={query}
        onChange={handleInputChange}
        className="search-input"
      />
      <span className="search-icon">🔍</span>
    </div>
  );
};

export default SearchBar;