import styled, { keyframes } from "styled-components";

//<==== Colors ====>//
const bgColor = "#222930";
const fontColor = "#E9E9E9";
const particleColor = "#4EB1BA";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  text-align: center;
  background: ${bgColor};
  color: ${fontColor};
  text-shadow: 0px 1px 0px #333, -1px 0px 0px #333, 0px 0px 10px rgba( 0, 0, 0, 0.80);
  font: 100 7rem 'Helvetica Neue', 'Helvetica', 'Open Sans', sans-serif;
  z-index: 0;
  `;

export const Greeting = styled.div`
  position: absolute;
  top: 20vh;
  line-height: 15rem;
  font-size: 4rem;
  

  @media (max-width: 1050px){
    top: 20vh;
    line-height: 18rem;
  }

  @media (max-width: 700px){
    top: 25vh;
    font-size: 3rem;
    font-weight: 300;
    line-height: 7rem;
  }
`;

export const Span = styled.span`
  color: ${particleColor};
`;





