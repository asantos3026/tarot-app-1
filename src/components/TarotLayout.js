import React, { Component } from 'react'

export default class TarotLayout extends Component {
  render() {
    return (
      <div>
        <p>Tarot Layout</p>
        <p>{this.props.question}</p>
        <p>{this.props.name}</p>
      </div>
    )
  }
}