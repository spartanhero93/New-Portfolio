import React, { Component } from 'react'
import styled from 'styled-components'
import Navbar from '../Navbar'

import { primary, fontColor } from '../../styles/variables'

class Home extends Component {
  render () {
    return (
      <Wrapper>
        <h4>Luis Lopez</h4>
        <br />
        <h2>Web Developer</h2>

        <br />
        <br />
        <br />
        <br />
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
  top: 30%;
  left: 41%;
  font-family: Arial, Helvetica, sans-serif;

  * {
    margin: 0;
    padding: 0;
    display: inline-block;
    font-weight: 200;
  }

  h2 {
    margin-top: 1rem;
    color: ${primary};
  }
  
`

export default Home
