import styled from "styled-components";

const StyledButton = styled`
  background: var(--primary);
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 20px;
  &:hover {
    opacity: 0.9;
  }
`

const Button = ({children, onClick}) => {
    return (
        <StyledButton onClick={onClick}>
            {children}
        </StyledButton>
    )
}

export default Button;