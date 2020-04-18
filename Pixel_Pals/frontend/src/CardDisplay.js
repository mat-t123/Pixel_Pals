import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import Axios from 'axios'
import MainSearch from './MainSearch';

//obtain TypeScript typings for intellisense
const axios = require('axios').default;


export default function CardDisplay() {

    //information about the cards will be stored here
    const cards = [
        {
            name: "MSI Gaming GeForce GT 710 2GB GDRR3 64-bit HDCP Support DirectX 12 OpenGL 4.5 Single Fan Low Profile Graphics Card (GT 710 2GD3 LP)",
            card_id: "VCG2080T11BLMPB",
            manufacturer: "NVIDIA",
            gpu_clock_speed: "1350 MHz",
            memory_type: "GDDR6",
            memory_interface: "352-Bit",
            memory_size: "11 GB",
            memory_bandwidth: "14 Gbps"
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
    <>
        <div className="columns">
            <div className="column is-one-fifth"></div>
            <div className="column">

                <div className="field has-addons has-addons-fullwidth">

                    <div className="control">
                        <input type="text" className="input" placeholder="Search for cards..."/>
                    </div>
                    <Link to="/cardDisplay">
                        <div className="control">
                            <button className="button is-primary is-outlined">
                                search
                            </button>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="column is-one-fifth"></div>
        </div>

        <div className="tile is-ancestor">
            <div className="tile is-2 is-parent is-vertical">

                <div className="tile is-child box">
                    <figure className="image is-128x128">    
                        <img src="/gcard.jpg" alt=""/>
                    </figure>
                </div>
                <div className="tile is-child">
                    <div className="content">
                        <dl>
                            <dt><strong>Model</strong></dt>
                            <dd>
                                {cards[0].card_id}
                            </dd>
                            <dt><strong>Manufacturer</strong></dt>
                            <dd>
                                {cards[0].manufacturer}
                            </dd>
                            <dt><strong>GPU Speed</strong></dt>
                            <dd>
                                {cards[0].gpu_clock_speed}
                            </dd>
                            <dt><strong>Memory Type</strong></dt>
                            <dd>
                                {cards[0].memory_type}
                            </dd>
                            <dt><strong>Memory-Bandwidth</strong></dt>
                            <dd>
                                {cards[0].memory_bandwidth}
                            </dd>
                            <dt><strong>Bus Size</strong></dt>
                            <dd>
                                {cards[0].memory_interface}
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>

            <div className="tile is-parent is-vertical">

                <div className="tile is-child">
                    <div className="content is-medium">
                        <h1>
                            {cards[0].name}
                        </h1>
                    </div>
                </div>

                <div className="tile is-parent">
                    <div className="tile is-child">
                        <figure className="image is-256x256">    
                            <img src="/price.png" alt=""/>
                        </figure>
                    </div>
                    <div className="tile is-child">
                        <figure className="image is-256x256">    
                            <img src="/price.png" alt=""/>
                        </figure>
                    </div>
                </div>        
            </div>
        </div>
    </>
    )
}


/*<figure className="image is-128x128">    
                    <img src="/gcard.jpg" alt=""/>
                </figure> */