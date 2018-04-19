import React, { Component } from 'react'
import * as Style from "../Styles/index";
import { Link } from "react-router-dom";
import Typist from "react-typist";
import "../../node_modules/react-typist/dist/Typist.css"

class Landing extends Component {
  render() {
    return (
        <Style.Wrapper>
          <Style.Greeting>
            <Typist>
              Luis Lopez,
              <Typist.Delay ms={600} />
              <br />
              <Style.Span>Web</Style.Span> Developer
            </Typist>
          </Style.Greeting>
        </Style.Wrapper>
    );
  }
}

export default Landing;