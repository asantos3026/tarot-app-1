import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Form, FormGroup, FormControl, Col, Button, ControlLabel, DropdownButton, MenuItem } from 'react-bootstrap'

export default class QuestionForm extends Component {
  selectLayout(eventKey) { 
    // call drawCards(eventKey) somehow
    this.props.redrawCards(eventKey)
    console.log(eventKey, "!!!")

  }

  render() {
    return (
      <Form horizontal>
        <FormGroup controlId="formHorizontalQuestion">
          <Col componentClass={ControlLabel} sm={2}>
            Question
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="Question" ref="question" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalName">
          <Col componentClass={ControlLabel} sm={2}>
            Name
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="Name" ref="name" />
          </Col>
        </FormGroup>

        <DropdownButton title="choose a layout" id="layoutDropdown">
             <MenuItem eventKey="CELTIC_CROSS" onSelect={this.selectLayout.bind(this)}>Celtic Cross</MenuItem>
             <MenuItem divider />
             <MenuItem eventKey="TETRAKTYS" onSelect={this.selectLayout.bind(this)}>Tetraktys</MenuItem>
             <MenuItem divider />
             <MenuItem eventKey="YOU_ME_US" onSelect={this.selectLayout.bind(this)}>You, Me, Us</MenuItem>
             <MenuItem divider />
             <MenuItem eventKey="CAREER_PATH" onSelect={this.selectLayout.bind(this)}>Career Path</MenuItem>
        </DropdownButton>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit" onClick={this.submitClicked.bind(this)}>
              Perform Reading
            </Button>
          </Col>
        </FormGroup>
      </Form>
    )
  }

  submitClicked(event) {
    event.preventDefault()

    const question =  ReactDOM.findDOMNode(this.refs.question).value
    const name =  ReactDOM.findDOMNode(this.refs.name).value

    this.props.submitForm( question, name )
  }

}
