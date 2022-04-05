import React from 'react'
import Navbar from '../components/navbar/Navbar'

const Home = () => {
  return (
    <>
      <header>
         <Navbar 
            item1={"Drinks"}
            item2={"Sobre Nós"}
            item3={"Nosso Time"}
            item4={"Contato"}
         />
      </header>
    </>
  )
}

export default Home