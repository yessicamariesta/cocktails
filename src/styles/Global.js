import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
   * {
      padding: 0;
      margin: 0;
      box-sizing: 0;
   }

   body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      color: ${({ theme }) => theme.colors.mainBlack};
      background: ${({ theme }) => theme.colors.mainBackground};
      line-height: 1.4;
      font-size: 1rem;
      font-weight: 300;
}

   h1,
   h2,
   h3,
   h4,
   h5,
   h6 {
      margin-bottom: 1.25rem;
      letter-spacing: 0.3rem;
   }

   p {
      margin-bottom: 1.25rem;
   }

   ul {
      list-style-type: none;
   }

   a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.mainBlack};
   }

   img {
      width: 100%;
      display: block;
   }
`
