import React, { Component } from 'react'

import TarotCard from './TarotCard'

export default class TarotLayout extends Component {
  render() {
    const { cards, flipCard } = this.props

    return (
      <div className='tarot-board'>
        {cards.map( (card, index) => 
          <TarotCard key={`tarot-card-${index}`} {...card} cardIndex={index} flipCard={flipCard} /> 
        )}
      </div>
    )
  }
}
