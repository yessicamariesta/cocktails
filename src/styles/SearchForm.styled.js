import styled from 'styled-components'

export const SearchFrom = styled.form`
  width: 85vw;
  margin: 0 auto;
  max-width: 40rem;
  background-color: ${({ theme }) => theme.colors.mainWhite};
  padding: 2rem 2.5rem;
  text-transform: capitalize;
  border-radius: 0.25rem;
  box-shadow: 2px 5px 3px 0px rgba(0, 0, 0, 0.5);
`

export const FormControl = styled.div`
  & label {
    display: block;
    margin-bottom: 1.25rem;
    font-weight: bold;
    letter-spacing: 0.25rem;
    color: ${({ theme }) => theme.colors.primaryColor};
  }

  & input {
    width: 100%;
    border: none;
    border-color: transparent;
    background-color: ${({ theme }) => theme.colors.mainBackground};
    border-radius: 0.25rem;
    padding: 0.5rem;
    font-size: 1.2rem;
  }
`
