import React, { Component } from 'react'
import styled, { injectGlobal } from 'styled-components'

import { primary, secondary, fontColor } from '../../styles/variables'
import Sans from '../../fonts/sans-style-font'

class Header extends Component {
  render () {
    return (
      <Wrapper>
        <h4>Luis Lopez</h4>
        <br />
        <h2>Web Developer</h2>
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

  * {
    margin: 0;
    padding: 0;
    display: inline-block;
    font-family: ${Sans}
  }

  h2 {
    margin-top: 1rem;
    color: ${primary};
  }
  
`

export default Header
