import React, { Component } from 'react'
import { Wrapper } from '../Styles';
import TextGreet from "../Components/index";

class Landing extends Component {
  render() {
    return (
        <Wrapper>
          <TextGreet/>
        </Wrapper>
    );
  }
}

export default Landing;