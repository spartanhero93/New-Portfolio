import React, { Component } from 'react'
import {BrowserRouter, Route} from "react-router-dom";
import Landing from "./Pages/Landing"
import Particles from "react-particles-js";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Particles
            params={{
              particles: {
                number: {
                  value: 30
                },
                color: {
                  value: "#4EB1BA"
                },
                shape: {
                  type: "circle",
                  stroke: {
                    width: 0,
                    color: "#000000"
                  },
                  polygon: {
                    nb_sides: 1
                  }
                },
                line_linked: {
                  enable: true,
                  shadow: {
                    enable: false
                  }
                },
                opacity: {
                  value: 1,
                  random: false,
                  anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                  }
                },
                size: {
                value: 8,
                random: false,
                anim: {
                  enable: true,
                  speed: 10,
                  size_min: 1,
                  sync: false
                  }
                }
              },
               interactivity: {
                detect_on: "canvas",
                events: {
                  onhover: {
                    enable: true,
                    mode: "repulse"
                  },
                  onclick: {
                    enable: true,
                    mode: "push"
                  },
                  resize: false
                },
                modes: {
                  grab: {
                    distance: 100,
                    line_linked: {
                      opacity: 1
                    }
                  },
                  bubble: {
                    distance: 800,
                    size: 80,
                    duration: 2,
                    opacity: 0.8,
                    speed: 3
                  },
                  repulse: {
                    distance: 100,
                    duration: 0.2
                  },
                  push: {
                    particles_nb: 1
                  },
                  remove: {
                    particles_nb: 2
                  }
                }
              },
            }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              zIndex: 0
            }}
        />
        <Route exact path={"/"} component={Landing} />
        </div>
      </BrowserRouter>
    )
  }
}

export default Router;