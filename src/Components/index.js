import React from 'react'
import styled from 'styled-components'
import TypeWriter from './TypingAnim'
// import LinksBar from "./LinksBar";

const TextGreet = props => {
  return (
    <Greeting>
      <TypeWriter />
    </Greeting>
  )
}

// <=== Styling Greeting component ===>//
const Greeting = styled.div`
  position: absolute;
  top: 20vh;
  line-height: 6rem;
  font-size: 4rem;

  @media (max-width: 1050px) {
    top: 15vh;
    line-height: 7rem;
  }

  @media (max-width: 700px) {
    top: 20vh;
    font-size: 3rem;
    font-weight: 300;
    line-height: 4rem;
  }

  @media (max-height: 650px) {
    top: 8vh;
    font-size: 2rem;
  }
  @media (max-height: 450px) {
    top: 2vh;
    font-size: 1.5rem;
  }
`
export default TextGreet
