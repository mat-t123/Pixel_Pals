import React from 'react'

export default function MainSearch() {
    return (
        <div className="searchPage">
            <h1>Card Tracker</h1>
            <input type="text" id="mainSearchBar" placeholder="Search for cards.."></input>
            <button type="button" id="mainSearchButton">Search</button>
        </div>
    )
}
