import React from "react";
import { NavLink } from "react-router-dom";
const Menu = () => {
    return (
<>
<NavLink exact activeClassName="active_class" to="/about">About</NavLink>
<NavLink exact activeClassName="active_class" to="/Contact">Contact</NavLink>
<NavLink exact activeClassName="active_class" to="/Services">Services</NavLink>
</>
    );
};

export default Menu;