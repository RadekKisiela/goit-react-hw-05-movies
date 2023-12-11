import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './Cast.module.css';
import { fetchCastData } from 'components/FetchFunctions/FetchFunctions';

const Cast = () => {
  const { movieId } = useParams();
  const [castData, setCastData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const castData = await fetchCastData(movieId);

        if (castData) {
          setCastData(castData);
        } else {
          console.error('Error fetching cast: castData is undefined');
        }
      } catch (error) {
        console.error('Error fetching cast', error);
      }
    };
    fetchData();
  }, [movieId]);
  return (
    <div className={css.castContainer}>
      <ul className={css.castList}>
        {castData.map(({ id, name, profile_path, character }) => (
          <li key={id} className={css.castItem}>
            {' '}
            <NavLink to={`/movies/${movieId}/cast`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={name}
                className={css.castImage}
              />
              <p className={css.castName}>{name}</p>
              <p className={css.castCharacter}>Character: {character}</p>{' '}
            </NavLink>
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
