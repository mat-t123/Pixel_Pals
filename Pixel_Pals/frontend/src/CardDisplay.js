import React, {useState} from 'react'
import './App.css'

export default function CardDisplay() {

    const cards = [
        {
            card_id: "the first card",
            name: "Titan GFX 20"
        }
    ]



    return (
        <div className="card-result-container">
            <h3>Card Result Page</h3>
            <div className="results-card-info">
                <div>card image</div>
                <div>{cards[0].name} </div>
            </div>
            <div className="card-graph-container">
                <div>Card Graph from Amazon</div>
                <div>Card Graph from NewEgg</div>
            </div>
            <button>Add to watchlist</button>
        </div>
    )
}