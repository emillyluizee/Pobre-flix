import React from 'react';
import './MovieList.css';
import MovieCard from './MovieCard.jsx';

const MovieList = ({ title, movies }) => {
  return (
    <div className="movie-list-container">
      <h2 className="movie-list-title">{title}</h2>
      <div className="movie-cards-wrapper">
        {movies.map(movie => (
          <MovieCard key={movie.id} imageUrl={movie.imageUrl} title={movie.title} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
