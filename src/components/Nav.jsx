import React from 'react'
import { NavLink } from 'react-router-dom';
import logomark from '../assets/logomark.svg';

const Nav = ( { userName }) => {
  return (
    <nav>
      <NavLink
        to="/"
        aria-label='Go to home'
      >

      <img src={logomark} alt="" height={30} />
      <span>HomeBudget</span>
      </NavLink>
    </nav>
  )
}

export default Nav

