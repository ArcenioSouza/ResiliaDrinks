import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  width: 100%;
  height: 100%;

  h1{
    z-index: 1;
    font-size: 5rem;
    text-shadow: 5px 5px 5px var(--blue);
    color: var(--write);
    font-family: var(--font-title)
  }

  img{
    width: 80%;
    height: 95%;
    background-repeat: no-repeat;
    position: absolute;
    z-index: 0;
    top: 15px;
  }  
`

export default Container;