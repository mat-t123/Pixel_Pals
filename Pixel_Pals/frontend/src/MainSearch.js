import React from 'react';
import {Link} from 'react-router-dom';
import { Button } from 'react-bulma-components';

export default function MainSearch() {
    return (
        <div>
            <input type="search" className="main-search-bar" placeholder="Search for cards.."></input>
            <Link to="/cardDisplay">
                <Button color="primary" outlined rounded size ="small">
                    search
                </Button>
            </Link>
            
        </div> 
    )   
}