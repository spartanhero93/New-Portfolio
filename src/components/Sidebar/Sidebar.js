import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { HamburgerButton } from 'react-hamburger-button'

class Hamburger extends Component {
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
            width={42}
            height={30}
            strokeWidth={2}
            color='white'
            animationDuration={0.5}
          />
        </HamburgerContainer>
        <NavContainer isOpen={this.state.open}>
          <span isOpen={this.state.open} onClick={this.handleClick}>
            ×
          </span>
          <Link to='/'>Home</Link>
          <Link to='#'>About</Link>
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
  left: 2%;
`

const NavContainer = styled.nav`
  height: 100%; /* 100% Full-height */
  width: ${props => (props.isOpen ? `100` : '0')}; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #111; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 1s; /* 0.5 second transition effect to slide in the sidenav */

  a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;

    :hover {
      color: #f1f1f1;
    }
  }
  span {
    display: ${props => (props.isOpen ? `visible` : `none`)};
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
  }
`

export default Hamburger
