import React, { Component } from 'react'
import TarotLayout from './TarotLayout'
import DescriptionContainer from './DescriptionContainer'
import { Form, FormGroup, FormControl, Col, Button, ControlLabel} from 'react-bootstrap'


export default class TarotContainer extends Component {
  render() {
    const { question, name, cards } = this.props

    return (
      <div>
        <h1>{question}</h1>
        <h2>{name}</h2>
        <Button type="button" onClick={this.flipNextCard.bind(this)}>
          Get your free reading
        </Button>
        <TarotLayout cards={cards} flipCard={this.props.flipCard} />
        <DescriptionContainer cards={cards} />
      </div>
    )
  }
  flipNextCard() {
    this.props.cards.forEach(card => {
      console.log(card)
    })
  }
}
