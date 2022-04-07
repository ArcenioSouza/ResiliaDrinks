import styled from "styled-components";

const Container = styled.div`
   width: 100%;
   height: 100vh;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   
   header{
      height: 10%;
   }

   main{
      height: 82%;
      background-color: var(--yellowLight);
   }

   footer{
      height: 5%;
   }
`;

export default Container;