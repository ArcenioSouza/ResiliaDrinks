import React from "react";
import Container from "./StyledHome";
import image from "../../assets/img/bg-bons-drinks.jpg";

const Home = () => {
   return (
      <Container>
         <h1>Resilia Drinks</h1>
         <img src={image} alt="" />
      </Container>
   );
};

export default Home;
