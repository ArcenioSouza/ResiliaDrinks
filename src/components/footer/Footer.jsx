import React from "react";
import StyleFooter from "./StyleFooter";

const Footer = (props) => {
   return (
      <StyleFooter>
         <p>{props.text}</p>
      </StyleFooter>
   );
};

export default Footer;
