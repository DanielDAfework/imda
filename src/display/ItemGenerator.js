import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class ItemGenerator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var yearStyle = {
      fontSize: 30
    };
    return (
      <div>
        <Container fluid={true}>
          {/* Row 1*/}
          <Row>
            {/* Left Column */}
            <Col xs={4} md={4}>
              <br />
              <h1>
                {this.props.movieData.Title}{" "}
                <span style={yearStyle}>({this.props.movieData.Year})</span>
              </h1>
            </Col>
          </Row>
          {/* Row 2*/}
          <Row>
            <Col xs={6} md={4}>
              <img
                height="222"
                width="150"
                src={this.props.movieData.Poster}
              ></img>
              <br />
              <br />
              <h4>{this.props.movieData.Rated}</h4>
            </Col>
            {/* Middle Column */}
            <Col xs={6} md={4}>
              <h6>Genre: {this.props.movieData.Genre}</h6>
              <h6>Runtime: {this.props.movieData.Runtime}</h6>
              <br />
              <h5>{this.props.movieData.Plot}</h5>
              <br />
              <h4>Director: {this.props.movieData.Director}</h4>
            </Col>
            {/* Right Column */}
            <Col xs={6} md={4}>
              <h2>Metacritic</h2>
              <br />
              <h1>{this.props.movieData.Metascore}</h1>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ItemGenerator;
