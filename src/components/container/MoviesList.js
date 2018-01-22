import React, { Component } from 'react';

import MoviesList from 'AwesomeProject/src/components/presentational/MoviesList';

export default class MoviesListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    return fetch('http://www.mocky.io/v2/5a6543362b0000cd19f414d7')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          movies: responseJson,
        }, function() {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return <MoviesList state={ this.state }/>;
  }
}
