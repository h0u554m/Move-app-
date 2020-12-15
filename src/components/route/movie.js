import React from 'react';
import MovieCard from "../MovieCard"
import movie from "../../data"
import { Link } from 'react-router-dom';





const Movie = (props) => {

  //props = {movies}
  // movieId = props.match.params.movieId
  // list of Movies and find the movie by the id 
  const movies = props.movies // array of movies 
  const id = props.match.params.movieId
  const film = movie.filter(function (el){
    return 
  })
  return (
    
  
    <div className="container">
      <MovieCard key={film.id} film={film} />
      <Link to='/' className='btn'>
        Back to Home Page
      </Link>
      
    </div>
   
        )
      
   
  };

export default Movie;