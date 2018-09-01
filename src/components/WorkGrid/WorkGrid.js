import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import { fadeOut, fadeIn } from 'react-animations'

import { fontColor, primary } from '../../styleVariables'
import Cards from './Cards'
class WorkGrid extends Component {
  render () {
    return (
      <Wrapper>
        <StyledContainer>
          <h1>My Work</h1>
          <p>A collection of projects that I have made</p>
        </StyledContainer>
        <header>
          Search for my projects
          <div>
            <StyledButtons>Front End</StyledButtons>
            <StyledButtons>Back End</StyledButtons>
            <StyledButtons>All</StyledButtons>
          </div>
        </header>
      </Wrapper>
    )
  }
}

// <=== Styling ===>//
const FadeOutAnim = keyframes`${fadeOut}`
const FadeInAnim = keyframes`${fadeIn}`

const Wrapper = styled.div`
  color: ${fontColor};
  text-align: center;
  color: ${fontColor};
  font-weight: 200;
  font-size: 2rem;
  header {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 1;
    animation:${FadeInAnim} 2s ease-out;
    display: flex;
    flex-direction: column;
  }

  @media(max-width: 900px) {
    font-size: 1rem;
  }
`
const StyledContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  animation: ${FadeOutAnim} 2s ease-in;
  * {
    line-height: 4rem;
  }
`
const StyledButtons = styled.a`
  display: inline-block;
  padding: 0.35rem 1rem;
  width: 16rem;
  border: 0.1em solid #FFFFFF;
  margin: 0 0.3em 0.3rem 0;
  border-radius: 0.12rem;
  box-sizing: border-box;
  text-decoration: none;
  font-weight: 300;
  color: #FFFFFF;
  text-align: center;
  transition: all 0.2s;
  :hover {
    color:#000000;
    background-color:#FFFFFF;
  }
  @media(max-width: 1000px) {
    width: 8rem;
  }

`

export default WorkGrid
