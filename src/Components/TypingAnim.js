import React from 'react'
import styled, { keyframes } from 'styled-components'

const TypeWriter = props => {
  return (
    <TypeToScreen>
      <h1>Welcome </h1>
    </TypeToScreen>
  )
}

export default TypeWriter

// <=== Styling the TypeWriter effect and Cursor===>//
const TypingEffect = keyframes`
  from { width: 0 };
  to { width: 100% };
`

const BlinkerEffect = keyframes`
  from, to { border-color: transparent }
  50% { border-color: #4EB1BA }
`

const TypeToScreen = styled.div`
  display: flex;
  justify-content: center;

  > h1 {
  overflow: hidden;
  border-right: 0.15em solid orange;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.15em;
  animation: 
    ${TypingEffect} 2s steps(20, end),
    ${BlinkerEffect} 0.6s step-end infinite;
  }
`
