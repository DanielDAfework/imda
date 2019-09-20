import React from "react";
import logo from "./logo.svg";
import MovieItem from "./display/MovieItem";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";
import MovieGenerator from "./display/MovieGenerator";

class App extends React.Component {
  state = {
    movieData: []
  };

  async componentDidMount() {
    //gets the topTrending movies

    const res1 = await axios.get(
      "https://api.themoviedb.org/3/trending/all/day?api_key=a5ac24659b20bb6310db9227444f29dd"
    );

    //console.log(res1.data.results);

    //loop 20 times. 1 for each elmenent in results
    //nab the title and chuck it into the other api
    //update movieData to be an array of arrays of the other info
    //then pass that into movieGenerator
    //movieGenerator loops through the arrays and populautes movieItem

    var arr = [];

    var i;
    for (i = 0; i < res1.data.results.length; i++) {
      //const rest2 = await axios.get('');
      var title = res1.data.results[i].title;
      if (typeof title !== "undefined") {
        title = title.replace(/ /g, "%20");
      }
      const res2 = await axios.get(
        `http://www.omdbapi.com/?t=${title}&apikey=b2ffd892`
      );
      if (parseInt(res2.data.Year, 10) >= 2019) {
        arr.push(res2.data);
      }
      console.log(res2.data);
    }

    this.setState({ movieData: arr });
  }

  render() {
    return (
      <div className="App">
        {/* <MovieItem
          title="The Incredibles"
          year="2004"
          rating="90%"
          shortPlot="A family of undercover superheroes,
         while trying to live the quiet suburban life, 
         are forced into action to save the world."
          runTime="115 min"
          genre="Animation"
          poster="https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_SX300.jpg"
          rated="PG"
          director="Brad Bird"
        />
        <MovieItem
          title="Avatar"
          year="2009"
          rating="83%"
          shortPlot="A paraplegic Marine dispatched to the moon Pandora
       on a unique mission becomes torn between following his orders 
       and protecting the world he feels is his home."
          runTime="162 min"
          genre="Action"
          poster="https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg"
          rated="PG-13"
          director="James Cameron"
        />
        {/*<ItemGenerator movieData={this.state.movieData} />*/}
        <h1>Currently Trending Movies</h1>
        <MovieGenerator movieData={this.state.movieData} />
      </div>
    );
  }
}

export default App;
