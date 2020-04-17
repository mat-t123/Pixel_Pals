import React from 'react'
import { Link } from "react-router-dom";
import { Navbar } from "react-bulma-components";

export default function Nav() {

    return (
        <Navbar>
            {/*Navbar brand contains the logo at the right of the navbar */}
            <Navbar.Brand>
                <Link to="/">
                    <Navbar.Item>
                    Pixel Pal Card Tracker
                    </Navbar.Item>
                </Link>
            </Navbar.Brand>

            <Navbar.Menu>
                <Navbar.Dropdown>
                    Account
                </Navbar.Dropdown>
            </Navbar.Menu>
        </Navbar>

    ) 
}
