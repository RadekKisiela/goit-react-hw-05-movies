import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import css from './MovieDetails.module.css';

export default function MovieDetails() {
  const { movieId } = useParams(null);
  const [movieDetails, setMovieDetails] = useState(null);
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

  return (
    <div className={css.movieDetailsContainer}>
      {movieDetails ? (
        <>
          <h1 className={css.movieTitle}>
            {movieDetails.title || movieDetails.name}
          </h1>
          <div className={css.movieDetailsInfo}>
            <img
              src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`}
              alt={movieDetails.title || movieDetails.name}
              className={css.moviePoster}
            />
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}