import styled from 'styled-components'

const StyledCard = styled.div `
    background: var(--card);
    color: var(--text);
    padding: 20px;
    border-radius: 10px;
    margin-top: 20px;
    box-shadow: 0 10px 15px rgba(0,0,0,0.1);
`

const Card = ({children}) => {
  return (
    <StyledCard>{children}</StyledCard>
  )
}

export default Card