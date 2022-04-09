import styled from 'styled-components'

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
  width: 100%;

  h1{
    position: absolute;
    z-index: 1;
    font-size: 5rem;
    top: 150px;
    text-shadow: 5px 5px 5px var(--blue);
    color: var(--write);
    font-family: var(--font-lists)
  }

  img{
    width: 80%;
    height: 95%;
    background-repeat: no-repeat;
    z-index: 0;
    border-radius: 30px;
  }  
`

export default Container;