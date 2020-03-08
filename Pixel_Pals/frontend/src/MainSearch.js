import React from 'react'

export default function MainSearch() {
    return (
        <div className="searchPage">
            <input type="text" id="mainSearchBar" placeholder="Search for cards.."></input>
            <button type="button" id="mainSearchButton">Search</button>
        </div>
    )
}
