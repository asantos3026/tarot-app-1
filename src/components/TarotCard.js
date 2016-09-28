import React, { Component } from 'react'

export default class TarotCard extends Component {
  flip() {
    const { flipCard, cardIndex } = this.props

    flipCard( cardIndex )
  }

  classNames() {
    const { x, y, sideways, displayed, upright, name, cardClassName } = this.props

    const sidewaysClass = sideways ? ' sideways' : ''
    const uprightClass = upright ? '' : ' reverse-image'
    const displayClass = displayed ? ` ${cardClassName}` : ' card-back'

    return `x-offset-${x} y-offset-${y}${sidewaysClass}${uprightClass}${displayClass}`    
  }

  render() {
    return (
      <img onClick={this.flip.bind(this)} alt="" className={this.classNames()} />
    )
  }
}