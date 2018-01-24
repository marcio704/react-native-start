import React, { Component } from 'react';
import { ActivityIndicator, View, FlatList, Text, Image } from 'react-native';

import styles from './styles';

export default class MoviesList extends Component {
    render() {
      const { movies } = this.props;

      if (this.props.isLoading) {
        return (
          <View style={styles.loaderContainer}>
            <ActivityIndicator />
          </View>
        );
      }

      if (this.props.hasErrored) {
        return (
          <View style={styles.exceptionContainer}>
            <Text>Sorry! An unexpected error has occurred =(</Text>
          </View>
        );
      }

      return (
        <FlatList
          style={styles.container}
          data={movies}
          renderItem={({item}) =>
          <View style={styles.row}>
            <Image source={{ uri: item.image }}  style={styles.image} /> 
            <View style={styles.textsContainer}>
              <Text style={styles.title}> {item.title} </Text> 
              <Text style={styles.description}> {item.description }</Text>
            </View>
          </View>}
        />
      );
      
    }
  }
  
  