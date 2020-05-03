//import react
import React from 'react';

//import built components to render within the app
import MainSearch  from './MainSearch';
import CardDisplay from './CardDisplay';
import Nav from './Nav';
//import css framework 'Bulma'
import 'bulma/css/bulma.css'

//add react component to allow the switching between pages within the app
import {BrowserRouter as Router, Switch, Route, Redirect, withRouter} from 'react-router-dom';


class App extends React.Component{

  constructor(props){
    super(props);

    //initial state
    //when the redirect attribute of the app's state is null the home page is shown
    this.state = {
        cardName: "",
        redirect: null
    };

    this.setCard = this.setCard.bind(this);
  } 

  //this function takes the search term from MainSearch when entered and sets it as the app's current card
  setCard = (card) => {
      this.setState({
        cardName: card,
        redirect: "/cardDisplay"
      });
      console.log(card);
  }

  //render function from react, written in JSX 
  //the router component lists the components in the directory so that the can referenced by other components
  render() 
  {
    if(this.state.redirect) 
    {
      {console.log(this.state.redirect)}
      this.setState({
        redirect: ""
      })
      return <Redirect to ={{
        pathname: this.state.redirect,
        state: {
          card: this.state.cardName
        }
      }} />
    }

    return (  
       
      <div className ="App">
        <Nav />
        <section className="section">
          <Switch>

            <Route exact path="/" 
              render = {() => <MainSearch onMainSearch={this.setCard} />}
            />

            <Route exact path="/cardDisplay" 
              render = {() => <CardDisplay card={this.state.cardName} />}
            /> 

          </Switch> 
        </section>
      </div>
    

    );
  }
}     

export default App

