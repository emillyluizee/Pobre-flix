// src/components/SearchScreen.jsx

import React from 'react';
import './SearchScreen.css';

const genres = [
  { id: 10749, name: 'ROMANCE' },
  { id: 28, name: 'AÇÃO' },
  { id: 16, name: 'ANIMAÇÃO' },
  { id: 12, name: 'AVENTURA' },
  { id: 27, name: 'TERROR' },
  { id: 99, name: 'BASEADOS EM FATOS REAIS' },
  { id: 35, name: 'COMÉDIA' },
  { id: 10751, name: 'PARA ASSISTIR COM A FAMÍLIA' },
];

const SearchScreen = ({ onGenreClick }) => {
  return (
    <div className="search-screen-container">
      <div className="buttons-grid">
        {genres.map((genre) => (
          <button
            key={genre.id}
            className="genre-button"
            onClick={() => onGenreClick(genre.id, genre.name)}
          >
            {genre.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchScreen;