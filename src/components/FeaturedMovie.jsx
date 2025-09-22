// src/components/FeaturedMovie.jsx

import React from 'react';
import './FeaturedMovie.css';

const FeaturedMovie = () => {
    // Dados de exemplo para o filme de destaque
    const movie = {
        title: 'LUCIFER',
        description: 'conta a história de **Lucifer Morningstar**, o Senhor do Inferno, que, cansado da sua vida, abdica do trono e vai viver para Los Angeles, onde se torna dono de uma boate de luxo e começa a colaborar com a detetive Chloe Decker, ajudando a resolver crimes e a combater seres sobrenaturais, enquanto lida com a sua própria família e a sua jornada de autodescoberta.',
        imageUrl: 'https://s2.glbimg.com/UBnybHLru0HDEq-_NYxlFWeSbQM=/top/e.glbimg.com/og/ed/f/original/2021/08/04/image_AgxCsTX.png'
    };

    return (
        <div className="featured-movie">
            <div className="content-container">
                <div className="movie-info">
                    <h1 className="title">{movie.title}</h1>
                    <p className="description" dangerouslySetInnerHTML={{ __html: movie.description }}></p>
                </div>
                <div className="movie-cast-image">
                    <img src={movie.imageUrl} alt={`Imagem do elenco de ${movie.title}`} />
                </div>
            </div>
        </div>
    );
};

export default FeaturedMovie;