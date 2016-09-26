import React, { Component } from 'react'
import { Row, Col, Grid } from 'react-bootstrap';

export default class TarotLayout extends Component {
  render() {
    return (
      <div>
        <p>Tarot Layout</p>
        <p>{this.props.question}</p>
        <p>{this.props.name}</p>
        <Grid>
          <Row className="show-grid">
            <Col xs={4} md={3}>
              <img src="http://placehold.it/171x180" />
            </Col>
            <Col xs={4} md={3}>{'Col xs={4} md={3}'}</Col>
            <Col xs={4} md={3}>{'Col xs={4} md={3}'}</Col>
            <Col xs={4} md={3}>{'Col xs={4} md={3}'}</Col>
          </Row>
           <Row className="show-grid">
            <Col xs={4} md={3}>{'Col xs={4} md={3}'}</Col>
            <Col xs={4} md={3}>{'Col xs={4} md={3}'}</Col>
            <Col xs={4} md={3}>{'Col xs={4} md={3}'}</Col>
            <Col xs={4} md={3}>{'Col xs={4} md={3}'}</Col>
          </Row>
           <Row className="show-grid">
            <Col xs={4} md={3}>{'Col xs={4} md={3}'}</Col>
            <Col xs={4} md={3}>{'Col xs={4} md={3}'}</Col>
            <Col xs={4} md={3}>{'Col xs={4} md={3}'}</Col>
            <Col xs={4} md={3}>{'Col xs={4} md={3}'}</Col>
          </Row>
        </Grid>
      </div>
    )
  }
}