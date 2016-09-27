import React, { Component } from 'react'
import CardDescription from './CardDescription'

export default class DescriptionContainer extends Component {
  render() {
    return (
      <div>
        <h2>Description</h2>
        {this.showCards()}
      </div>
    )
  }

  showCards() {
    const { cards } = this.props

    return cards.filter( card => card.displayed ).map( (card, index) =>
      <CardDescription {...card} key={`description-${index}`} />
    )
  }
}
