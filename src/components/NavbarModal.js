import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'

class NavbarModal extends Component {
  hideModal() {
    this.props.hideModal()
  }

  render() {
    return (
      <Modal show={true} onHide={this.hideModal.bind(this)}
        dialogClassName="custom-modal">

        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">Modal heading</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <h4>Question</h4>
          {this.props.children}
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={this.hideModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default NavbarModal