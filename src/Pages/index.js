import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Home from './Home'
import Work from './Work'
import About from './About'
import './transitions.css'

const MainRouter = () => (
  <Router>
    <Route
      render={({ location }) => (
        <div>
          <div>
            <TransitionGroup>
              <CSSTransition key={location.key} classNames='fade' timeout={300}>
                <Switch location={location}>
                  <Route exact path='/' component={Home} />
                  <Route path='/work' component={Work} />
                  <Route path='/about' component={About} />
                  <Route render={() => <div>Not Found</div>} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </div>
        </div>
      )}
    />
  </Router>
)

export default MainRouter
