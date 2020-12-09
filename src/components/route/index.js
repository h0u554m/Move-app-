import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "../Search"
import Error from "./error"
import Home from "../../App"
import Movie from "./movie"



const ReactRouterSetup = () => {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path = "/movies/:movie" children = {<Movie />} >
          </Route>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
      </Router>
    );
  };





export default ReactRouterSetup;