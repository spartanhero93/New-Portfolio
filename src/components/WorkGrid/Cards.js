import React from 'react'
import styled from 'styled-components'
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

const Cards = props => {
  const selected = props.selectedType
  return (
    <Wrapper >
      <FrontEndBlock isSelected={selected}>
        Whats up
      </FrontEndBlock>
      <BackendBlock isSelected={selected}>
        Not much
      </BackendBlock >
    </Wrapper>
  )
}

/* Styling */
const Wrapper = styled.div`
  margin: 2rem;
  display: flex;
  justify-content: space-around;
`
const StyledCard = styled.div`
  height: 25rem;
  width: 20rem;
  background: slategray;
  img {
    width: 100%;
  }
`
const FrontEndBlock = styled.div`
  display: ${props => props.isSelected ? 'flex' : 'none'};
  height: 25rem;
  width: 20rem;
  background: slategray;
  img {
    width: 100%;
  }
`
const BackendBlock = styled.div`
  display: ${props => props.isSelected ? 'flex' : 'none'};
  height: 25rem;
  width: 20rem;
  background: slategray;
  img {
    width: 100%;
  }
`


export default Cards
