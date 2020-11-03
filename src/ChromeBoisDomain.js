import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  // capture mouse's coordinates + invoke drawChromeBoiAtCoords() with them
  handleMouseMove = (event) => {
     drawChromeBoiAtCoords(event.clientX, event.clientY)
  }

  // invokes toggleCycling() on <canvas> element clicks
  handleClick = () => { toggleCycling() }

  // invokes resize() when 'a' or 's' is pressed
  handleKeyPress = (event) => {
    if (event.key === "a") {
      resize("+")
    } else if (event.key === "s") {
      resize("-")
    }
  }

  render() {
    return (
      <canvas
        onMouseMove={this.handleMouseMove}
        onClick={this.handleClick}
        onKeyPress={this.handleKeyPress}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
