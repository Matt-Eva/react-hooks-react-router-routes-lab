import React from "react";
import { directors } from "../data";

function Directors() {
  const directorList = directors.map(director =>{
    const movieList = director.movies.map(movie => <li key={movie}>{movie}</li>)
    return <div key={director.name}>
        <h3>Name: {director.name}</h3>
        <p>Movies:</p>
        <ul>
          {movieList}
        </ul>
      </div>
  })
  return <div>
    <h1>Directors Page</h1>
    {directorList}
    </div>;
}

export default Directors;
