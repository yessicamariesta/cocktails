import styled from 'styled-components'

export const CocktailWrapper = styled.article`
  background-color: ${({ theme }) => theme.colors.mainWhite};
  margin-bottom: 2rem;
  box-shadow: 2px 5px 3px 0px rgba(0, 0, 0, 0.5);
  transition: all 0.3s linear;
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: 0.25rem;

  &:hover {
    box-shadow: 4px 10px 5px 0px rgba(0, 0, 0, 0.5);
  }

  & img {
    height: 20rem;
    object-fit: cover;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }
`

export const CocktailFooter = styled.div`
  padding: 1.5rem;

  & h3,
  & h4,
  & p {
    margin-bottom: 0.3rem;
  }

  & h3 {
    font-size: 2rem;
  }

  & p {
    color: ${({ theme }) => theme.colors.darkGrey};
    margin-bottom: 0.5rem;
  }
`
