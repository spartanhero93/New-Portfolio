import React from 'react'
import styled from 'styled-components';
import HamburgerMenu from "react-hamburger-menu";

const HamWrapper = styled.div`
  padding: 2rem;
`;

const Hamburger = props => {
  return (
    <HamWrapper>
      <HamburgerMenu
          isOpen={props.isOpen}
          menuClicked={props.menuClicked}
          width={38}
          height={35}
          strokeWidth={3}
          rotate={0}
          color='white'
          borderRadius={0}
          animationDuration={0.5}
        />
    </HamWrapper>
  )
}

export default Hamburger;
