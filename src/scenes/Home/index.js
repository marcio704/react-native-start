import React, { Component } from 'react';
import { View } from 'react-native'

import MoviesListContainer from 'AwesomeProject/src/components/container/MoviesList';
import styles from './styles'

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <MoviesListContainer />
            </View>
        );
    }
}