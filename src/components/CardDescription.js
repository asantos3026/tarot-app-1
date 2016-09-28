import React, { Component } from 'react'

export default class CardDescription extends Component {
  render() {
    const { name, upright } = this.props

    return (
      <div className='card-description'>
        <h4>{name}</h4>
        <p>{upright ? this.props.normalDescription : this.props.reverseDescription} </p>
      </div>
    )
  }
}
