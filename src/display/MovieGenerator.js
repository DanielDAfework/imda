import React from "react";
import ItemGenerator from "./ItemGenerator";
import "bootstrap/dist/css/bootstrap.min.css";

class MovieGenerator extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.movieData.map(user => (
          <ItemGenerator key={user.imdbID} movieData={user} />
        ))}
      </div>
    );
  }
}

export default MovieGenerator;
