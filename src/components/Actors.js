import React from "react";
import { actors } from "../data";

function Actors() {
  const actorList = actors.map(actor =>{
    const movieList = actor.movies.map(movie => <li key={movie}>{movie}</li>)
    return <div key={actor.name}>
      <h3>{actor.name}</h3>
      <p>Movies</p>
      <ul>
        {movieList}
      </ul>
    </div>
  })
  return <div>
      <h1>Actors Page</h1>
    {actorList}
    </div>;
}

export default Actors;
