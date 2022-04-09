import React from "react";
import { NavLink } from "react-router-dom";
import StyleNavbar from "./StyleNavbar";

const Navbar = (props) => {
   return (
      <StyleNavbar>
         <nav>
            <ul>
               <NavLink to="/drinks">
                  {props.item1}
               </NavLink>
               <NavLink to="/sobre">
                  {props.item2}
               </NavLink>
               <NavLink to="/" id='title'>
                  ResiliaDrinks
               </NavLink>
               <NavLink to="/time">
                  {props.item3}
               </NavLink>
               <NavLink to="/contato">
                  {props.item4}
               </NavLink>
            </ul>
         </nav>
      </StyleNavbar>
   );
};

export default Navbar;
