import React, { useEffect, useState } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import css from './MovieDetails.module.css';
import Cast from '../../components/Cast/Cast';
import Reviews from '../../components/Reviews/Reviews';
import { fetchMovieDetails } from 'components/FetchFunctions/FetchFunctions';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState('');
  const [showCast, setShowCast] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
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
    setShowCast(prevShowCast => {
      if (prevShowCast && activeSection === 'cast') {
        setActiveSection(null);
        return false;
      } else {
        setShowReviews(false);
        setActiveSection('cast');
        return true;
      }
    });
  };

  const handleReviewsClick = () => {
    setShowReviews(prevShowReviews => {
      if (prevShowReviews && activeSection === 'reviews') {
        setActiveSection(null);
        return false;
      } else {
        setShowCast(false);
        setActiveSection('reviews');
        return true;
      }
    });
  };
  const location = useLocation();
  const from = location?.state?.from || '/';

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
          </div>{' '}
        </div>
      ) : (
        <p>Loading...</p>
      )}

      <div className={css.linkGroup}>
        <Link to={`cast`} className={css.link} onMouseDown={handleCastClick}>
          Cast
        </Link>
        <Link
          to={`reviews`}
          className={css.link}
          onMouseDown={handleReviewsClick}
        >
          Reviews
        </Link>
      </div>
      {showCast && <Cast movieId={movieId} />}
      {showReviews && <Reviews movieId={movieId} />}
      <Outlet />
    </div>
  );
}
