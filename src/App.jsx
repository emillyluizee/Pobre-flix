import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import FeaturedMovie from './components/FeaturedMovie.jsx';
import MovieList from './components/MovieList.jsx';
import SearchBar from './components/SearchBar.jsx';
import SearchScreen from './components/SearchScreen.jsx';
import './styles.css';

// Substitua 'SUA_CHAVE_AQUI' pela sua chave de API real do TMDB
const API_KEY = '39157edae74e186e763a6488c397962a'; 
const API_BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [listTitle, setListTitle] = useState('');

  // Fetch inicial para as listas principais
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const popularResponse = await fetch(`${API_BASE_URL}/movie/popular?api_key=${API_KEY}&language=pt-BR`);
        const popularData = await popularResponse.json();
        setPopularMovies(popularData.results.map(movie => ({
          title: movie.title,
          imageUrl: movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : 'https://placehold.co/500x750/000000/FFFFFF?text=Imagem+nao+disponivel',
          id: movie.id
        })));

        const topRatedResponse = await fetch(`${API_BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=pt-BR`);
        const topRatedData = await topRatedResponse.json();
        setTopRatedMovies(topRatedData.results.map(movie => ({
          title: movie.title,
          imageUrl: movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : 'https://placehold.co/500x750/000000/FFFFFF?text=Imagem+nao+disponivel',
          id: movie.id
        })));

        const trendingResponse = await fetch(`${API_BASE_URL}/trending/movie/week?api_key=${API_KEY}&language=pt-BR`);
        const trendingData = await trendingResponse.json();
        setTrendingMovies(trendingData.results.map(movie => ({
          title: movie.title,
          imageUrl: movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : 'https://placehold.co/500x750/000000/FFFFFF?text=Imagem+nao+disponivel',
          id: movie.id
        })));
        
      } catch (error) {
        console.error("Erro ao buscar filmes da API:", error);
      }
    };
    fetchMovies();
  }, []);

  const goToSearchScreen = () => {
    setCurrentScreen('search');
    setSearchResults([]); 
  };

  const goToHomeScreen = () => {
    setCurrentScreen('home');
    setSearchResults([]);
  };

  const handleSearch = async (query) => {
    if (query.length > 0) {
      setCurrentScreen('search');
      setListTitle(`Resultados da Busca por "${query}"`);
      try {
        const searchResponse = await fetch(`${API_BASE_URL}/search/movie?api_key=${API_KEY}&language=pt-BR&query=${encodeURIComponent(query)}`);
        const searchData = await searchResponse.json();
        const results = searchData.results.map(movie => ({
          title: movie.title,
          imageUrl: movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : 'https://placehold.co/500x750/000000/FFFFFF?text=Imagem+nao+disponivel',
          id: movie.id
        }));
        setSearchResults(results);
      } catch (error) {
        console.error("Erro ao buscar resultados da API:", error);
        setSearchResults([]);
      }
    } else {
      setSearchResults([]);
      setListTitle('');
    }
  };

  const handleGenreSearch = async (genreId, genreName) => {
    setCurrentScreen('search');
    setListTitle(`Filmes de ${genreName}`);
    try {
      const response = await fetch(`${API_BASE_URL}/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=${genreId}`);
      const data = await response.json();
      const results = data.results.map(movie => ({
        title: movie.title,
        imageUrl: movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : 'https://placehold.co/500x750/000000/FFFFFF?text=Imagem+nao+disponivel',
        id: movie.id
      }));
      setSearchResults(results);
    } catch (error) {
        console.error("Erro ao buscar filmes por gênero:", error);
        setSearchResults([]);
    }
  };

  return (
    <div className="app">
      <Header onSearchClick={goToSearchScreen} onHomeClick={goToHomeScreen} />
      
      {currentScreen === 'home' && (
        <>
          <FeaturedMovie />
          <div className="content">
            <MovieList title="Minha Lista" movies={trendingMovies.slice(0, 5)} />
            <MovieList title="Em Alta" movies={popularMovies.slice(0, 5)} />
            <MovieList title="Populares na Pobre-flix" movies={topRatedMovies.slice(0, 5)} />
          </div>
        </>
      )}

      {currentScreen === 'search' && (
        <>
          <SearchBar onSearch={handleSearch} />
          {searchResults.length > 0 ? (
            <MovieList title={listTitle} movies={searchResults} />
          ) : (
            <SearchScreen onGenreClick={handleGenreSearch} />
          )}
        </>
      )}
    </div>
  );
};

export default App;