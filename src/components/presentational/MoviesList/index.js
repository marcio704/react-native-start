import React, { Component } from 'react';
import { ActivityIndicator, View, FlatList, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

export default class MoviesList extends Component {
    render() {
      const { movies, isLoading, hasErrored, fetchNextMoviesPageFromAPI } = this.props;
      const { navigate } = this.props.navigation;

      if (isLoading) {
        return (
          <View style={ styles.loaderContainer }>
            <ActivityIndicator />
          </View>
        );
      }

      if (hasErrored) {
        return (
          <View style={ styles.exceptionContainer }>
            <Text>Sorry! An unexpected error has occurred =(</Text>
          </View>
        );
      }

      movies.forEach((movie, i) => {
        movie.key = i + 1;
      });
      return (
        <FlatList
          style={ styles.container }
          data={ movies }
          onEndReachedThreshold={ 0.9 }  // onEndReached is called when 90% of the visible content has been visualiazed
          onEndReached={ () => fetchNextMoviesPageFromAPI() }
          renderItem={ ({ item }) =>
            <TouchableOpacity onPress={() => navigate('MoviesDetail', {'movie': item})}>
              <View style={ styles.row }>
                <Image source={{ uri: item.image }}  style={ styles.image } /> 
                <View style={ styles.textsContainer }>
                  <Text style={ styles.title }> { item.title } </Text> 
                  <Text style={ styles.description }> { item.short_description }</Text>
                </View>
              </View>
            </TouchableOpacity>
          }
        />
      );
      
    }
  }
  
  