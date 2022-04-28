import React from "react";
import { Link } from "react-router-dom";
import "./../../App.css";


class Menu extends React.Component {
  render() {
    return (
       <aside>
         <h3>React Router Dom 5.2.0</h3>
         <nav>
          <ul>
            <li><Link to="/">Home Page</Link></li>
            <li><Link to= { {pathname : 'login'} }>Login Page</Link></li>
            <li><Link to="/about">About Page</Link></li>
          </ul>
         </nav>
      </aside>
    )
  }
}
export default Menu;