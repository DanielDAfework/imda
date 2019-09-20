import React from 'react';
import logo from './logo.svg';
import MovieItem from './display/MovieItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <MovieItem
        title="The Incredibles"
        year="2004"
        rating="90%"
        shortPlot="A family of undercover superheroes,
         while trying to live the quiet suburban life, 
         are forced into action to save the world."
        runTime="115 min"
        genre="Animation"
        poster="https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_SX300.jpg"
      />
    </div>
  );
}

export default App;
