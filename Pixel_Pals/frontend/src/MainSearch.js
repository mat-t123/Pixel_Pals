import React from 'react'
import {Link} from 'react-router-dom'

export default function MainSearch() {
    return (
        <body>
            <div>
                <input type="search" id="mainSearchBar" placeholder="Search for cards.."></input>
                <Link to="/cardDisplay">
                    <button type="button" id="mainSearchButton">Search</button>
                </Link>
            </div>
        </body>
    )
}