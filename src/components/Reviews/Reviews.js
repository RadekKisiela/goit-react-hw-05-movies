import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import css from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=9b4d34572252a172944be66a3c78e6d5&language=en-US&page=1`
        );
        setReviews(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.error('Error fetching reviews', error);
      }
    };
    fetchReviews();
  }, [movieId]);
  return (
    <div className={css.reviewsContainer}>
      <ul className={css.reviewsList}>
        {reviews.map(({ id, author, content }) => (
          <li key={id} className={css.reviewItem}>
            <Link to={`/movies/${movieId}/reviews`}>
              <h2 className={css.authorHeader}>Author: {author}</h2>
              <p className={css.contentParagraph}>{content}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
