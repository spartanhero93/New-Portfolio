import React, { Component } from 'react'
import styled from 'styled-components'
// import Typist from 'react-typist'

import Navbar from '../components/Navbar'
import Hamburger from '../components/Sidebar'
import { primary, fontColor } from '../styleVariables'

class Home extends Component {
  render () {
    return (
      <React.Fragment>
        <Hamburger />
        <Wrapper>
          <h4>Luis Lopez</h4>
          <h2>Web Developer</h2>
          <p>Building websites for Charlotte, N.C</p>
          <Navbar />
        </Wrapper>
      </React.Fragment>
    )
  }
}

const Wrapper = styled.div`
  text-align:center;
  color: ${fontColor};
  font-size: 3rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;

  * {
    margin: 0;
    padding: 0;
    display: inline-block;
    font-weight: 200;
  }

  h2 {
    margin: 2rem;
    color: ${primary};
  }
  p {
    font-size: 1rem;
    margin-bottom: 8rem;
  }

  @media(max-width: 1600px) {
  }
  @media(max-width: 1300px) {
  }
  @media(max-width: 1000px) {
    * {
      font-size: 2.3rem;
    }
    p {
      margin-bottom: 4rem;
    }
  }
  @media(max-width: 800px) {
  }
`

export default Home
