import React, { useEffect } from "react";
import MovieCard from "./MovieCard";
// import SearchIcon from './search.svg';

const API_URL = "http://www.omdbapi.com?apikey=5b302ad3";

const movie1 = {
  Title: "Superman, Spiderman or Batman",
  Year: "2011",
  imdbID: "tt2084949",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg",
};

const MoviesCards = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value="Superman"
          onChange={() => {}}
        />
        <img src="{SearchIcon}" alt="search" onClick={() => {}} />
      </div>
      <div className="container">
        <MovieCard movie1={movie1} />
      </div>
    </div>
  );
};

export default MoviesCards;
