import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  text-align: center;
  background: #222930;
  color: #E9E9E9;
  text-shadow: 0px 1px 0px #333, -1px 0px 0px #333, 0px 0px 10px rgba( 0, 0, 0, 0.80);
  font: 100 7rem 'Helvetica Neue', 'Helvetica', 'Open Sans', sans-serif;
  
  `;

export const Greeting = styled.div`
  visibility: ${props => props.isOpen ? `hidden` : `visible` };
  padding: 4rem;
  position: absolute;
  top: 15vh;
  line-height: 15rem;

  @media (max-width: 1050px){
    top: 18vh;
    line-height: 18rem;
  }

  @media (max-width: 700px){
    top: 20vh;
    font-size: 3rem;
    font-weight: 300;
    line-height: 7rem;
  }
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-self: flex-start; 
  visibility: ${props => (props.isOpen ? `visible` : `hidden`)};
  height: 99%;
  width: 99%;

  @media (max-width: 700px){
    height: 70%;
    font-size: 3rem;
    font-weight: 300;
  }
`;
export const Atag = styled.a`
  text-decoration: none;
  position: relative;
  transition: text-decoration 2s ease;
  color: #E9E9E9;

  :hover {
    text-decoration: none;
  }
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 0.3rem;
    bottom: 0;
    left: 0;
    background-color: #4EB1BA;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }
  :hover:before {
    visibility: visible;
    transform: scaleX(0.6);
  }
 `;

// export const TopLinksContainer = styled.div`
//   display:flex;
//   width: 99vw;
//   border: solid 1px white;
//   justify-content: space-around;
// `;

// export const BottomTopLinksContainer = TopLinksContainer.extend`
//   position: absolute;
//   top: 84vh;
// `;

// export const Links = styled.div`

// `;





