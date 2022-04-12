import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/home/Home";
import Drinks from "../pages/drinks/Drinks";
import Sobre from "../pages/sobre/Sobre";
import NossoTime from "../pages/nosso-time/NossoTime";
import Contato from "../pages/contatos/Contatos";

const RoutesApp = () => {
   return (
      <Routes>
         <Route path="/" element={<Home />}></Route>
         <Route path="/drinks" element={<Drinks />}></Route>
         <Route path="/sobre" element={<Sobre />}></Route>
         <Route path="/time" element={<NossoTime />}></Route>
         <Route path="/contato" element={<Contato />}></Route>
      </Routes>
   );
};

export default RoutesApp;
