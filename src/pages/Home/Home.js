import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
    <div>
      <h1>Trending Movies Today</h1>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title || movie.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
