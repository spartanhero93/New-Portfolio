import React from 'react'
import styled, { keyframes } from 'styled-components';


const LinksBar = props => {
  return (
    <IconNavbar>
      <ul>
        <Links href="/" target="_blank">Github</Links>
        <Links href="/" target="_blank">LinkedIn</Links>
        <Links href="/" target="_blank">TreeHouse</Links>
        <Links href="/" target="_blank">Udemy</Links>
      </ul>
    </IconNavbar>
  )
}

export default LinksBar;

//<=== IconNavbar animation, and styles ===>//
const Popin = keyframes`
   from {transform: translate(0, 20vw);}
   to {transform: translate(0, 0vw);}
`;

export const IconNavbar = styled.div`
  display:flex;
  flex-wrap: wrap;
  font-size: 1.5rem;
  position: absolute;
  top: 60vh;
  left: -5vw;
   > ul {
    margin: 0 auto;
   }
`;

export const Links = styled.a`
  text-decoration: none;
  position: relative;
  transition: text-decoration 2s ease;
  color: #e9e9e9;
  padding: 2rem;
  animation: ${Popin} 0.5s ease-in;

  :hover {
    text-decoration: none;
  }
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 0.3rem;
    bottom: 0;
    left: 0;
    background-color: #4eb1ba;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }
  :hover:before {
    visibility: visible;
    transform: scaleX(1);
  }
`;
