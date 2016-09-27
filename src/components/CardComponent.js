import React, { Component } from 'react'
import TarotLayout from './TarotLayout'
import CARDS from '../cardinfo'

export default class CardComponent extends Component {
  render() {
    return (
     <img className="img-rounded" alt="" src={this.props.image} />
    )
  }
}