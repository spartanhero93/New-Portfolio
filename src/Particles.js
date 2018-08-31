import React, { Component } from 'react'
import Particles from 'react-particles-js'
import { fontColor, secondary } from './styleVariables'

class Particles2 extends Component {
  render () {
    return (
      <React.Fragment>
        <Particles
          params={{
            particles: {
              number: {
                value: 80,
                density: {
                  enable: true
                }
              },
              color: {
                value: fontColor
              },
              opacity: {
                value: 0.8,
                random: true,
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false
                }
              },
              size: {
                value: 7,
                random: true,
                anim: {
                  enable: true,
                  speed: 5,
                  size_min: 1,
                  sync: false
                }
              },
              shape: {
                type: 'circle',
                stroke: {
                  width: 0
                },
                polygon: {
                  nb_sides: 0
                }
              },
              move: {
                enable: true,
                speed: 3,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
                }
              },
              line_linked: {
                enable: false,
                shadow: {
                  enable: false,
                  color: '#3CA9D1',
                  blur: 5
                }
              }
            },
            interactivity: {
              detect_on: 'canvas',
              events: {
                onhover: {
                  enable: true,
                  mode: 'push'
                },
                onclick: {
                  enable: true,
                  mode: 'repulse'
                },
                resize: true
              },
              modes: {
                repulse: {
                  distance: 60,
                  duration: 4
                }
              }
            }
          }}
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: secondary,
            color: fontColor,
            zIndex: '-20',
            position: 'absolute',
            top: 0,
            bottom: 0
          }}
        />
        {this.props.children}
      </React.Fragment>
    )
  }
}

export default Particles2
