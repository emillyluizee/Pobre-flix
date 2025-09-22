import React, { useState } from 'react';
import Header from './components/Header.jsx';
import FeaturedMovie from './components/FeaturedMovie.jsx';
import MovieList from './components/MovieList.jsx';
import SearchBar from './components/SearchBar.jsx';
import SearchScreen from './components/SearchScreen.jsx';
import './App.css';

// Importe as imagens e dados dos filmes (como já fizemos antes)
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

// Combine todas as suas listas em uma única lista para facilitar a pesquisa
const allMovies = [
  { imageUrl: luciferPoster, title: 'Lucifer' },
  { imageUrl: bridgertonPoster, title: 'Bridgerton' },
  { imageUrl: alertaVermelhoPoster, title: 'Alerta Vermelho' },
  { imageUrl: divergentPoster, title: 'Divergente' },
  { imageUrl: crepusculoPoster, title: 'Crepúsculo' },
  { imageUrl: faultStarsPoster, title: 'A Culpa é das Estrelas' },
  { imageUrl: matildaPoster, title: 'Matilda' },
  { imageUrl: originalsPoster, title: 'The Originals' },
  { imageUrl: vampireDiariesPoster, title: 'The Vampire Diaries' },
  { imageUrl: supernaturalPoster, title: 'Supernatural' },
  { imageUrl: prettyLittleLiarsPoster, title: 'Pretty Little Liars' },
  { imageUrl: teenWolfPoster, title: 'Teen Wolf' },
  { imageUrl: wednesdayPoster, title: 'Wandinha' },
  { imageUrl: strangerThingsPoster, title: 'Stranger Things' },
  { imageUrl: umbrellaAcademyPoster, title: 'The Umbrella Academy' },
];

const App = () => {
  // Estado para controlar qual tela mostrar: 'home' ou 'search'
  const [currentScreen, setCurrentScreen] = useState('home');
  const [filteredMovies, setFilteredMovies] = useState([]);

  // Função para ir para a tela de pesquisa
  const goToSearchScreen = () => {
    setCurrentScreen('search');
    // Limpa a pesquisa anterior ao ir para a tela de busca
    setFilteredMovies([]); 
  };

  // Função para ir para a tela inicial
  const goToHomeScreen = () => {
    setCurrentScreen('home');
    setFilteredMovies([]);
  };

  const handleSearch = (query) => {
    if (query.length > 0) {
      setCurrentScreen('search');
      const filtered = allMovies.filter(movie =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredMovies(filtered);
    } else {
      setFilteredMovies([]);
    }
  };

  return (
    <div className="app">
      {/* Passe as funções de navegação para o Header */}
      <Header onSearchClick={goToSearchScreen} onHomeClick={goToHomeScreen} />

      {/* Exibição condicional da tela inicial */}
      {currentScreen === 'home' && (
        <>
          <FeaturedMovie />
          <div className="content">
            <MovieList title="Minha Lista" movies={allMovies.slice(0, 5)} />
            <MovieList title="Em Alta" movies={allMovies.slice(5, 10)} />
            <MovieList title="Populares na Pobre-flix" movies={allMovies.slice(10, 15)} />
          </div>
        </>
      )}

      {/* Exibição condicional da tela de pesquisa */}
      {currentScreen === 'search' && (
        <>
          <SearchBar onSearch={handleSearch} />
          {filteredMovies.length > 0 ? (
            <MovieList title="Resultados da Busca" movies={filteredMovies} />
          ) : (
            <SearchScreen />
          )}
        </>
      )}
    </div>
  );
};

export default App;
