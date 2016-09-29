import React, { Component } from 'react';
import { Modal, Button, Button } from 'react-bootstrap';
import QuestionForm from './QuestionForm'


const NavbarModal = React.createClass({
  getInitialState() {
    return {show: false}
  }

  showModal() {
    this.setState({show: true})
  }

  hideModal() {
    this.setState({show: false})
  }

  render() {
    return (
      <div>
        <a href="#" onClick={this.showModal}>
          What answers do you seek?
        </a>

        <Modal
          {...this.props}
          show={this.state.show}
          onHide={this.hideModal}
          dialogClassName="custom-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">React Tarot App</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Wrapped Text</h4>
            <QuestionForm />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.hideModal.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});

export default NavbarModal