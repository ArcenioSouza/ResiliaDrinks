import React from "react";
import { NavLink } from "react-router-dom";
import StyleNavbar from "./StyleNavbar";

const Navbar = (props) => {
   return (
      <StyleNavbar>
         <nav>
            <ul>
               <NavLink to="/drinks">
                  <li>{props.item1}</li>
               </NavLink>
               <NavLink to="/sobre">
                  <li>{props.item2}</li>
               </NavLink>
               <NavLink to="/">
                  <li className="title">ResiliaDrinks</li>
               </NavLink>
               <NavLink to="/time">
                  <li>{props.item3}</li>
               </NavLink>
               <NavLink to="/contato">
                  <li>{props.item4}</li>
               </NavLink>
            </ul>
         </nav>
      </StyleNavbar>
   );
};

export default Navbar;
