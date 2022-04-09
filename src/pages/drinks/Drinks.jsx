import React from 'react'
import Container from './StyledDrinks'
import Button from '../../components/button/Button.jsx'
import { useState } from 'react'

const Drinks = () => {

  const [isActive, setIsActive] = useState(false)

  return (
    <Container>
      <h1>Drinks</h1>
      <Button 
        isActive={isActive} 
        text="Drinks Populares"
        onClick={() => setIsActive(!isActive)}
      />
    </Container>
  )
}

export default Drinks