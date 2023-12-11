import axios from 'axios';

const fetchMovieDetails = async movieId => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=9b4d34572252a172944be66a3c78e6d5`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details: ', error);
    throw error;
  }
};

export { fetchMovieDetails };

const fetchReviews = async movieId => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=9b4d34572252a172944be66a3c78e6d5&language=en-US&page=1`
    );
    return response.data.results;
  } catch (error) {
    console.error('Error fetching reviews', error);
    throw error;
  }
};

export { fetchReviews };

const fetchCastData = async movieId => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=9b4d34572252a172944be66a3c78e6d5&language=en-US`
    );

    const castData = response.data ? response.data.cast : [];

    return castData;
  } catch (error) {
    console.error('Error fetching cast', error);
    throw error;
  }
};
export { fetchCastData };
