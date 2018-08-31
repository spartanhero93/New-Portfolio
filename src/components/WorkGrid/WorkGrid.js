import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import {
  baconImg,
  movieImg,
  ogPortfolioImg,
  photowallImg,
  pixabayImg,
  quoteMachineImg,
  wikiAppImg,
  yourSpaceImg
} from '../../images'
import { fontColor } from '../../styleVariables'

const imagesArr = [
  baconImg,
  movieImg,
  ogPortfolioImg,
  photowallImg,
  pixabayImg,
  quoteMachineImg,
  wikiAppImg,
  yourSpaceImg
]

class WorkGrid extends Component {
  state = {
    hoveredImage: 'false'
  }

  handleMouseOver = () => {
    this.setState({ hoveredImage: 'true' })
  }

  handleMouseLeave = () => {
    this.setState({ hoveredImage: 'false' })
  }

  render () {
    return (
      <Wrapper>
        <header>
          A couple of projects I made
        </header>

        <Link href='#'>
          <Icon viewBox='0 0 20 20'>
            <path d='M10 15h8c1 0 2-1 2-2V3c0-1-1-2-2-2H2C1 1 0 2 0 3v10c0 1 1 2 2 2h4v4l4-4zM5 7h2v2H5V7zm4 0h2v2H9V7zm4 0h2v2h-2V7z' />
          </Icon>
          <Label>Hovering my parent changes my style!</Label>
        </Link>
      </Wrapper>
    )
  }
}

// <=== Styling ===>//
/* Keyframe animation */
const fadeOutAnimation = keyframes`
  0% { 
    opacity: 1;
  }
  100% { 
    opacity: 0;
  }
`

const Wrapper = styled.div`
  text-align:center;
  color: ${fontColor};
  font-size: 1rem;
  display: flex;
  justify-content: space-around;
  header {
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
    display: inline;
    animation:${fadeOutAnimation} 2s ease-in;
    opacity: 0;
  }
`

const Link = styled.a`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  background: papayawhip;
  color: palevioletred;
`

const Icon = styled.svg`
  transition: fill 0.25s;
  width: 48px;
  height: 48px;

  ${Link}:hover & {
    opacity: rebeccapurple;
  }
`
const Label = styled.span`
  display: flex;
  align-items: center;
  line-height: 1.2;

  &::before {
    content: '◀';
    margin: 0 10px;
  }
`

export default WorkGrid
