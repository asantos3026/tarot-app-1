import React, { Component } from 'react'
import { Row, Col, Grid } from 'react-bootstrap'
import CARDS from '../cardinfo'

export default class TarotLayout extends Component {
  render() {
    return (
      <div>
      
        <Grid>
          <Row className="show-grid">
            <Col xs={3} md={2}></Col>
            <Col xs={3} md={2}></Col>
            <Col xs={3} md={2}></Col>
            <Col xs={3} md={2}></Col>
            <Col xs={3} md={2}></Col>
          </Row>
          <Row className="show-grid">
            <Col xs={3} md={2}></Col>
            <Col xs={3} md={2}><img onClick={() => this.props.flipCard(2)} alt="" src={this.props.image}/></Col>
            <Col xs={3} md={2}></Col>
            <Col xs={3} md={2}><img onClick={() => this.props.flipCard(3)} alt="" className="card-back" /></Col>
          </Row>
           <Row className="show-grid">
            <Col xs={3} md={2}><img onClick={() => this.props.flipCard(4)} alt="" className="card-back" /></Col>
            <Col xs={3} md={2}><img onClick={() => this.props.flipCard(5)} alt="" className="card-back" /></Col>
            <Col xs={3} md={2}><img onClick={() => this.props.flipCard(6)} alt="" className="card-back" /></Col>
            <Col xs={3} md={2}><img onClick={() => this.props.flipCard(7)} alt="" className="card-back" /></Col>
          </Row>
           <Row className="show-grid">
            <Col xs={3} md={2}></Col>
            <Col xs={3} md={2}><img onClick={() => this.props.flipCard(8)} alt="" className="card-back" /></Col>
            <Col xs={3} md={2}></Col>
            <Col xs={3} md={2}><img onClick={() => this.props.flipCard(9)} alt="" className="card-back" /></Col>
          </Row>
        </Grid>
      </div>
    )
  }
}