import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import css from './Reviews.module.css';
import { fetchReviews } from 'components/FetchFunctions/FetchFunctions';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reviewsData = await fetchReviews(movieId);
        setReviews(reviewsData);
      } catch (error) {
        console.error('Error fetching reviews', error);
      }
    };
    fetchData();
  }, [movieId]);
  return (
    <div className={css.reviewsContainer}>
      {reviews.length === 0 ? (
        <p>No reviews found for this movie.</p>
      ) : (
        <ul className={css.reviewsList}>
          {reviews.map(({ id, author, content }) => (
            <li key={id} className={css.reviewItem}>
              <NavLink to={`/movies/${movieId}/reviews`}>
                <h2 className={css.authorHeader}>Author: {author}</h2>
                <p className={css.contentParagraph}>{content}</p>
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
