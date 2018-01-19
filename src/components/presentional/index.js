import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View, StyleSheet } from 'react-native';

export default class Movies extends Component {
    render() {
      if (this.props.state.isLoading) {
        return (
          <View style={styles.movies}>
            <ActivityIndicator />
          </View>
        );
      }
  
      return (
        <View style={styles.movies}>
          <ListView
            dataSource={this.props.state.dataSource}
            renderRow={(rowData) => <Text>{rowData.title}, {rowData.releaseYear}</Text>}
          />
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    movies: {
        flex: 1,
        paddingTop: 20
    },
  })
  