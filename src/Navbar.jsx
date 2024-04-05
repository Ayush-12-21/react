import React from "react";
import "./Nav.css"
import { NavLink } from "react-router-dom";

function Navbar(){
    return(
<>
<nav className="navbar">
<ul className="nav">
    <li className="nav-item"><NavLink to="" >Home</NavLink></li>
    <li className="nav-item"><NavLink to="/about" >About</NavLink></li>
    <li className="nav-item"><NavLink to="/contact" >Contact</NavLink></li>
</ul>
</nav>
</>
    );
}

export default Navbar;