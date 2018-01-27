import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Button, Text, View, Image, Linking } from 'react-native';

import { styles, nav_styles } from './styles';

export default class  MovieDetailScreen extends Component {
  static navigationOptions = {
    title: 'Details',
    headerStyle: nav_styles.headerStyle,
    headerTitleStyle: nav_styles.headerTitleStyle,
  };
  
  render() {
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
                <Button title="See the trailer" onPress={ () => { Linking.openURL(movie.trailer)} } />
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
