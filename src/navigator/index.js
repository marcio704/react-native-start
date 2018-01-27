
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, TabNavigator, StackNavigator } from 'react-navigation';

import HomeScreen from 'movies/src/scenes/Home';
import MovieDetailScreen from 'movies/src/scenes/MovieDetail';
import ProfileScreen from 'movies/src/scenes/Profile';
import LoginScreen from 'movies/src/scenes/Login';

export const AppNavigator =  TabNavigator ({
    Home: {
        screen: StackNavigator({
            MoviesList: {
                screen: HomeScreen
            },
            MoviesDetail: {
                screen: MovieDetailScreen
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