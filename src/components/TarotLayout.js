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
            <Col xs={3} md={2}></Col>
            <Col xs={3} md={2}></Col>
            <Col xs={3} md={2}></Col>
            <Col xs={3} md={2}><img className="img-rounded" src="http://placehold.it/171x180" /></Col>
          </Row>
          <Row className="show-grid">
            <Col xs={3} md={2}></Col>
            <Col xs={3} md={2}><img className="img-rounded" src="http://placehold.it/171x180" /></Col>
            <Col xs={3} md={2}></Col>
            <Col xs={3} md={2}><img className="img-rounded" src="http://placehold.it/171x180" /></Col>
          </Row>
           <Row className="show-grid">
            <Col xs={3} md={2}><img className="img-rounded" src="http://placehold.it/171x180" /></Col>
            <Col xs={3} md={2}><img className="img-rounded" src="http://placehold.it/171x180" /></Col>
            <Col xs={3} md={2}><img className="img-rounded" src="http://placehold.it/171x180" /></Col>
            <Col xs={3} md={2}><img className="img-rounded" src="http://placehold.it/171x180" /></Col>
          </Row>
           <Row className="show-grid">
            <Col xs={3} md={2}></Col>
            <Col xs={3} md={2}><img className="img-rounded" src="http://placehold.it/171x180" /></Col>
            <Col xs={3} md={2}></Col>
            <Col xs={3} md={2}><img className="img-rounded" src="http://placehold.it/171x180" /></Col>
          </Row>
        </Grid>
      </div>
    )
  }
}