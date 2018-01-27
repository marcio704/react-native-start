import React from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View } from 'react-native';

import { styles, nav_styles } from './styles';

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
  tabBarLabel: 'Profile',
  tabBarIcon: nav_styles.tabBarIcon,
  title: 'Profile',
  headerStyle: nav_styles.headerStyle,
  headerTitleStyle: nav_styles.headerTitleStyle,
};

export default ProfileScreen;
