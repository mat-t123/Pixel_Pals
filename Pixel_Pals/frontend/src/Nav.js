import React from 'react'
import './App.css'
import { Link } from "react-router-dom";

export default function Nav() {

    const navLinkStyle = {
        color: 'white'
    };

    return (
        <nav className ="main-nav">
            <h3>Card Tracker</h3>
            <ul className="navbar-links">
                <Link style={navLinkStyle} to="/">
                    <li>Home</li>
                </Link>
            </ul>
      </nav>
    ) 
}
