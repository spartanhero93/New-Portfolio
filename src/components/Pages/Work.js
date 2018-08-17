import React from 'react'
import { Column, Container, Row } from 'react-rasta'
import styled from 'styled-components'

import { fontColor } from '../../styles/variables'

const Work = props => (
  <Wrapper>
    <Container>
      <Row>
        <Column size={{ xs: 9, md: 3, lg: 3 }}> <Boxes>1</Boxes> </Column>
        <Column size={{ xs: 9, md: 3, lg: 3 }}><Boxes>2</Boxes></Column>
        <Column size={{ xs: 9, md: 3, lg: 3 }}><Boxes>3</Boxes></Column>
        <Column size={{ xs: 9, md: 3, lg: 3 }}><Boxes>4</Boxes></Column>
      </Row>
    </Container>
  </Wrapper>
)

const Wrapper = styled.div`
  color: ${fontColor};
`

const Boxes = styled.div`
  width: 10rem;
  height: 10rem;
  background: cyan;
  border: solid 4px red;
  color: black;
  text-align: center;
  line-height: 9rem;
  font-size: 2rem;
`

export default Work
