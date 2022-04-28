import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
return (
  <nav>
    <ul>
      <li><Link to="/home">Home Page 2</Link></li>
      <li><Link to="/aboutpage2">About Page 2</Link></li>
    </ul>
  </nav>
)
}