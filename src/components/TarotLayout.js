import React, { Component } from 'react'
import { Row, Col, Grid } from 'react-bootstrap';

export default class TarotLayout extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={3} md={2}></Col>
            <Col xs={3} md={2}></Col>
            <Col xs={3} md={2}></Col>
            <Col xs={3} md={2}><img onClick={() => this.props.flipCard(0)} alt="TODO" className="img-rounded" src="http://placehold.it/171x180" /></Col>
            <Col xs={3} md={2}><img onClick={() => this.props.flipCard(1)} alt="TODO" className="img-rounded" src="http://placehold.it/171x180" /></Col>
          </Row>
          <Row className="show-grid">
            <Col xs={3} md={2}></Col>
            <Col xs={3} md={2}><img onClick={() => this.props.flipCard(2)} alt="TODO" className="img-rounded" src="http://placehold.it/171x180" /></Col>
            <Col xs={3} md={2}></Col>
            <Col xs={3} md={2}><img onClick={() => this.props.flipCard(3)} alt="TODO" className="img-rounded" src="http://placehold.it/171x180" /></Col>
          </Row>
           <Row className="show-grid">
            <Col xs={3} md={2}><img onClick={() => this.props.flipCard(4)} alt="TODO" className="img-rounded" src="http://placehold.it/171x180" /></Col>
            <Col xs={3} md={2}><img onClick={() => this.props.flipCard(5)} alt="TODO" className="img-rounded" src="http://placehold.it/171x180" /></Col>
            <Col xs={3} md={2}><img onClick={() => this.props.flipCard(6)} alt="TODO" className="img-rounded" src="http://placehold.it/171x180" /></Col>
            <Col xs={3} md={2}><img onClick={() => this.props.flipCard(7)} alt="TODO" className="img-rounded" src="http://placehold.it/171x180" /></Col>
          </Row>
           <Row className="show-grid">
            <Col xs={3} md={2}></Col>
            <Col xs={3} md={2}><img onClick={() => this.props.flipCard(8)} alt="TODO" className="img-rounded" src="http://placehold.it/171x180" /></Col>
            <Col xs={3} md={2}></Col>
            <Col xs={3} md={2}><img onClick={() => this.props.flipCard(9)} alt="TODO" className="img-rounded" src="http://placehold.it/171x180" /></Col>
          </Row>
        </Grid>
      </div>
    )
  }
}