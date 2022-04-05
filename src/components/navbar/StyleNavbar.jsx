import styled from "styled-components";

const StyleNavbar = styled.div`
   width: 100%;
   height: 100px;
   background-color: papayawhip;
   display: flex;
   justify-content: space-around;
   align-items: center;

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
   }

   .title:hover {
      text-decoration: none;
      color: orange;
      cursor: pointer;
   }

   li {
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
         "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
   }

   li:hover {
      color: orange;
      cursor: pointer;
   }

   li:active {
      color: red;
      text-decoration: underline;
   }
`;
export default StyleNavbar;
