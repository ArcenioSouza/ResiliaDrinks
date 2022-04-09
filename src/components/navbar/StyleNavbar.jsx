import styled from "styled-components";

const StyleNavbar = styled.header`
   height: 10%;
   background-color: var(--yellow);
   display: flex;
   justify-content: space-around;
   align-items: center;
   box-shadow: 0px 5px 15px #000;
   border-bottom-left-radius: 20px;
   border-bottom-right-radius: 20px;

   nav {
      width: 100%;
   }

   ul {
      width: 90%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      list-style: none;
      font: 25px bold;
   }

   #title {
      font-size: 4rem;
      font-family: var(--font-title);
   }

   #title:hover {
      text-decoration: none;
      color: var(--red);
   }

   a {
      font-family: var(--font-lists);
      color: var(--blue);
      font-weight: bold;
      text-decoration: none;
      font-size: 1.5rem;
   }

   .active {
      color: var(--red);
      text-shadow: 2px 2px 10px var(--write);
   }

   a:hover {
      color: var(--red);
      cursor: pointer;
   }
`;
export default StyleNavbar;
