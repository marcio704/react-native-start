
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, TabNavigator, StackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from 'movies/src/scenes/Home';
import MovieDetailScreen from 'movies/src/scenes/MovieDetail';
import ProfileScreen from 'movies/src/scenes/Profile';
import LoginScreen from 'movies/src/scenes/Login';
import MovieDetailTrailerScreen from 'movies/src/scenes/MovieDetailTrailer';
import { metrics, colors } from 'movies/src/styles';


export const AppNavigator =  TabNavigator ({
    Home: {
        screen: StackNavigator({
            MoviesList: {
                screen: HomeScreen
            },
            MoviesDetail: {
                screen: MovieDetailScreen
            },
            MovieDetailTrailer: {
                screen: MovieDetailTrailerScreen
            },
        },
        {
            navigationOptions: {
                headerTitle: 'Movies',
                tabBarIcon: ({ tintColor, focused }) => (
                    <Ionicons
                    name={focused ? 'ios-home' : 'ios-home-outline'}
                    size={26}
                    style={{ color: tintColor }}
                    />
                ),
                headerStyle: {
                    height: metrics.headerHeight,
                    paddingTop: metrics.headerPadding,
                    backgroundColor: '#2196F3',
                },
                headerTitleStyle: {
                    marginTop: metrics.headerPadding,
                    color: 'white',
                },
                headerBackTitleStyle: {
                    color: 'white',
                },
            }
            
        }),
    },
    Profile: {
        screen: ProfileScreen
    },
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={ addNavigationHelpers({ dispatch, state: nav }) } />
);

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);