
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, TabNavigator, StackNavigator, Platform } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import InitScreen from 'movies/src/scenes/Init';
import LoginScreen from 'movies/src/scenes/Login';
import SignupScreen from 'movies/src/scenes/Signup';
import SignupEmailScreen from 'movies/src/scenes/SignupEmail';
import HomeScreen from 'movies/src/scenes/Home';
import ProfileScreen from 'movies/src/scenes/Profile';
import MovieDetailScreen from 'movies/src/scenes/MovieDetail';
import MovieDetailTrailerScreen from 'movies/src/scenes/MovieDetailTrailer';
import { metrics, colors } from 'movies/src/styles';

const MainNavigator =  TabNavigator ({
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
                    backgroundColor: colors.primary,
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

export const AppNavigator = StackNavigator({
        Init: {
            screen: InitScreen,
        },    
        Login: {
            screen: LoginScreen,
        },
        Signup: {
            screen: StackNavigator({
                SignupInit: {
                    screen: SignupScreen
                },
                SignupEmail: {
                    screen: SignupEmailScreen
                },
            },
            { 
                headerMode: 'none' // This avoids duplicated headers by not rendering this navigation Stack header.
            }),
        },
        Main: {
            screen: MainNavigator,
        },  
    },
    { 
        headerMode: 'none' // This avoids duplicated headers by not rendering this navigation Stack header.
    }
);

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={ addNavigationHelpers({ dispatch, state: nav }) } />
);

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);