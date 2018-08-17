import React, { Component } from 'react'
import Particles from 'react-particles-js'

const primary = '#4EB1BA'
const secondary = '#222930'
const fontColor = '#E9E9E9'

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
                value: 1,
                random: true,
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0,
                  sync: false
                }
              },
              size: {
                value: 4,
                random: true,
                anim: {
                  enable: true,
                  speed: 5,
                  size_min: 1,
                  sync: false
                }
              },
              line_linked: {
                enable: false,
                shadow: {
                  enable: false,
                  color: '#3CA9D1',
                  blur: 5
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
              }
            },
            interactivity: {
              detect_on: 'canvas',
              events: {
                onhover: {
                  enable: true,
                  mode: 'repulse'
                },
                onclick: {
                  enable: false,
                  mode: 'push'
                },
                resize: true
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
