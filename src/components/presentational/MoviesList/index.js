import React, { Component } from 'react';
import { ActivityIndicator, View, FlatList, Text, Image } from 'react-native';

import styles from './styles';

export default class MoviesList extends Component {
    render() {
      if (this.props.state.isLoading) {
        return (
          <View style={styles.container}>
            <ActivityIndicator />
          </View>
        );
      }
  
      return (
        <FlatList
          style={styles.container}
          data={this.props.state.movies}
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
  
  