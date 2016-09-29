import React, { Component } from 'react'

import TarotCard from './TarotCard'

export default class TarotLayout extends Component {
  constructor( props ) {
    super( props )

    this.state = { currentIndex: 0 }
  }

  showNextCard() {
    const { flipCard } = this.props 

    flipCard( this.state.currentIndex )

    this.setState({ currentIndex: this.state.currentIndex + 1 })
  }

  render() {
    const { cards } = this.props

    return (
      <div className='tarot-board' onClick={this.showNextCard.bind(this)}>
        {cards.map( (card, index) => 
          <TarotCard key={`tarot-card-${index}`} {...card} cardIndex={index} /> 
        )}
      </div>
    )
  }
}
