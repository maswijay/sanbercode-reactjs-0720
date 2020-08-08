import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './tugas15/Routes'
// import logo from './logo.svg';
import './App.css';
// import Tugas11 from './tugas11/Tugas11'
// import Clock from './tugas12/Tugas12';
// import ListBuah from './tugas13/ListBuah';
// import ListBuah from './tugas14/ListBuah';
// import Buah from './tugas15/Buah';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes/>
      </Router>


    </div>
  );
}

export default App;
