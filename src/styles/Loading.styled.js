import styled from 'styled-components'

export const Loader = styled.div`
  &,
  &:before,
  &:after {
    background: transparent;
    width: 1em;
    height: 4em;
    animation: load1 1s infinite ease-in-out;
    -webkit-animation: load1 1s infinite ease-in-out;
  }

  & {
    position: relative;
    color: ${({ theme }) => theme.colors.primaryColor};
    font-size: 3rem;
    text-indent: -9999em;
    margin: 88px auto;
    margin-top: 20rem;
    transform: translateZ(0);
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    animation-delay: -0.16s;
    -webkit-animation-delay: -0.16s;
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
  }

  &:before {
    left: -1.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  &:after {
    left: 1.5em;
  }

  @keyframes load1 {
    0%,
    80%,
    100% {
      box-shadow: 0 0;
      height: 4em;
    }

    40% {
      box-shadow: 0 -2em;
      height: 5em;
    }
  }

  @-webkit-keyframes load1 {
    0%,
    80%,
    100% {
      box-shadow: 0 0;
      height: 4em;
    }
    40% {
      box-shadow: 0 -2em;
      height: 5em;
    }
  }
`
