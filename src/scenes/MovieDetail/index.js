import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Button, Text, View, Image, Linking, WebView } from 'react-native';

import { styles } from './styles';

export default class  MovieDetailScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Details',
  };
  
  render() {
    const { navigate } = this.props.navigation;
    const { movie } = this.props.navigation.state.params;

    return (
      <View style={ styles.container }>
          <View style={ styles.upper }>
            <Image source={{ uri: movie.image }}  style={styles.image} /> 
            <View style={ styles.textsContainer }>
              <View style={ styles.titleDescription }>
                <Text style={ styles.title }> { movie.title } </Text> 
                <Text style={ styles.shortDescription }> { movie.short_description }</Text>
              </View>
              <View style={ styles.trailer }>
                <Button title="See the trailer" onPress={ () => navigate('MovieDetailTrailer', {'movie': movie}) } />
              </View>
            </View>
          </View>
          <View style={ styles.bottom }>
            <ScrollView>
              <Text style={ styles.description }>{ movie.description }</Text>
            </ScrollView>
          </View>
      </View>
    );
  };
};
