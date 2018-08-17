import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Navbar = () => (
  <ul>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/work'>Work</NavLink>
  </ul>
)

const NavLink = props => (
  <li>
    <Link {...props} />
  </li>
)

/* Styles */

export default Navbar
