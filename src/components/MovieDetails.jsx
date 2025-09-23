import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetails.css';

const API_KEY = '39157edae74e186e763a6488c397962a'; 
const API_BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
const BACKDROP_BASE_URL = 'https://image.tmdb.org/t/p/w1280';

const MovieDetails = () => {
    const { id, type } = useParams(); // 'type' pode ser 'movie' ou 'tv'

    const [details, setDetails] = useState(null);
    const [seasons, setSeasons] = useState([]);
    const [trailers, setTrailers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDetails = async () => {
            setLoading(true);
            try {
                // Fetch de detalhes do filme ou série
                const detailsResponse = await fetch(`${API_BASE_URL}/${type}/${id}?api_key=${API_KEY}&language=pt-BR`);
                const detailsData = await detailsResponse.json();
                setDetails(detailsData);
                
                // Fetch de trailers
                const videosResponse = await fetch(`${API_BASE_URL}/${type}/${id}/videos?api_key=${API_KEY}&language=pt-BR`);
                const videosData = await videosResponse.json();
                const trailersList = videosData.results.filter(video => video.type === "Trailer" && video.site === "YouTube");
                setTrailers(trailersList);

                // Fetch de temporadas para séries
                if (type === 'tv') {
                    const seasonsData = detailsData.seasons.map(season => ({
                        number: season.season_number,
                        name: season.name,
                        episodes: []
                    }));
                    setSeasons(seasonsData);
                }

            } catch (error) {
                console.error("Erro ao buscar detalhes da API:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchDetails();
    }, [id, type]);

    if (loading) {
        return <div className="loading">Carregando...</div>;
    }

    if (!details) {
        return <div className="not-found">Filme/Série não encontrado.</div>;
    }

    const backdropUrl = details.backdrop_path ? `${BACKDROP_BASE_URL}${details.backdrop_path}` : 'https://placehold.co/1280x720/000000/FFFFFF?text=Fundo+indisponivel';

    return (
        <div className="movie-details-container">
            <div className="details-header" style={{ backgroundImage: `url(${backdropUrl})` }}>
                <div className="overlay">
                    <div className="details-info">
                        <h1>{details.title || details.name}</h1>
                        <p className="overview">{details.overview || 'Sinopse não disponível.'}</p>
                        {trailers.length > 0 && (
                            <div className="trailers">
                                <a href={`https://www.youtube.com/watch?v=${trailers[0].key}`} target="_blank" rel="noopener noreferrer" className="watch-button">Assistir Trailer</a>
                            </div>
                        )}
                        <div className="audio-options">
                            <span>Áudio:</span>
                            <button className="audio-button">Dublado</button>
                            <button className="audio-button">Legendado</button>
                        </div>
                    </div>
                </div>
            </div>

            {type === 'tv' && seasons.length > 0 && (
                <div className="seasons-container">
                    <h2>Temporadas</h2>
                    {seasons.map(season => (
                        <div key={season.number} className="season-item">
                            <h3>{season.name}</h3>
                            {/* Aqui você pode adicionar a lógica para listar os episódios */}
                            <p></p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MovieDetails;