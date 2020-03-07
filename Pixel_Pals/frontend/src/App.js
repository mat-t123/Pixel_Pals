import React from 'react';
import './App.css';
import MainSearch from './MainSearch';
import CardDisplay from './CardDisplay';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className ="App">
        <MainSearch />
        <CardDisplay />
      </div>
    </Router>
  ); 
}       

export default App;
