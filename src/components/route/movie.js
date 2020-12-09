import React from 'react';
import MovieCard from "../MovieCard"






const Movie = (el) => {
 
  return (
  
    <div className="container">
      <MovieCard key={el.id} film={el} />
    </div>
   
        )
      
   
  };

export default Movie;