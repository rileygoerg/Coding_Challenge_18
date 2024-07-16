//U14123683
import React, { useState } from 'react';
import RateMovieButton from './RateMovieButton';
import DynamicMovieSelector from './DynamicMovieSelector';
import UploadButton from './UploadButton';
import './App.css'

const testMovies = [
  { id: 1, title: 'Movie #1' },
  { id: 2, title: 'Movie #2' },
  { id: 3, title: 'Movie #3' },
  { id: 4, title: 'Movie #4' }
];

export default function App(){
  const [selectedMovie, setSelectedMovie] = useState(null);

  const setMovie = (movieId) => {
    const movie = testMovies.find(m => m.id === parseInt(movieId));
    setSelectedMovie(movie);
  };

  return (
    <div className="toolbar">
      <h1>U14123683</h1>
      <h2>Movie Selector</h2>
      <DynamicMovieSelector movies={testMovies} whenMovieSelect={setMovie} />
      {selectedMovie && (
        <>
          <div className="movieinfo">
            <h2>{selectedMovie.title}</h2>
          </div>
          <RateMovieButton movieId={selectedMovie.id} />
        </>
      )}
      <UploadButton />
    </div>
  );
};
