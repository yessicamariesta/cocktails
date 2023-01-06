import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Navbar from './components/Navbar'
import About from './pages/About'
import Error from './pages/Error'
import Home from './pages/Home'
import SingleCocktail from './pages/SingleCocktail'
import { GlobalStyles } from './styles/Global'

const theme = {
  colors: {
    primaryLightColor: '#d4e6a5',
    primaryColor: '#476a2e',
    primaryDarkColor: '#c02c03',
    mainWhite: '#fff',
    offWhite: '#f7f7f7',
    mainBackground: '#f1f5f8',
    mainOverlay: 'rgba(35, 10, 36, 0.4)',
    mainBlack: '#222',
    mainGrey: '#ececec',
    darkGrey: '#afafaf',
    mainRed: '#bd0303',
  },
  shadow: {
    light: '2px 5px 3px 0px rgba(0, 0, 0, 0.5)',
    dark: '4px 10px 5px 0px rgba(0, 0, 0, 0.5)',
  },
  mainSpacing: '0.3rem',
  mainBorderRadius: '0.25rem',
  smallWidth: '85vw',
  maxWidth: '40rem',
  fullWidth: '1170px',
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyles />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='cocktail/:id' element={<SingleCocktail />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}
