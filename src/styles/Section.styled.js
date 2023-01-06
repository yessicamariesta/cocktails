import styled from 'styled-components'

export const SectionWrapper = styled.section`
  padding: 5rem 0;

  &.search {
    margin-top: 1rem;
    padding-bottom: 0;
  }

  &.error-page {
    display: flex;
    justify-content: center;
  }

  &.about-section {
    max-width: 40rem;
    width: 85vw;
    margin: 0 auto;
  }

  &.about-section p {
    line-height: 2rem;
    font-weight: 400;
    letter-spacing: 2px;
  }

  &.cocktail-section {
    text-align: center;
  }
`
