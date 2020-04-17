import React from 'react';
import './App.css';
import MainSearch from './MainSearch';
import CardDisplay from './CardDisplay';
import Nav from './Nav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router> 
      <div className ="App">
        <Nav />
        <Switch>
          <Route path="/" exact component ={MainSearch}/>
          <Route path="/cardDisplay" exact component ={CardDisplay}/> 
        </Switch>
      </div>
    </Router> 
  ); 
}       

export default App;
