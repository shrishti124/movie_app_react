import React, { useState, useEffect } from 'react';
import MovieList from "./MovieList";
import NavBar from './NavBar';
import NowPlaying from './NowPlaying';


const Homepage = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  // calling themoviedb API 
  const searchMovie = async (searchTerm) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=7b642aed2489a8f6bfc80d04a2421e1c&language=en-US&query=${searchTerm}&page=1&include_adult=false`;

    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.results) {
      setMovies(responseJson.results);
    }
  };

  useEffect(() => {
    searchMovie(search);
  }, [search]);

  return (
    <>
      <div className="app-container">
        <NavBar search={search} setSearch={setSearch} />
      </div>

      <div className='container-fluid movie-app'>

        <div className="results">
          <h1>{movies.length ? `Viewing ${movies.length} results for "${search}"` : null}</h1>
        </div>

        <div className='row'>
          <MovieList movies={movies} />
        </div>

        <br />

        <div className="title-one">
          <h1 className="now-playing">Now Playing</h1>
        </div>


        <div className='row d-flex mt-4 mb-4'>
          <NowPlaying />
        </div>
      </div>
    </>
  );
};

export default Homepage;
