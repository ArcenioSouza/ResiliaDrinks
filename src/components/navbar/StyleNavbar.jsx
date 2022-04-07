import styled from "styled-components";

const StyleNavbar = styled.div`
   height: 100%;
   background-color: var(--yellow);
   display: flex;
   justify-content: space-around;
   align-items: center;
   box-shadow: 0px 5px 15px #000;

   ul {
      width: 90%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      list-style: none;
      font: 25px bold;
   }

   .title {
      font-size: 40px;
      font-family: var(--font-title);
   }

   .title:hover {
      text-decoration: none;
      color: var(--red);
      cursor: pointer;
   }

   li {
      font-family: var(--font-links);
      color: var(--blue);
      font-weight: bold;
   }

   a{
      color: none;
      cursor: none;
      text-decoration: none;
   }

   li:hover {
      color: var(--red);
      cursor: pointer;
   }

   li:active {
      text-decoration: underline;
   }
`;
export default StyleNavbar;
