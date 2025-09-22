import React from 'react';
import './FeaturedMovie.css';
// Por segurança, para não depender de um arquivo local, usaremos uma imagem de exemplo.
// Se você tiver a imagem, substitua o link 'https://placehold.co/1920x500' pelo caminho '../assets/lucifer-cast.jpg'.
const featuredImageUrl = 'https://placehold.co/1920x500/000000/FFFFFF?text=Filme+em+Destaque'; 

const FeaturedMovie = () => {
  return (
    <section className="featured-movie">
      <div className="movie-info">
        <h1 className="title">LUCIFER</h1>
        <p className="description">
          Conta a história de **Lucifer Morningstar**, o Senhor do Inferno, que, cansado da sua vida, abdica do trono e vai viver para Los Angeles, onde se torna dono de uma boate de luxo e começa a colaborar com a detetive Chloe Decker, ajudando a resolver crimes e a combater seres sobrenaturais, enquanto lida com a sua própria família e a sua jornada de autodescoberta.
        </p>
      </div>
      <div className="movie-cast-image">
        <img src={featuredImageUrl} alt="Elenco de Lucifer" />
      </div>
    </section>
  );
};

export default FeaturedMovie;