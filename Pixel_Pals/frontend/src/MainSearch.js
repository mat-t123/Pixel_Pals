import React from 'react'
import {Link} from 'react-router-dom'
import './App.css';

export default function MainSearch() {
    return (
        <div>
            <input type="search" id="mainSearchBar" placeholder="Search for cards.."></input>
            <Link to="/cardDisplay">
                <button type="button" id="mainSearchButton">Search</button>
            </Link>
        </div>
    )
}