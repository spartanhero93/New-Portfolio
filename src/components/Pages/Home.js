import React, { Component } from 'react'
import styled from 'styled-components'
// import Typist from 'react-typist'

import Navbar from '../Navbar'
import { primary, fontColor } from '../../styles/variables'

class Home extends Component {
  render () {
    return (
      <Wrapper>
        <h4>Luis Lopez</h4>
        <h2>Web Developer</h2>
        <Navbar />
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  text-align:center;
  color: ${fontColor};
  font-size: 3rem;
  position: absolute;
  top: 26%;
  left: 41%;
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
    margin-top: 1rem;
    color: ${primary};
    margin-bottom: 8rem;
  }

  @media(max-width: 1600px) {
    left: 32%;
  }
  @media(max-width: 1300px) {
    left: 30%;
  }
  @media(max-width: 1000px) {
    left: 24%;
    * {
      font-size: 2.3rem;
    }
    h2 {
      margin-bottom: 4rem;
    }
  }
  @media(max-width: 800px) {
    left: 17%;
  }
`

export default Home
