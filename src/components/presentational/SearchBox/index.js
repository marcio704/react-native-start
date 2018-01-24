import React, { Component } from 'react';
import { View, TextInput, Image } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import styles from './styles';
import { filterMoviesByTitle } from 'AwesomeProject/src/actions/movies';

class SearchBox extends Component {

    render() {
        return (
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(text) => this.props.filterMoviesByTitle({text})}
            />
          );
    }
}

const mapStateToProps = (state) => {
    return {
        title_filter: state.movies.title_filter,
    }
  };
  
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ filterMoviesByTitle: filterMoviesByTitle }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
  