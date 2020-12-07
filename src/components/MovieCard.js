import React from "react";
import StarRating from "./StarRating";

const MovieCard = ({ film }) => {
  return (
    <div className="movie-card">
      <img src={film.image} alt={film.name} />

      <h3> {film.name} </h3>
      <p>{film.genre}</p>
      <p> {film.date}<b> {film.runTime}</b> </p>
      <StarRating movieRating={film.rating} />
    </div>
  );
};


export default MovieCard;