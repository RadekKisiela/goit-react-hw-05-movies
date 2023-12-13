import React, { useEffect, useState } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import css from './MovieDetails.module.css';
import { fetchMovieDetails } from 'components/FetchFunctions/FetchFunctions';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState('');
  const [showCast, setShowCast] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMovieDetails(movieId, 'movie');
        setMovieDetails(data);
      } catch (error) {
        console.error('Error fetching movie details: ', error);
      }
    };

    fetchData();
  }, [movieId]);

  const handleCastClick = () => {
    setShowCast(!showCast);
    setShowReviews(false);
  };

  const handleReviewsClick = () => {
    setShowReviews(!showReviews);
    setShowCast(false);
  };

  const location = useLocation();
  const from = location.state?.form || '/';

  return (
    <div className={css.movieDetailsContainer}>
      <Link to={from} className={css.linkGoBack}>
        Go Back
      </Link>
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
        <Link to={'cast'} className={css.button} onClick={handleCastClick}>
          Cast
        </Link>
        <Link
          to={'reviews'}
          className={css.button}
          onClick={handleReviewsClick}
        >
          Reviews
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
