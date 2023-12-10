import React from 'react';
import css from './ButtonGoBack.module.css';

const ButtonGoBack = () => {
  const handleGoBack = () => {
    window.history.back();
  };
  return (
    <button className={css.btnGoBack} onClick={handleGoBack}>
      Go back
    </button>
  );
};

export default ButtonGoBack;
