import React, { Component } from 'react';
import { ActivityIndicator, View, ListView, Text } from 'react-native';

import styles from './styles';

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
  