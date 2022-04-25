import styled from "styled-components/macro";

const ScrollButton = ({ clickHandler, isLeftButton }) => (
  <StyledButton isLeftButton={!!isLeftButton} onClick={clickHandler}>
    {isLeftButton ? "<" : ">"}
  </StyledButton>
);

export default ScrollButton;

///////////// Styling... ////////////////

const StyledButton = styled.button(
  ({ isLeftButton }) => `
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${isLeftButton ? 0 : null};
  right: ${isLeftButton ? null : 0};
  width: 40px;
  background-color: black;
  opacity: 45%;
  color: white;
  border: none;
  font-size: 32px;
`
);
