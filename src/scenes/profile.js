import React from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View } from 'react-native';

const ProfileScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.instructions}>
      Click here to log out.
    </Text>
    <Button
      onPress={() => navigation.dispatch({ type: 'Logout' })}
      title="Logout"
    />
  </View>
);

ProfileScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

ProfileScreen.navigationOptions = {
  title: 'Log Out',
};

export default ProfileScreen;

const styles = StyleSheet.create({
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