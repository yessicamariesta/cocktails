import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import { NavbarWrapper, NavCenter, NavLinks } from '../styles/Navbar.styled'

export default function Navbar() {
  return (
    <NavbarWrapper>
      <NavCenter>
        <Link to='/'>
          <img src={logo} alt='cocktail db logo' />
        </Link>

        <NavLinks>
          <li>
            <Link to='/'>home</Link>
          </li>

          <li>
            <Link to='about'>about</Link>
          </li>
        </NavLinks>
      </NavCenter>
    </NavbarWrapper>
  )
}
