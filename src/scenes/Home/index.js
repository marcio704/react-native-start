import React, { Component } from 'react';
import { View } from 'react-native'

import styles from './styles'
import Header from 'AwesomeProject/src/components/presentational/Header';
import MoviesListContainer from 'AwesomeProject/src/components/container/MoviesList';
import SearchBox from 'AwesomeProject/src/components/presentational/SearchBox';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header />
                <SearchBox />
                <MoviesListContainer />
            </View>
        );
    }
}