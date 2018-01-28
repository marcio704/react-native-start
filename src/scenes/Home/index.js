import React, { Component } from 'react';
import { View } from 'react-native'

import { styles } from './styles'
import MoviesListContainer from 'movies/src/components/container/MoviesList';
import SearchBox from 'movies/src/components/presentational/SearchBox';

export default class HomeScreen extends Component {
    render() {
        const { navigation } = this.props;

        return (
            <View style={styles.container}>
                <SearchBox />
                <MoviesListContainer navigation={navigation}/>
            </View>
        );
    }
}