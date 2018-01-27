import React, { Component } from 'react';
import { View } from 'react-native'

import { styles, nav_styles } from './styles'
import MoviesListContainer from 'movies/src/components/container/MoviesList';
import SearchBox from 'movies/src/components/presentational/SearchBox';

export default class HomeScreen extends Component {
    static navigationOptions = {
        tabBarLabel: 'Home',
        tabBarIcon: nav_styles.tabBarIcon,
        title: 'Home',
        headerStyle: nav_styles.headerStyle,
        headerTitleStyle: nav_styles.headerTitleStyle,
    }
    
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