import React, {Component} from 'react'
import QuestionForm from './QuestionForm'
import { Modal, Button, ButtonToolbar } from 'react-bootstrap';

export default class NavBar extends Component{

  constructor(props) {
    super(props)

    this.state = {show: false}
  }

    showModal() {
      this.setState({show: true})
    }

    hideModal() {
      this.setState({show: false})
    }

    render() {
      return (
        <ButtonToolbar>
          <Button bsStyle="primary" onClick={this.showModal.bind(this)}>
            Launch demo modal
          </Button>

          <Modal
            {...this.props}
            show={this.state.show}
            onHide={this.hideModal}
            dialogClassName="custom-modal"
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-lg">Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Wrapped Text</h4>
              
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.hideModal.bind(this)}>Close</Button>
            </Modal.Footer>
          </Modal>
        </ButtonToolbar>
      )
    }
}