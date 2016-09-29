import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Form, FormGroup, FormControl, Col, Button, ControlLabel} from 'react-bootstrap'

export default class QuestionForm extends Component {
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
