import styled from "styled-components";

//<==== Reusable Colors ====>//
const [bgColor, fontColor, particleColor] = ["#222930", "#E9E9E9","#4EB1BA" ];

//<=== front page styling ===>//
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


export const Span = styled.span`
  color: ${particleColor};
`;