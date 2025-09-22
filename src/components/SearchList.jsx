import React from 'react';
import MovieCard from './MovieCard.jsx';
import './SearchList.css';

const SearchList = ({ title, movies }) => {
  return (
    <div className="search-list-container">
      <h2 className="search-list-title">{title}</h2>
      <div className="search-cards-grid">
        {movies.map(movie => (
          <div className="movie-card-container" key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchList;