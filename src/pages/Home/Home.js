import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import css from './Home.module.css';

export default function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/trending/movie/day?api_key=9b4d34572252a172944be66a3c78e6d5'
        );
        setTrendingMovies(response.data.results);
      } catch (error) {
        console.log('Error fetching trending movies:', error);
      }
    };
    fetchTrendingMovies();
  }, []);
  return (
    <div className={css.movieListContainer}>
      <h1 className={css.movieListTitle}>Trending Movies Today</h1>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id} className={css.movieListItem}>
            <Link to={`/movies/${movie.id}`} className={css.movieLink}>
              {movie.title || movie.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
