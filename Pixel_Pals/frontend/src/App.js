//import react
import React from 'react';

//import built components to render within the app
import MainSearch from './MainSearch';
import CardDisplay from './CardDisplay';
import Nav from './Nav';

//add react component to allow the switching between pages within the app
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//import css bulma
import 'react-bulma-components/dist/react-bulma-components.min.css';

//render the app
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
