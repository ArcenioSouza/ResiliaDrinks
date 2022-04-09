import styled from "styled-components";

const StyleFooter = styled.footer`
   height: 5%;
   background-color: var(--yellow);
   display: flex;
   justify-content: center;
   align-items: center;
   box-shadow: -5px -5px 10px #000;
   border-top-left-radius: 20px;
   border-top-right-radius: 20px;

   p{
      font-weight: bold;
      font-size: 1.2rem;
      color: var(--blue);
      font-family: var(--font-links);
   }
`

export default StyleFooter;