import React, {useState} from 'react'
import {Link, withRouter, Redirect} from 'react-router-dom';
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
            promiseResolved: false,
            failedSearch: false
        }

        this.handleSearch = this.handleSearch.bind(this)
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
        .catch((error) => {
            console.log(error);

            this.setState({
                failedSearch: true
            })

        });
    }

    //runs new search from input given in this component's searchbar
    handleSearch = (e) => {
        //if the input is not empty and the enter button was pressed
        if(e.keyCode === 13 && e.target.value !== ""){
            console.log(e.target.value);

            //save the search term value given in search bar
            const searchTerm = e.target.value;

            //create empty object to hold the data
            let data = {};

            axios.get("http://127.0.0.1:8000/api/graphicsCards/" + searchTerm)
            .then((response) => {

                data = response.data;
                console.log(data);

                this.setState({
                    cardData: data,
                    promiseResolved: true
                });
    
            })
            .catch((error) => {
                console.log(error);

                this.setState({
                    failedSearch: true
                })

            });
        }
    }

    render(){

        if(this.state.failedSearch){
            return(
                <Redirect to="/" />
            )
        }

        if(this.state.promiseResolved){
            return(
                <>
                    <div className="columns">
                        <div className="column is-one-fifth"></div>
                        <div className="column">
    
                            <div className="field has-addons has-addons-fullwidth">
    
                                <div className="control">
                                    <input id="searchbar" type="text" className="input" onKeyDown={this.handleSearch} placeholder="Search for cards..."/>
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
