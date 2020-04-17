import React, {useState} from 'react'
import Axios from 'axios'

//obtain TypeScript typings for intellisense
const axios = require('axios').default;

export default function CardDisplay() {

    //information about the cards will be stored here
    const cards = [
        {
            card_id: "MD-1230",
            name: "Titan GFX 20"
        } 
    ]

    axios.get("http://127.0.0.1:8000/api/graphicsCards/model_1/")
    .then(function (response){
        console.log(response);
    })
    .catch(function (error){
        console.log(error);
    })
    

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