import React from "react";
import StarRating from "./StarRating";
import {Link} from "react-router-dom";



const MovieCard = ({movies}) => {

  return (
    <div className="movie-card">
      <img src={movies.image} alt={movies.name} />

      <h3> {movies.name} </h3>
      <p>{movies.genre}</p>
      <p> {movies.date}<b> {movies.runTime}</b> </p>
      <StarRating movieRating={movies.rating} />
      <Link className = "btn" to = {`/movies/${movies.id}`}>More</Link>

    </div>
  );
};


export default MovieCard;