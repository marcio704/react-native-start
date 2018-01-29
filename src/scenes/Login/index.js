import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import styles from './styles';
import { setLogin, setPassword } from 'movies/src/actions/login';

class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Log In',
  };

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <TextInput 
          style={[styles.textInput, styles.login]} 
          placeholder="Login" 
          onChangeText={ (text) => this.props.setLogin(text) } />
        <TextInput 
          style={[styles.textInput, styles.password]}
          placeholder="Password"
          onChangeText={ (text) => this.props.setPassword(text) }  />
        <Button
          onPress={ () => navigation.dispatch({ type: 'Login' }) }
          title="Log in"
        />
      </View>
    );
  };
};

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setLogin, setPassword}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);