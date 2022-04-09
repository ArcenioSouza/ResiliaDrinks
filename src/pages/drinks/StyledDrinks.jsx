import styled from 'styled-components'

const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 200px 3% 3% 3%;

  h1{
    position: absolute;
    z-index: 1;
    font-size: 4rem;
    top: 100px;
    text-shadow: 5px 5px 5px var(--blue);
    color: var(--write);
    font-family: var(--font-lists)
  }

  button:hover{
     cursor: pointer;
  }

`

export default Container;