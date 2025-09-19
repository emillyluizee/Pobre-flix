// src/components/MovieList.jsx

import React from 'react';
import MovieCard from './MovieCard';
import './MovieList.css';

const MovieList = ({ title, movies }) => {
  return (
    <div className="movie-list-section">
      <h2>{title}</h2>
      <div className="movie-list-container">
        {movies.map((movie, index) => (
          <MovieCard key={index} imageUrl={movie.imageUrl} title={movie.title} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;