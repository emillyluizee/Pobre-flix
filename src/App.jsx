import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header.jsx';
import FeaturedMovie from './components/FeaturedMovie.jsx';
import MovieList from './components/MovieList.jsx';
import SearchBar from './components/SearchBar.jsx';
import SearchScreen from './components/SearchScreen.jsx';
import SearchList from './components/SearchList.jsx';
import MovieDetails from './components/MovieDetails.jsx';
import './styles.css';

// Substitua 'SUA_CHAVE_AQUI' pela sua chave de API real do TMDB
const API_KEY = '39157edae74e186e763a6488c397962a'; 
const API_BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

// Componente Home para organizar a tela principal
const HomePage = ({ popularMovies, topRatedMovies, trendingMovies }) => {
  return (
    <>
      <FeaturedMovie />
      <div className="content">
        <MovieList title="Minha Lista" movies={trendingMovies.slice(0, 5)} />
        <MovieList title="Em Alta" movies={popularMovies.slice(0, 5)} />
        <MovieList title="Populares na Pobre-flix" movies={topRatedMovies.slice(0, 5)} />
      </div>
    </>
  );
};

// Componente Search para organizar a tela de busca
const SearchPage = ({ searchResults, listTitle, handleSearch, handleGenreSearch }) => {
  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {searchResults.length > 0 ? (
        <SearchList title={listTitle} movies={searchResults} />
      ) : (
        <SearchScreen onGenreClick={handleGenreSearch} />
      )}
    </>
  );
};

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [listTitle, setListTitle] = useState('');
  const navigate = useNavigate();

  // Fetch inicial para as listas principais
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const popularResponse = await fetch(`${API_BASE_URL}/movie/popular?api_key=${API_KEY}&language=pt-BR`);
        const popularData = await popularResponse.json();
        setPopularMovies(popularData.results.map(movie => ({
          title: movie.title,
          imageUrl: movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : 'https://placehold.co/500x750/000000/FFFFFF?text=Imagem+nao+disponivel',
          id: movie.id,
          type: 'movie'
        })));

        const topRatedResponse = await fetch(`${API_BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=pt-BR`);
        const topRatedData = await topRatedResponse.json();
        setTopRatedMovies(topRatedData.results.map(movie => ({
          title: movie.title,
          imageUrl: movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : 'https://placehold.co/500x750/000000/FFFFFF?text=Imagem+nao+disponivel',
          id: movie.id,
          type: 'movie'
        })));

        const trendingResponse = await fetch(`${API_BASE_URL}/trending/all/week?api_key=${API_KEY}&language=pt-BR`);
        const trendingData = await trendingResponse.json();
        setTrendingMovies(trendingData.results.map(item => ({
          title: item.title || item.name,
          imageUrl: item.poster_path ? `${IMAGE_BASE_URL}${item.poster_path}` : 'https://placehold.co/500x750/000000/FFFFFF?text=Imagem+nao+disponivel',
          id: item.id,
          type: item.media_type
        })));
        
      } catch (error) {
        console.error("Erro ao buscar filmes da API:", error);
      }
    };
    fetchMovies();
  }, []);

  const goToSearchScreen = () => {
    navigate('/search');
    setSearchResults([]);
  };

  const goToHomeScreen = () => {
    navigate('/');
    setSearchResults([]);
  };

  const handleSearch = async (query) => {
    if (query.length > 0) {
      setListTitle(`Resultados da Busca por "${query}"`);
      try {
        const searchResponse = await fetch(`${API_BASE_URL}/search/multi?api_key=${API_KEY}&language=pt-BR&query=${encodeURIComponent(query)}`);
        const searchData = await searchResponse.json();
        const results = searchData.results.filter(item => item.media_type !== 'person').map(item => ({
          title: item.title || item.name,
          imageUrl: item.poster_path ? `${IMAGE_BASE_URL}${item.poster_path}` : 'https://placehold.co/500x750/000000/FFFFFF?text=Imagem+nao+disponivel',
          id: item.id,
          type: item.media_type
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
    navigate('/search');
    setListTitle(`Filmes de ${genreName}`);
    try {
      const response = await fetch(`${API_BASE_URL}/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=${genreId}`);
      const data = await response.json();
      const results = data.results.map(movie => ({
        title: movie.title,
        imageUrl: movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : 'https://placehold.co/500x750/000000/FFFFFF?text=Imagem+nao+disponivel',
        id: movie.id,
        type: 'movie'
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
      <Routes>
        <Route path="/" element={<HomePage popularMovies={popularMovies} topRatedMovies={topRatedMovies} trendingMovies={trendingMovies} />} />
        <Route path="/search" element={<SearchPage searchResults={searchResults} listTitle={listTitle} handleSearch={handleSearch} handleGenreSearch={handleGenreSearch} />} />
        <Route path="/details/:type/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
};

const AppWrapper = () => (
  <HashRouter>
    <App />
  </HashRouter>
);

export default AppWrapper;