import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
return (
  <nav>
    <ul>
      <li><Link to="/">Home Page 2</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  </nav>
)
}