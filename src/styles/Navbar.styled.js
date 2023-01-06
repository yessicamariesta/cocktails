import styled from 'styled-components'

export const NavbarWrapper = styled.nav`
  background-color: ${({ theme }) => theme.colors.mainWhite};
  height: 5rem;
  display: flex;
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primaryColor};
  box-shadow: 2px 5px 3px 0px rgba(0, 0, 0, 0.5);
`

export const NavCenter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1170px;
  width: 85vw;
  margin: 0 auto;

  & img {
    width: 12rem;
  }
`

export const NavLinks = styled.ul`
  display: flex;
  align-items: center;

  & a {
    text-transform: capitalize;
    display: inline-block;
    font-weight: 400;
    margin-right: 0.5rem;
    letter-spacing: 2px;
    font-size: 1.2rem;
    padding: 0.25rem 0.5rem;
    transition: all 0.3s linear;
  }

  & a:hover {
    color: ${({ theme }) => theme.colors.primaryColor};
  }
`
