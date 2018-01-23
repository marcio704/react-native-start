import React, { Component } from 'react';
import { ActivityIndicator, View, FlatList, Text, Image } from 'react-native';

import styles from './styles';

export default class MoviesList extends Component {
    render() {
      const { movies } = this.props;

      if (movies.rejected) {
        return <Text>Oops... Could not fetch Movies!</Text>
      }

      if (movies.fulfilled) {
        return (
          <FlatList
            style={styles.container}
            data={movies.value}
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
      
      // movies.pending
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      );
      }
  }
  
  