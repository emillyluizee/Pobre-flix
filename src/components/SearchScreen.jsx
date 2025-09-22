import React from 'react';
import './SearchScreen.css';

const genres = [
  'ROMANCE',
  'AÇÃO',
  'ANIMAÇÃO',
  'AVENTURA',
  'TERROR',
  'BASEADOS EM FATOS REAIS',
  'COMÉDIA ROMÂNTICA',
  'PARA ASSISTIR COM A FAMÍLIA',
];

const SearchScreen = () => {
  return (
    <div className="search-screen-container">
      <div className="buttons-grid">
        {genres.map((genre, index) => (
          <button key={index} className="genre-button">
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchScreen;