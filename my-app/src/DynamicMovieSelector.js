import React, {useState} from 'react';

export default function DynamicMovieSelector({movies, whenMovieSelect}) {
  const [selectedMovie, setSelectedMovie] = useState('');

  const whenSelect = (event) => {
    const movieId = event.target.value;
    setSelectedMovie(movieId);
    whenMovieSelect(movieId);
  };

  return (
    <select value={selectedMovie} onChange={whenSelect}>
      <option value="">Select a movie</option>
      {movies.map((movie) => (
        <option value={movie.id}>{movie.title}</option>
      ))}
    </select>
  );
};