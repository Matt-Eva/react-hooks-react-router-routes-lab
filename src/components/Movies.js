import React from "react";
import { movies } from "../data";

function Movies() {
  const listedMovies = movies.map(movie => {
  const genres = movie.genres.map(genre => <li key={genre}>{genre}</li>)
  return (<div key={movie.title}>
      <h3>Name: {movie.title}</h3>
      <p>Time: {movie.time} Minutes</p>
      <p>Genres:</p>
      <ul>
        {genres}
      </ul>
    </div>)
  })
  
  return <div>
      <h1>Movies Page</h1>
      {listedMovies}
    </div>;
}

export default Movies;
