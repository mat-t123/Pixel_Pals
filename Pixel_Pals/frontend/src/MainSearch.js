import React from 'react';
import {Link} from 'react-router-dom';

export default function MainSearch() {
    return (
        <div>
                    
        <div class="field">
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
    )   
}