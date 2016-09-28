import React, { Component } from 'react';
import { Row, Navbar, Grid } from 'react-bootstrap';

import _ from 'lodash'

import logo from './logo.gif';
import './App.css';

import QuestionForm from './components/QuestionForm.js'
import TarotContainer from './components/TarotContainer.js'

import CARDS from './cardinfo'
// console.log( CARDS.map( c => `.${c.cardClassName} { background-image: url("${c.image}"); }` ).join( "\n"))

import { CELTIC_CROSS, CELTIC_PYRAMID, YOU_ME_US } from './layouts'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { question: '', name: '', formSubmitted: false, cards: [] }
  }

  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#"><img src={logo} className="App-logo" alt="logo" /></a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>

        <Grid>
          <Row>
            <h2>React Tarot App</h2>
          </Row>

          {this.getChild()}
        </Grid>
      </div>
    )
  }

  getChild() {
    if( this.state.formSubmitted ) {
      return <TarotContainer {...this.state} flipCard={this.displayCard.bind(this)} />
    } else {
      return <QuestionForm submitForm={this.questionFormSubmitted.bind(this)} />
    }
  }

  questionFormSubmitted(question, name) {
    this.setState({ question, name, formSubmitted: true, cards: this.drawCards() })
  }

  drawCards() {
    const layout = YOU_ME_US

    return  CARDS.slice( 0, layout.length ).map( (card, index) => 
      Object.assign( {}, card, { displayed: false, upright: _.sample([ true, false ]) }, layout[ index ] )
    )
  }

  displayCard( index ) {
    const { cards } = this.state

    const updatedCards = [ 
      ...cards.slice( 0, index ),
      Object.assign( {}, cards[ index ], { displayed: true }),
      ...cards.slice( index + 1 )
    ]

    this.setState({ cards: updatedCards })
  }
}

export default App;
