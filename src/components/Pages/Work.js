import React from 'react'
import styled from 'styled-components'

import { fontColor } from '../../styles/variables'
import Hamburger from '../Sidebar/Sidebar'

const Work = props => (
  <Wrapper>
    <Hamburger />
  </Wrapper>
)

const Wrapper = styled.div`
  color: ${fontColor};
`

export default Work
