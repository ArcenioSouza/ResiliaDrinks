import React from "react";
import StyleNavbar from "./StyleNavbar";

const Navbar = (props) => {
   return (     
      <StyleNavbar>
         <ul>
            <li>{props.item1}</li>
            <li>{props.item2}</li>
            <li className="title">ResiliaDrinks</li>
            <li>{props.item3}</li>
            <li>{props.item4}</li>
         </ul>
      </StyleNavbar>             
   );
};

export default Navbar;
