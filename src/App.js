import React, { Component } from 'react';
import { Row, Navbar, Nav, NavItem, Grid } from 'react-bootstrap';
import _ from 'lodash';

// import logo from './logo.gif';
import './App.css';

import QuestionForm from './components/QuestionForm.js'
import TarotContainer from './components/TarotContainer.js'
import NavbarModal from './components/NavbarModal.js'
import CARDS from './cardinfo'
// console.log( CARDS.map( c => `.${c.cardClassName} { background-image: url("${c.image}"); }` ).join( "\n"))

import { CELTIC_CROSS } from './layouts'
import { CELTIC_CROSS_DES } from './positioninfo'

// import { CELTIC_CROSS, TETRAKTYS, YOU_ME_US, CAREER_PATH } from './layouts'
// import { CELTIC_CROSS_DES, TETRAKTYS_DES, YOU_ME_US_DES, CAREER_PATH_DES } from './positioninfo'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { question: '', name: '', formSubmitted: false, cards: [], showNavbarModal: false }
  }

  showNavbarModal() {
    this.setState({ showNavbarModal: true })
  }

  hideNavbarModal() {
    this.setState({ showNavbarModal: false })
  }

  render() {
    return (
      <div>
       <Navbar >
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">React Tarot</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem onSelect={this.showNavbarModal.bind(this)}>What answers do you seek?</NavItem>
              <NavItem eventKey={2} href="#">Link</NavItem>
            </Nav>
          </Navbar.Collapse>
       </Navbar>

        <Grid>
          <Row>
            <h2>React Tarot App</h2>
          </Row>

          {this.getChild()}
        </Grid>
        {this.getModal()}
      </div>
    )
  }

  getChild() {
    if( this.state.formSubmitted ) {
      return <TarotContainer {...this.state} flipCard={this.displayCard.bind(this)} />
    } else {
      return <div>Landing page content</div>
    }
  }

  getModal() {
    if( this.state.showNavbarModal ) {
      return ( 
        <NavbarModal hideNavbarModal={this.hideNavbarModal.bind(this)}> 
          <QuestionForm submitForm={this.questionFormSubmitted.bind(this)} />
        </NavbarModal>
      ) 
    } else {
      return <div></div>
    }
  }

  questionFormSubmitted(question, name) {
    this.setState({ question, name, formSubmitted: true, cards: this.drawCards(), showNavbarModal: false })
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

    if( index < cards.length ) {
      const updatedCards = [ 
        ...cards.slice( 0, index ),
        Object.assign( {}, cards[ index ], { displayed: true }),
        ...cards.slice( index + 1 )
      ]

      this.setState({ cards: updatedCards })
    }

  }
}

export default App;
