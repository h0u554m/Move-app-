import React from "react";
import MovieCard from "../MovieCard";
import { Link } from "react-router-dom";

const Movie = (props) => {
  //props = {movies}
  // movieId = props.match.params.movieId
  // list of Movies and find the movie by the id
  const movies = props.movies; // array of movies
  const id = Number(props.match.params.movieId)
  console.log(id);
  let film;
  movies.forEach((element) => {
    if (element.id ===id) {
      console.log(element);
      film = element;
    }
  });
  return (
    <div className="container">
      <MovieCard key={film.id} movies={film} />
      <Link to="/" className="btn">
        Back to Home Page
      </Link>
    </div>
  );
};

export default Movie;
