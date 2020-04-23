//import react
import React from 'react';

//import built components to render within the app
import MainSearch from './MainSearch';
import CardDisplay from './CardDisplay';
import Nav from './Nav';
//import css framework 'Bulma'
import 'bulma/css/bulma.css'

//add react component to allow the switching between pages within the app
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


class App extends React.Component{

  //constructor for the main app component
  constructor(props){
    super(props);
    this.state = {
      cards: [
        "model_1",
        "model_2"
      ]
    }
  }


  //render function from react, written in JSX
  render() 
  {
    return (

      <Router> 
      <div className ="App">
        <Nav />
        <section className="section">
          <Switch>
            <Route path="/" exact component ={MainSearch}/>
            <Route path="/cardDisplay" exact component ={CardDisplay}/> 
          </Switch> 
        </section>
      </div>
    </Router>  

    );
  }
}     

export default App;

