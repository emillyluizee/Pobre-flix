import React from 'react';
import './FeaturedMovie.css';
// Por segurança, para não depender de um arquivo local, usaremos uma imagem de exemplo.
const featuredImageUrl = 'https://s2.glbimg.com/UBnybHLru0HDEq-_NYxlFWeSbQM=/top/e.glbimg.com/og/ed/f/original/2021/08/04/image_AgxCsTX.png'; 

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