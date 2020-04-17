import React from 'react';
import { Link } from "react-router-dom";

export default function Nav() {

    return (
        
        <div className="navbar is-light">
            
            <div className="navbar-brand">
                <Link to="/">
                    <div className="navbar-item">
                        Card Tracker
                    </div>
                </Link>
            </div>

            <div className="navbar-start"></div>

            <div className="narbar-menu">
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a href="" className="button is-primary is-rounded is-small">Log-in</a>
                            <a href="" className="button is-rounded is-small">Sign-up</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    ) 
}
