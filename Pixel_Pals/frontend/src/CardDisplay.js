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
    
        <div className="level">
            <div className="level-left">
                <div className="box">
                    <figure className="image is-128x128">    
                        <img src="/gcard.jpg" alt=""/>
                    </figure>
                </div>
            </div>

            <div className="level-right">
                <div className="level-item">
                there is an image
                </div>
            </div>

        </div>
    )
}