import React from 'react'
import {Link} from "react-router-dom";

 const NavBar = () => {
    return (
        <div className = "navBar">
            <ul>
                <li><Link to = "/">Todo App</Link></li>
                <li><Link to = "/tracker">Expenses tracker app</Link></li>
            </ul>
        </div>
    )
}

export default NavBar;