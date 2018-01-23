import React, { Component } from 'react';
import { Text } from 'react-native';
import { bindActionCreators } from 'redux';
import connect from 'react-redux-fetch';
// import { connect } from 'react-redux';

import MoviesList from 'AwesomeProject/src/components/presentational/MoviesList';
import { fetchMoviesFromAPI } from 'AwesomeProject/src/actions/movies';
import { MOVIES_API_URL } from 'AwesomeProject/src/settings';

class MoviesListContainer extends Component {
  
  componentDidMount() {
    this.props.dispatchAllMoviesGet();
  }
  
  render() {
    return <MoviesList movies={ this.props.allMoviesFetch } />;
  }
}

/*
const mapStateToProps = (state) => {
  return {
    isLoading: state.movies.isLoading,
    movies: state.movies.all,
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchMoviesFromAPI: fetchMoviesFromAPI }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesListContainer);
*/

export default connect([{
  resource: 'allMovies',
  method: 'get',
  request: {
      url: MOVIES_API_URL
  }
}])(MoviesListContainer);
