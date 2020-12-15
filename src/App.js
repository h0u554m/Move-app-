import React, { useState } from "react";
import  moviesData  from "./data";
import Search from "./components/Search";
import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";
import Movie from "./components/route/movie"
import Error from "./components/route/error"
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function App() {
  
  const [movies, setMovies] = useState(moviesData);
  const [search, setSearch] = useState("");
  const [rate, setRate] = useState(1);


  const addMovie = (newMovie) => setMovies([...movies, newMovie]);


  const handleSearch = (event) => setSearch(event.target.value);


  const handleRating = (rate) => setRate(rate);


  const filterMovie = () => {
    return movies.filter(
      (movie) =>
        movie.name.toLowerCase().includes(search.toLowerCase().trim()) &&
        movie.rating >= rate
    );
  };

  return (
    <Router>
      <Search
        search={search}
        rate={rate}
        handleRating={handleRating}
        handleSearch={handleSearch}
      />
      <Switch>
      <Route exact path="/">
      <div className = "container">
      <MovieList movies={filterMovie()} />
      <AddMovie addMovie={addMovie} />
      </div>
      </Route>

      <Route 
      path="/movies/:movieId"
      //  component={Movie} 
      render={(props)=> <Movie movies={movies} {...props} />}
       />  
          {/* in the props of the Movie components there is some stuff related to the react-router-dom
            like the match object 
            to access the :movie variable we should acess in the Movie Component 
             props.match.params.movie
          */}
         
          <Route path='*'>
            <Error />
          </Route>
        </Switch>


      </Router>
  );
}



export default App;
