import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props)
  {
    super(props)

    this.state = {
      movies: []
    }

    // hey, go grab all of the stuff from that webpage
    axios.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b6fbc7f3f313bd395902af464ef47262")
      .then((response) => {
        // handle success
        this.setState({movies: response.data.results}); // this is our movies
      })
    console.log('right after that axios get stuff!')
    // then put it into this.state.movies
  }

  render() {
    console.log('Render function!', this.state.movies);
    return (
      <div className="App">
        {this.state.movies.map((movie) => {
          return (
          <div>
            <h1>{movie.title}</h1>
            <img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt="Movie Poster" />
            <p>{movie.overview}</p>
          </div>
          )
        })}
      </div>
    );
  }
}

export default App;
