import React from 'react';
import './App.css';
import axios from 'axios';

class Movie extends React.Component {
  constructor(props)
  {
    super(props)

    this.state = {
      movie: {
          genres: []
      }
    }

    // hey, go grab all of the stuff from that webpage
    axios.get("https://api.themoviedb.org/3/movie/" + this.props.movieId + "?api_key=b6fbc7f3f313bd395902af464ef47262")
      .then((response) => {
        // handle success
        this.setState({movie: response.data}); // this is our movies
      })
    console.log('right after that axios get stuff!')
    // then put it into this.state.movies
  }

  selectMovie(id)
  {
    this.setState({movieId: id})
  }

  render() {
    return (
        <div>
            {this.state.movie.title}
            <ul>
            {this.state.movie.genres.map((genre) => {
                return <li>{genre.name}</li>
            })}
            </ul>
            <button onClick={this.props.goBack}>Go back!</button>
        </div>
    );
  }
}

export default Movie;
