import React from 'react'
import { Link } from "react-router-dom";

/*<Navbar>

{/*Navbar brand contains the logo at the right of the navbar }
<Navbar.Brand>
    <Link to="/">
        <Navbar.Item>
        Pixel Pal Card Tracker
        </Navbar.Item>
    </Link>
</Navbar.Brand>

{/*Drop down menu to contain all the user account options: sign-in/sign-out }
<Navbar.Menu>
    <Navbar.Container position="end">
        <Navbar.Item dropdown hoverable >

            <Navbar.Link>
                Account
            </Navbar.Link>

            <Navbar.Dropdown>
                <Navbar.Item>
                    Sign-in
                </Navbar.Item>
            </Navbar.Dropdown>

        </Navbar.Item>
    </Navbar.Container>
</Navbar.Menu>

</Navbar>*/


export default function Nav() {

    return (
        <div className="navbar">
            <div className="navbar-brand">
                <Link to="/">
                    <div className="navbar-item">
                        Card Tracker
                    </div>
                </Link>
            </div>
        </div>
    ) 
}
