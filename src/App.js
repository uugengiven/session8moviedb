import React from 'react';
import './App.css';
import MovieList from './MovieList';
import Movie from './Movie';

class App extends React.Component {
  constructor(props)
  {
    super(props);

    this.state = {
      movieId: 0
    }

    this.setId = this.setId.bind(this);
  }

  setId(movieId)
  {
    this.setState({movieId: movieId});
  }

  render() {
    if (this.state.movieId === 0)
    {
      return <MovieList setId={this.setId} />;
    }
    else
    {
      return <Movie movieId={this.state.movieId} goBack={() => {this.setId(0)}} />;
    }
  }
}

export default App;
