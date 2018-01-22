import React, { Component } from 'react';
import { View } from 'react-native'

import Header from 'AwesomeProject/src/components/presentational/Header';
import MoviesListContainer from 'AwesomeProject/src/components/container/MoviesList';
import styles from './styles'

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header />
                <MoviesListContainer />
            </View>
        );
    }
}