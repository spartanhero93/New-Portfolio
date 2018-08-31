import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { HamburgerButton } from 'react-hamburger-button'

import { primary, fontColor } from '../../styleVariables'

class Sidebar extends Component {
  state = {
    open: false
  }

  handleClick = () => {
    this.setState({ open: !this.state.open })
  }

  render () {
    return (
      <div>
        <HamburgerContainer>
          <HamburgerButton
            open={this.state.open}
            onClick={this.handleClick}
            width={40}
            height={28}
            strokeWidth={2}
            color={primary}
            animationDuration={0.1}
          />
        </HamburgerContainer>
        <NavContainer isOpen={this.state.open}>
          <span isOpen={this.state.open} onClick={this.handleClick}>
            ×
          </span>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/work'>Work</Link>
        </NavContainer>
      </div>
    )
  }
}

const HamburgerContainer = styled.span`
  position: absolute;
  top: 2%;
  left: 1%;

  @media(max-width: 600px) {
    left: 2%;
  }
`

const NavContainer = styled.nav`
  height: 100%; /* 100% Full-height */
  width: ${props => (props.isOpen ? `10rem` : '0rem')}; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #111; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.4s ease-out; /* 0.5 second transition effect to slide in the sidenav */
  text-align: left;
  border-radius: 0 3rem 3rem 0;
  a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
    position: relative;
    overflow: hidden;
    margin: 2rem 0;

    :hover {
      color: #f1f1f1;
    }
    :before {
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
  }
  span {
    display: ${props => (props.isOpen ? `visible` : `none`)};
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
    cursor: pointer;
    color: ${fontColor};
  }
`

export default Sidebar
