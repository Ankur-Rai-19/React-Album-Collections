import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
    return (
        <div className="navbar">
            <ul id="navItem">
                <li>
                    <Link to="/">HOME</Link>
                </li>

                <h1>ALBUM COLLECTION</h1>

                <li>
                    <Link to="/createAlbum">Create Album</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
