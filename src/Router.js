import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Landing from './Pages/Landing'

class Router extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Route exact path={'/'} component={Landing} />
        </div>
      </BrowserRouter>
    )
  }
}

export default Router
