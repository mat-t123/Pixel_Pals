import React from 'react';
import {withRouter} from 'react-router-dom';

class MainSearch extends React.Component{

    //initializer 
    constructor(props){
        super(props);

        //initial state
        this.state = {
            searchTerm: ""
        };

        //bind the 'this' keyword to this function
        this.SearchItem = this.SearchItem.bind(this);    
        this.OnClick = this.OnClick.bind(this);
    }


    //this item grabs the text from search bar
    SearchItem = (e) => {
        //if the key pressed is the enter key and the search field is not
        //empty then store the search term in the state to pass on to the card display
        if(e.keyCode === 13 && e.target.value !== ""){
            const newSearch = e.target.value;
            this.setState({
                searchTerm: e.target.value 
            });
            this.props.onMainSearch(newSearch);
        }
    }

    //this function grabs the text from search bar
    OnClick(e){
        if(e.target.value !== ""){
            const newSearch = e.target.value;
            console.log(newSearch);
        }
    }


    render(){
        return(

        <div className="container">

            <div className="columns">
                <div className="column is-one-fifth"></div>
                <div className="column">

                    <div className="field">
                        <div className="control">
                            <input id="searchbar" className="input" type="text" onKeyDown={this.SearchItem} placeholder="Search for cards..."></input>
                        </div>
                    </div>

                    <div className="navbar-start">
                        <a href="/cardDisplay" className="button is-small is-primary is-outlined is-rounded" onClick={this.onClick}>
                            search {this.props.card}
                        </a>
                    </div>

                </div>
                <div className="column is-one-fifth"></div>
            </div>
        </div>
        );
    }
}

export default withRouter(MainSearch)