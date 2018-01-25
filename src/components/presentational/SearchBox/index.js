import React, { Component } from 'react';
import { View, TextInput, Image } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import styles from './styles';
import { filterMoviesByText } from 'movies/src/actions/movies';

class SearchBox extends Component {
    render() {
        return (
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(text) => this.props.filterMoviesByText(text)}
            />
          );
    };
}

const mapStateToProps = (state) => {
    return {};
  };
  
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ filterMoviesByText: filterMoviesByText }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
  