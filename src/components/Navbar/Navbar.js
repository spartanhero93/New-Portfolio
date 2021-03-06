import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { primary, fontColor } from '../../styleVariables'

const Navbar = () => (
  <Wrapper>
    <NavLink to='/about'>
      Skills
    </NavLink>
    <NavLink to='/work'>
      Work
    </NavLink>
  </Wrapper>
)

const NavLink = props => <Link {...props} />

/* Styles */
const Wrapper = styled.nav`
  a {
    font-size: 2rem;
    color: ${fontColor};
    text-decoration: underline ${primary};
    margin: 0 2rem;
    position: relative;
    overflow: hidden;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;

    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      bottom: 0;
      left: 0;
      background-color: ${primary};
      visibility: hidden;
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      -webkit-transition: all 0.3s ease-in-out 0s;
      transition: all 0.3s ease-in-out 0s;
      z-index: -2;
    }
    &:hover:before {
      visibility: visible;
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }

    @media(max-width: 900px) {
      font-size: 1.4rem;
      margin: 0 .5rem;
      padding: .5rem 1rem;
    } 
  }
`
export default Navbar
