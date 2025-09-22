import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/details/${movie.type}/${movie.id}`}>
      <img src={movie.imageUrl} alt={movie.title} />
    </Link>
  );
};

export default MovieCard;