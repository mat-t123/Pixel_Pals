import React, {useState} from 'react'
import './App.css'

export default function CardDisplay() {

    const cards = [
        {
            card_id: "MD-1230",
            name: "Titan GFX 20"
        } 
    ]


    return ( 
    <div>
        <h3>Card Result Page</h3>
        <table className="card-result-container">
            <tbody>
                {/* This is a table row */}
                <tr>
                    {/* This is a table cell */}
                    <td className="card-image-container">
                        {/*TODO: Create placeholder image if card has no picture*/}
                        <img width="190" alt="Card Picture" src="/gcard.jpg"/>
                    </td>
                    <td className="card-details">
                        <p className="card-name">Card Name: {cards[0].name}</p>
                        <p className="card-details">Card Details</p>
                    </td>
                </tr>
                
                    <tr className="button-container">
                        <button className="watchlist-button">Add to Watchlist</button>
                    </tr>
                
            </tbody>
        </table>
    </div>
    )
}