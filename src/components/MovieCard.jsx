import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <>
      <img src={movie.imageUrl} alt={movie.title} />
    </>
  );
};

export default MovieCard;