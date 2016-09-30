import React, { Component } from 'react'
import TarotLayout from './TarotLayout'
import DescriptionContainer from './DescriptionContainer'
import { Grid } from 'react-bootstrap';


export default class TarotContainer extends Component {
  render() {
    const { question, name, cards } = this.props

    return (
      <Grid>
        <h1>{question}</h1>
        <h2>{name}</h2>

        <TarotLayout cards={cards} flipCard={this.props.flipCard} />
        <DescriptionContainer cards={cards} />
      </Grid>
    )
  }
}
