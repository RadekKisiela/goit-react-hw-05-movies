import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import css from './MovieDetails.module.css';
import Cast from '../../components/Cast/Cast';
import Reviews from '../../components/Reviews/Reviews';
import ButtonGoBack from '../../components/ButtonGoBack/ButtonGoBack';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState('');
  const [showCast, setShowCast] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
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
    setShowReviews(false);
  };

  const handleReviewsClick = () => {
    setShowReviews(!showReviews);
    setShowCast(false);
  };

  return (
    <div className={css.movieDetailsContainer}>
      <ButtonGoBack />
      {movieDetails ? (
        <div className={css.movieInfoContainer}>
          <div className={css.movieContent}>
            <img
              src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`}
              alt={movieDetails.title || movieDetails.name}
              className={css.moviePoster}
            />{' '}
            <div className={css.filmData}>
              {' '}
              <h1 className={css.movieTitle}>
                {movieDetails.title || movieDetails.name}
              </h1>
              <p>Release date: {movieDetails.release_date}</p>
              <p>Rating: {movieDetails.vote_average}</p>
              <p>Overview: {movieDetails.overview}</p>
              <p>
                Genres:{' '}
                {movieDetails.genres &&
                  movieDetails.genres.map(genre => genre.name).join(', ')}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      <div className={css.buttonGroup}>
        <button className={css.button} onClick={handleCastClick}>
          Cast
        </button>
        <button className={css.button} onClick={handleReviewsClick}>
          Reviews
        </button>
      </div>
      {showCast && <Cast movieId={movieId} />}
      {showReviews && <Reviews movieId={movieId} />}
    </div>
  );
}
