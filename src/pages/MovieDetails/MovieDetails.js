import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import css from './MovieDetails.module.css';
import Cast from '../../components/Cast/Cast';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState('');
  const [showCast, setShowCast] = useState(false);
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=9b4d34572252a172944be66a3c78e6d5`
        );
        setMovieDetails(response.data);
      } catch (error) {
        console.error('Error fetching movie details: ', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  const handleCastClick = () => {
    setShowCast(!showCast);
  };

  return (
    <div className={css.movieDetailsContainer}>
      {movieDetails ? (
        <div className={css.movieInfoContainer}>
          <h1 className={css.movieTitle}>
            {movieDetails.title || movieDetails.name}
          </h1>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`}
              alt={movieDetails.title || movieDetails.name}
              className={css.moviePoster}
            />
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <div className={css.filmData}>
        <p>Release date: {movieDetails.release_date}</p>
        <p>Rating: {movieDetails.vote_average}</p>
        <p>Vote count: {movieDetails.vote_count}</p>
        <p>Overview: {movieDetails.overview}</p>
      </div>
      <div>
        <button onClick={handleCastClick}>Cast</button>
      </div>
      {showCast && <Cast movieId={movieId} />}
    </div>
  );
}
