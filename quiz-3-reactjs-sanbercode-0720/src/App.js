import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Index from './quiz/index'
import About from './quiz/about'
import Home from './quiz/home'
import { BrowserRouter as Router, BrowserRouter } from 'react-router-dom';
import MovieListEditor from './quiz/MovieListEditor';

function App() {
  return (
    <div className="App">
      


      <BrowserRouter>
        <Index />
      </BrowserRouter>
      
     
      <MovieListEditor/>
      {/* <About /> */}
      {/* <Home /> */}
    </div>
  );
}

export default App;
