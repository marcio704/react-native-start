import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AccessToken } from 'react-native-fbsdk';

import styles from './styles';
import { colors, fonts, metrics } from 'movies/src/styles';
import { setStorage } from 'movies/src/actions/storage';
import getStorage from 'movies/src/Storage';
import FacebookLoginButton from 'movies/src/components/container/FacebookLoginButton';
import { logout } from 'movies/src/actions/login';

class InitScreen extends Component {
  static navigationOptions = {
  };

  getLoginStateAndProceed(storage, navigation, logout) {
    storage.load({
      key: 'loginState',
    })
    .then(ret => {
        // Validates if token is still valid before logging user in:
        if (Date.now() >= new Date(ret.token.expirationTime)) {
          console.log('User could not be logged in cause the token has expired. Login again.');
          logout(navigation, 'Login');
        } else {
          console.log(`User logged with token {ret.token}`);
          navigation.navigate('Main');
        }
    })
    .catch(err => {
        console.warn(err.message);
        switch (err.name) {
            case 'NotFoundError':
              logout(navigation, 'Init');
              break;
            case 'ExpiredError':
              logout(navigation, 'Login');
              break;
        }
    });
  };

  componentWillMount() {
    storage = getStorage();
    this.props.setStorage(storage);

    this.getLoginStateAndProceed(storage, this.props.navigation, this.props.logout);
  };

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <Image
          style={styles.backgroundImage}
          source={ require('movies/src/resources/images/movies_icon_big.png') }
        />
        <TouchableHighlight 
          underlayColor={ colors.secondary }
          style={ styles.button }
          onPress={ () => navigation.navigate('Login') }>
          <View>
            <Text style={ styles.buttonFirstText }>Have an account?</Text>
            <Text style={ styles.buttonSecondText }>LOG IN</Text>
          </View>
        </TouchableHighlight >
        <TouchableHighlight 
          underlayColor={ colors.secondary }
          style={ styles.button }
          onPress={ () => navigation.navigate('Signup') }>
          <View>
            <Text style={ styles.buttonFirstText }>New to Movies?</Text>
            <Text style={ styles.buttonSecondText }>SIGN UP</Text>
          </View>
        </TouchableHighlight >
      </View>
    );
  };
};

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setStorage, logout }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(InitScreen);