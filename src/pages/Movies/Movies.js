import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import css from './Movies.module.css';

export default function Movies() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  // const [selectedMovie] = useState(null);

  const handleSearchInputChange = event => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = async event => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=9b4d34572252a172944be66a3c78e6d5&query=${searchQuery}`
      );
      setSearchResults(response.data.results);
    } catch (error) {
      console.error('Error fetching movies: ', error);
    }
  };
  return (
    <div className={css.container}>
      <form className={css.formContainer} onSubmit={handleSearchSubmit}>
        <input
          className={css.inputField}
          type="text"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <button className={css.submitButton} type="submit">
          Search
        </button>
      </form>
      <ul className={css.movieList}>
        {searchResults.map(movie => (
          <li key={movie.id} className={css.movieItem}>
            <Link to={`/movies/${movie.id}`} className={css.movieLink}>
              <h2 className={css.movieTitle}>{movie.title || movie.name}</h2>
            </Link>
          </li>
        ))}
      </ul>
      {/* {selectedMovie && (
        <div>
          <h2>{selectedMovie.title || selectedMovie.name}</h2>
          <img
            src={`https://image.tmdb.org/t/p/w300${selectedMovie.poster_path}`}
            alt={selectedMovie.title || selectedMovie.name}
            className={css.moviePoster}
          />
          <p>{selectedMovie.overview}</p>
        </div>
      )} */}
    </div>
  );
}
