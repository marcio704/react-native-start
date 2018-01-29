import React, { Component } from 'react';
import { View, TextInput, Image } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import styles from './styles';
import { filterMoviesByText } from 'movies/src/actions/movies';

class SearchBox extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('movies/src/resources/images/magnifying_glass.png')} style={styles.image} />
                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => this.props.filterMoviesByText(text)}
                />
            </View>
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
  