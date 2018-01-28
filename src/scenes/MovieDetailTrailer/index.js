import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, WebView } from 'react-native';

import { styles } from './styles';

export default class  MovieDetailTrailerScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Trailer',
  };
  
  render() {
    const { movie } = this.props.navigation.state.params;

    return (
      <View style={ styles.container }>
          <WebView source={{uri: movie.trailer}} />
      </View>
    );
  };
};
