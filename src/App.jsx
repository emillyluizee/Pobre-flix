// src/App.jsx

import React from 'react';
import Header from './components/Header.jsx';
import FeaturedMovie from './components/FeaturedMovie';
import MovieList from './components/MovieList';
import './App.css';

// Importe as imagens dos filmes. Você deve colocar suas imagens na pasta `src/assets`.
import luciferPoster from './assets/lucifer.jpg';
import bridgertonPoster from './assets/bridgerton.jpg';
import alertaVermelhoPoster from './assets/alerta-vermelho.jpg';
import divergentPoster from './assets/divergent.jpg';
import crepusculoPoster from './assets/crepusculo.jpg';
import faultStarsPoster from './assets/fault-stars.jpg';
import matildaPoster from './assets/maltida.jpg';
import originalsPoster from './assets/originals.jpg';
import vampireDiariesPoster from './assets/vampire-diaries.jpg';
import supernaturalPoster from './assets/supernatural.jpg';
import prettyLittleLiarsPoster from './assets/pretty-little-liars.jpg';
import teenWolfPoster from './assets/teen-wolf.jpg';
import wednesdayPoster from './assets/wednesday.jpg';
import strangerThingsPoster from './assets/stranger-things.jpg';
import umbrellaAcademyPoster from './assets/umbrella-academy.jpg';

// Dados dos filmes para cada lista
const minhaLista = [
  { imageUrl: luciferPoster, title: 'Lucifer' },
  { imageUrl: bridgertonPoster, title: 'Bridgerton' },
  { imageUrl: alertaVermelhoPoster, title: 'Alerta Vermelho' },
  { imageUrl: divergentPoster, title: 'Divergente' },
  { imageUrl: crepusculoPoster, title: 'Crepúsculo' },
];

const emAlta = [
  { imageUrl: faultStarsPoster, title: 'A Culpa é das Estrelas' },
  { imageUrl: matildaPoster, title: 'Matilda' },
  { imageUrl: originalsPoster, title: 'The Originals' },
  { imageUrl: vampireDiariesPoster, title: 'The Vampire Diaries' },
  { imageUrl: supernaturalPoster, title: 'Supernatural' },
];

const populares = [
  { imageUrl: prettyLittleLiarsPoster, title: 'Pretty Little Liars' },
  { imageUrl: teenWolfPoster, title: 'Teen Wolf' },
  { imageUrl: wednesdayPoster, title: 'Wandinha' },
  { imageUrl: strangerThingsPoster, title: 'Stranger Things' },
  { imageUrl: umbrellaAcademyPoster, title: 'The Umbrella Academy' },
];

const App = () => {
  return (
    <div className="app">
      <Header />
      <FeaturedMovie />
      <div className="content">
        <MovieList title="Minha Lista" movies={minhaLista} />
        <MovieList title="Em Alta" movies={emAlta} />
        <MovieList title="Populares na Pobre-flix" movies={populares} />
      </div>
    </div>
  );
};

export default App;