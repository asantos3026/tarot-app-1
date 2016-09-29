import React, { Component } from 'react';
import { Row, Navbar, Grid } from 'react-bootstrap';
import _ from 'lodash';

import logo from './logo.gif';
import './App.css';

import QuestionForm from './components/QuestionForm.js'
import TarotContainer from './components/TarotContainer.js'
import NavBar from './components/NavBar.js'
import CARDS from './cardinfo'
// console.log( CARDS.map( c => `.${c.cardClassName} { background-image: url("${c.image}"); }` ).join( "\n"))

import { CELTIC_CROSS, TETRAKTYS, YOU_ME_US, CAREER_PATH } from './layouts'
import { CELTIC_CROSS_DES, TETRAKTYS_DES, YOU_ME_US_DES, CAREER_PATH_DES } from './positioninfo'

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
            <NavBar />
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
    const layout = CELTIC_CROSS
    const position = CELTIC_CROSS_DES

    return  CARDS.slice( 0, layout.length ).map( (card, index) => 
      Object.assign( {}, card, { 
        displayed: false, 
        upright: _.sample([ true, false ]),
        positionDescription: position[ index ]}, 
        layout[ index ] 
      )
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
