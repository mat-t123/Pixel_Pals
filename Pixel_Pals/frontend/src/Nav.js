import React from 'react';
import { Link } from "react-router-dom";

export default function Nav() {

    return (
        
        <nav className="navbar is-light" >
            
            <div className="navbar-brand">
                <div className="navbar-item">
                    <strong>Pixel Pals</strong>
                </div>
            </div>

            <div className="navbar-menu">
            
                <div className="navbar-start">
                    <a href="/" className="navbar-item">
                        Home  
                    </a>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a href="" className="button is-primary is-rounded is-small">Log-in</a>
                            <a href="" className="button is-rounded is-small">Sign-up</a>
                        </div>
                    </div>
                </div>
            </div>

        </nav>

    ) 
}
