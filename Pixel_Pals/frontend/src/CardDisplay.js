import React, {useState} from 'react'
import {Link, withRouter} from 'react-router-dom';
import Axios from 'axios'
import MainSearch from './MainSearch';

//obtain TypeScript typings for intellisense
const axios = require('axios').default;

//cardname
//VCG2080T11BLMPB

class CardDisplay extends React.Component{
    
    constructor(props){

        super(props);

        //the initial state will contain the empty card data object 
        //along with a flag to determine if the data has been received
        this.state={
            cardData: {},
            promiseResolved: false
        }
    }

    componentWillMount(){
        let data = {};

        //grab the card name from props 
        const cardName = this.props.location.state.card

        //concatenate given card name into axios get request to receive json object from the database
        axios.get("http://127.0.0.1:8000/api/graphicsCards/" + cardName)
        .then((response) => {

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

    updateSearch(){

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
                                    <img src={this.state.cardData.image_url} alt=""/>
                                </figure>
                            </div>
                            <div className="tile is-child">
                                <div className="content">
                                    <dl>
                                        <dt><strong>Model</strong></dt>
                                        <dd>
                                            {this.state.cardData.model_id}
                                        </dd>
                                        <dt><strong>Manufacturer</strong></dt>
                                        <dd>
                                            {this.state.cardData.manufacturer}
                                        </dd>
                                        <dt><strong>GPU Speed</strong></dt>
                                        <dd>
                                            {this.state.cardData.gpu_speed}
                                        </dd>
                                        <dt><strong>Memory Type</strong></dt>
                                        <dd>
                                            {this.state.cardData.memory_type}
                                        </dd>
                                        <dt><strong>Memory-Bandwidth</strong></dt>
                                        <dd>
                                            {this.state.cardData.memory_bandwidth}
                                        </dd>
                                        <dt><strong>Bus Size</strong></dt>
                                        <dd>
                                            {this.state.cardData.memory_type}
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
    
                        <div className="tile is-parent is-vertical">
    
                            <div className="tile is-child">
                                <div className="content is-medium">
                                    <h1>
                                        {this.state.cardData.name}
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
                return null
            }
    }    
}

export default withRouter(CardDisplay)
