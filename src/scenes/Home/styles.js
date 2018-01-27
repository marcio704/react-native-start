import React from 'react';
import { StyleSheet, Platform } from 'react-native';

import { metrics, colors } from 'movies/src/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const styles = StyleSheet.create({
    container: {
        
    }
});

export const nav_styles = {
    tabBarIcon: ({ tintColor, focused }) => (
            <Ionicons
            name={focused ? 'ios-home' : 'ios-home-outline'}
            size={26}
            style={{ color: tintColor }}
            />
        )
    ,
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