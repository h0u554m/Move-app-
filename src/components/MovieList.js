import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies && movies[0] ? (
        movies.map((movie) => <MovieCard key={movie.id} film={movie} />)
      ) : (
        <h1>Oups No result :'(</h1>
      )}
    </div>
  );
};

export default MovieList;