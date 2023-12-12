import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export default function Navigation() {
  const [isHomeActive, setIsHomeActive] = useState(false);
  const [isMoviesActive, setIsMoviesActive] = useState(false);

  const handleHomeClick = () => {
    setIsHomeActive(true);
    setIsMoviesActive(false);
  };
  const handleMoviesClick = () => {
    setIsHomeActive(false);
    setIsMoviesActive(true);
  };

  return (
    <nav className={css.container}>
      <NavLink
        to="/"
        className={isHomeActive ? css.navLinkActive : css.navLink}
        onClick={() => handleHomeClick()}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={isMoviesActive ? css.navLinkActive : css.navLink}
        onClick={() => handleMoviesClick()}
      >
        Movies
      </NavLink>
    </nav>
  );
}
