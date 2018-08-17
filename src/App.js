import React, { Component } from 'react'
import Navbar from './components/Navbar'

import Particles2 from './Particles'
import MainRouter from './components/Pages/index'

const App = props => (
  <Particles2>
    <h2>Not much</h2>
    <MainRouter />
  </Particles2>
)

export default App
