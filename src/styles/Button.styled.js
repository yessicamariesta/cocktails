import styled from 'styled-components'

export const Button = styled.a`
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  padding: 0.45rem 0.8rem;
  display: inline-block;
  transition: all 0.3s linear;
  cursor: pointer;
  font-size: 0.8rem;
  background: ${({ theme }) => theme.colors.primaryColor};
  border-radius: 0.25rem;

  & a {
    color: ${({ theme }) => theme.colors.mainWhite};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryLightColor};
    color: ${({ theme }) => theme.colors.primaryColor};
  }

  &.btn-details {
    padding: 0.25rem 0.4rem;
  }
`
