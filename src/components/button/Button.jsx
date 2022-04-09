import styled from "styled-components";

const StyledButton = styled.button`
   color: var(--write);
   font-weight: bold;
   background-color: ${props => props.isActive ? `var(--red)` : `var(--blue)`};
   width: 200px;
   height: 40px;
   border: none;
   border-radius: 5px;
   font-family: var(--font-text);
   font-size: 1rem;
`;


const Button = ({text, isActive, onClick}) => {

   return (
      <StyledButton 
         isActive={isActive}
         onClick={onClick}
      >
         {text}
      </StyledButton>
   )
   
};

export default Button;