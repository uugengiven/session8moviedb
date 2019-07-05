import React from 'react';
import './App.css';
import axios from 'axios';

class MovieList extends React.Component {
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

  selectMovie(id)
  {
    this.setState({movieId: id})
    console.log(id)
  }

  render() {
    return (
      <div className="List">
        {this.state.movies.map((movie) => {
          return (
          <div className={this.state.movieId === movie.id ? "movie selected" : "movie"} onClick={() => {this.props.setId(movie.id)}}>
            <h1>{movie.title}</h1>
            <img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt="Movie Poster" />
            <p>{movie.overview}</p>
            {(this.state.movieId === movie.id) && 
              <h1>Controls to play the movie</h1>}
          </div>
          )
        })}
      </div>
    );
  }
}

export default MovieList;
