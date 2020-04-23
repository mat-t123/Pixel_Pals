import React, {useState} from 'react'
import {Link, withRouter} from 'react-router-dom';
import Axios from 'axios'
import MainSearch from './MainSearch';

//obtain TypeScript typings for intellisense
const axios = require('axios').default;

class CardDisplay extends React.Component{
    
    constructor(props){

        super(props);

        this.state={
            cardName: "VCG2080T11BLMPB",
            cardData: {},
            promiseResolved: false
        }
    }


    componentWillMount(){
        let data = {};

        axios.get("http://127.0.0.1:8000/api/graphicsCards/VCG2080T11BLMPB")
        .then(function (response){

            data = response.data;
            console.log(data);

            this.setState({
                cardData: data,
                promiseResolved: true
            });
 
        })
        .catch(function (error){
            console.log(error);
        });
    }

    render(){

        if(this.state.promiseResolved){
            return(
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
                                            
                                        </dd>
                                        <dt><strong>Manufacturer</strong></dt>
                                        <dd>
                                            Manufacturer
                                        </dd>
                                        <dt><strong>GPU Speed</strong></dt>
                                        <dd>
                                            gpu clock speed
                                        </dd>
                                        <dt><strong>Memory Type</strong></dt>
                                        <dd>
                                            memory type
                                        </dd>
                                        <dt><strong>Memory-Bandwidth</strong></dt>
                                        <dd>
                                            Memory Bandwidth
                                        </dd>
                                        <dt><strong>Bus Size</strong></dt>
                                        <dd>
                                            memory interface
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
    
                        <div className="tile is-parent is-vertical">
    
                            <div className="tile is-child">
                                <div className="content is-medium">
                                    <h1>
                                        name
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
            else{
                return <div>{this.state.cardName}</div>
            }
    }    
}

export default withRouter(CardDisplay)
