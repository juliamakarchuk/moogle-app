//Core
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
//Components
import MovieApp from './components/MovieApp'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MovieApp />
      </BrowserRouter>
    );
  }

}

