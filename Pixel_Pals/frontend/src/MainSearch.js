import React from 'react';
import {Link} from 'react-router-dom';

export default function MainSearch() {
    return (

        <div className="container">

            <div className="columns">
                <div className="column is-one-fifth"></div>
                <div className="column">

                    <div className="field">
                        <div class="control">
                            <input class="input" type="text" placeholder="Search for cards..."></input>
                        </div>
                    </div>

                    <Link to="/cardDisplay">
                        <div className="button is-small is-primary is-outlined is-rounded">
                            search
                        </div>
                    </Link>

                </div>
                <div className="column is-one-fifth"></div>
            </div>
            
        </div>

    )   
}