import styled from 'styled-components'

export const DrinkWrapper = styled.div`
  max-width: 1170px;
  width: 85vw;
  margin: 0 auto;
  text-align: left;

  & img {
    border-radius: 0.25rem;
  }

  & p {
    font-weight: bold;
    text-transform: capitalize;
    line-height: 1.8;
  }

  & p span {
    margin-right: 0.5rem;
  }

  @media screen and (min-width: 992px) {
    & {
      display: grid;
      grid-template-columns: 2fr 3fr;
      gap: 3rem;
      align-items: center;
    }
  }
`

export const DrinkInfo = styled.div`
  padding-top: 2rem;

  @media screen and (min-width: 992px) {
    & {
      padding-top: 0;
    }
  }
`

export const DrinkData = styled.span`
  background-color: ${({ theme }) => theme.colors.primaryLightColor};
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.colors.primaryColor};
`
