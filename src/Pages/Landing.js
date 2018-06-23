import React, { Component } from 'react'
import styled from 'styled-components'
import { ParticlesJS } from '../Particles'

class Landing extends Component {
  render () {
    return (
      <Wrapper>
        <ParticlesJS />
        <Greeting />
      </Wrapper>
    )
  }
}
const [bgColor, fontColor, particleColor] = ['#222930', '#E9E9E9', '#4EB1BA']

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${bgColor};
  color: ${fontColor};
  z-index: 0;
  position: relative;
`
const Greeting = styled.div`
  
`

export default Landing
