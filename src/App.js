import React, { Component } from 'react';
import { Row, Navbar, Grid } from 'react-bootstrap';
import logo from './logo.gif';
import './App.css';
import QuestionForm from './components/QuestionForm.js'
import TarotLayout from './components/TarotLayout.js'

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
      return <TarotLayout {...this.state} />
    } else {
      return <QuestionForm submitForm={this.questionFormSubmitted.bind(this)} />
    }
  }

  questionFormSubmitted(question, name) {
    this.setState({ question, name, formSubmitted: true })
  }
}

export default App;
