import Reactotron from 'reactotron-react-native';
import React, { Component } from 'react';
import { Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MoviesList from 'movies/src/components/presentational/MoviesList';
import { fetchNextMoviesPageFromAPI } from 'movies/src/actions/movies';

class MoviesListContainer extends Component {
  
  componentDidMount() {
    this.props.fetchNextMoviesPageFromAPI();
  }
  
  render() {
    return <MoviesList movies={ this.props.movies } isLoading={ this.props.isLoading } hasErrored={ this.props.hasErrored } navigation={ this.props.navigation } fetchNextMoviesPageFromAPI= { this.props.fetchNextMoviesPageFromAPI } />;
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
  return bindActionCreators({ fetchNextMoviesPageFromAPI }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesListContainer);
