
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, TabNavigator, StackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from 'AwesomeProject/src/scenes/home.js';
import ProfileScreen from 'AwesomeProject/src/scenes/profile.js';
import LoginScreen from 'AwesomeProject/src/scenes/login.js';

export const MainNavigator =  TabNavigator ({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor, focused }) => (
                <Ionicons
                name={focused ? 'ios-home' : 'ios-home-outline'}
                size={26}
                style={{ color: tintColor }}
                />
            ),
        },
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: ({ tintColor, focused }) => (
                <Ionicons
                name={focused ? 'ios-person' : 'ios-person-outline'}
                size={26}
                style={{ color: tintColor }}
                />
            ),
        },
    },
});

export const AppNavigator =  StackNavigator ({
    Login: {
        screen: LoginScreen,
    },
    Main: {
        screen: MainNavigator,
    },
});


const AppWithNavigationState = ({ dispatch, loginReducer }) => (
  <AppNavigator navigation={ addNavigationHelpers({ dispatch, state: loginReducer }) } />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loginReducer: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    loginReducer: state.loginReducer,
});

export default connect(mapStateToProps)(AppWithNavigationState);