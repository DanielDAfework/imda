import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class MovieItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Container fluid={true}>
          <Row>
            <Col xs={4} md={4}>
              <br />
              <h1>{this.props.title} </h1>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={4}>
              <img height="222" width="150" src={this.props.poster}></img>
            </Col>
            <Col xs={6} md={4}>
              <h2>Release: {this.props.year}</h2>
              <h6>Genre: {this.props.genre}</h6>
              <h6>Runtime: {this.props.runTime}</h6>
              <h5>{this.props.shortPlot}</h5>
            </Col>
            <Col xs={6} md={4}>
              <h2>Metacritic</h2>
              <br />
              <h1>{this.props.rating}</h1>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MovieItem;
