import Reactotron from 'reactotron-react-native';
import React, { Component } from 'react';
import { Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MoviesList from 'AwesomeProject/src/components/presentational/MoviesList';
import { fetchMoviesFromAPI } from 'AwesomeProject/src/actions/movies';

class MoviesListContainer extends Component {
  
  componentDidMount() {
    this.props.fetchMoviesFromAPI();
  }
  
  render() {
    return <MoviesList movies={ this.props.movies } isLoading={ this.props.isLoading } hasErrored={ this.props.hasErrored } />;
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.movies.isLoading,
    movies: state.movies.items,
    hasErrored: state.movies.hasErrored,
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchMoviesFromAPI: fetchMoviesFromAPI }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesListContainer);
