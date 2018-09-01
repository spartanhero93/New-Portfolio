import React from 'react'
import styled from 'styled-components'

import { fontColor } from '../../styleVariables'
import Hamburger from '../../components/Sidebar'
import WorkGrid from '../../components/WorkGrid'

const Work = props => (
  <Wrapper>
    <Hamburger />
    <WorkGrid />
  </Wrapper>
)

const Wrapper = styled.div`
  color: ${fontColor};
`

export default Work
