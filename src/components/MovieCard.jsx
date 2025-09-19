// src/components/MovieCard.jsx

import React from 'react';
import './MovieCard.css';

const MovieCard = ({ imageUrl, title }) => {
  return (
    <div className="movie-card">
      <img src={imageUrl} alt={title} />
    </div>
  );
};

export default MovieCard;