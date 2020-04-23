import React from 'react';
import {Link} from 'react-router-dom';

class MainSearch extends React.Component{

    //this contains the current state of the component
    state = {
        searchQuery: ''
    };


    render(){
        return(
        
        <div className="container">


            <div className="columns">
                <div className="column is-one-fifth"></div>
                <div className="column">

                    <div className="field">
                        <div class="control">
                            <input id="searchbar" class="input" type="text" placeholder="Search for cards..."></input>
                        </div>
                    </div>

                    <div className="navbar-start">
                        <a href="/cardDisplay" className="button is-small is-primary is-outlined is-rounded">
                            search  
                        </a>
                    </div>

                </div>
                <div className="column is-one-fifth"></div>
            </div>
        </div>
        );
    }
}

export default MainSearch

/*<Link to="/cardDisplay">
    <div className="button is-small is-primary is-outlined is-rounded">
        search
    </div>
</Link>*/