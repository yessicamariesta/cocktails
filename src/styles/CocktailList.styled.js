import styled from 'styled-components'

export const SectionTitle = styled.h2`
  font-size: 2rem;
  text-transform: capitalize;
  letter-spacing: 0.3rem;
  text-align: center;
  margin-bottom: 3.5rem;
  margin-top: 1rem;
`

export const CocktailsCenter = styled.div`
  max-width: 1170px;
  width: 85vw;
  margin: 0 auto;
  display: grid;
  row-gap: 2rem;
  column-gap: 2rem;

  @media screen and (min-width: 576px) {
    & {
      grid-template-columns: repeat(auto-fill, minmax(338.8px, 1fr));
    }
  }
`
