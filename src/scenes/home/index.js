import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import FlatListBasics from 'AwesomeProject/src/default_components/presentional/index.js';

export default class HomeScreen extends Component {
    render() {
        return (
        <View style={styles.container}>
            <FlatListBasics />
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
})
