import React, { Component } from 'react'
import * as Style from "../Styles/index";
import { Link } from "react-router-dom";
import Typist from "react-typist";
import "../../node_modules/react-typist/dist/Typist.css"
import Hamburger from "../Components/Hamburger";

class Landing extends Component {
  state= {
    isOpen: false
  }

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
      <Style.Wrapper>
        <Hamburger 
        isOpen={this.state.isOpen}
        menuClicked={this.handleClick} 
        />
        <Style.Greeting isOpen={this.state.isOpen}>
            <Typist>
              Welcome.
            <Typist.Delay ms={600} />
              <br />
              Join Me.
            </Typist>
        </Style.Greeting>
        <Style.Nav isOpen={this.state.isOpen}>
          <Style.Atag href="/Work">Work</Style.Atag>
          <Style.Atag>About</Style.Atag>
          <Style.Atag>Contact</Style.Atag>
        </Style.Nav>
      </Style.Wrapper>
    );
  }
}

export default Landing;