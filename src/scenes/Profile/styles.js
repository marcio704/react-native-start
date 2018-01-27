import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { metrics, colors } from 'movies/src/styles';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
      welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
      },
});

export const nav_styles = {
    tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
        name={focused ? 'ios-person' : 'ios-person-outline'}
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
    }
};