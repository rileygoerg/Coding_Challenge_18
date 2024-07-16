import React, {useState} from 'react';

export default function RateMovieButton({movieId}){
  const [rating, setRating] = useState(null);
  const [message, setMessage] = useState('');

  const movieRating = (rate) => {
    setRating(rate);
    setMessage(`You rated this movie ${rate} stars.`);
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((stars) => (
        <button key={stars} onClick={() => movieRating(stars)}>
          {stars} Star{stars > 1 && 's'}
        </button>
      ))}
      {message && <p>{message}</p>}
    </div>
  );
};