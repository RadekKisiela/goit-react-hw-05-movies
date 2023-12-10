import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [castData, setCastData] = useState([]);

  useEffect(() => {
    const fetchCastData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=9b4d34572252a172944be66a3c78e6d5&language=en-US`
        );
        setCastData(response.data.cast);
      } catch (error) {
        console.error('Error fetching cast', error);
      }
    };
    fetchCastData();
  }, [movieId]);

  return (
    <div className={css.castContainer}>
      <ul className={css.castList}>
        {castData.map(({ id, name, profile_path, character }) => (
          <li key={id} className={css.castItem}>
            {' '}
            <Link to={`/movies/${movieId}/cast`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={name}
                className={css.castImage}
              />
              <p className={css.castName}>{name}</p>
              <p className={css.castCharacter}>Character: {character}</p>{' '}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;

Cast.propTypes = {
  castData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      profile_path: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    })
  ),
};
