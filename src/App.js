import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Drinks from "./pages/drinks/Drinks";
import Sobre from "./pages/sobre/Sobre";
import NossoTime from "./pages/nosso-time/NossoTime";
import Contato from "./pages/contatos/Contatos";

function App() {
   return (
      <BrowserRouter>
         <Navbar
            item1={"Drinks"}
            item2={"Sobre Nós"}
            item3={"Nosso Time"}
            item4={"Contato"}
         />
         <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/drinks" element={<Drinks />}></Route>
            <Route path="/sobre" element={<Sobre />}></Route>
            <Route path="/time" element={<NossoTime />}></Route>
            <Route path="/contato" element={<Contato />}></Route>
         </Routes>
         <Footer text={"Resilia 2022 - Alguns direitos reservados"} />
      </BrowserRouter>
   );
}

export default App;
