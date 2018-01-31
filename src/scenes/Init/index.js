import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import styles from './styles';
import { colors, fonts, metrics } from 'movies/src/styles';
import { setLogin, setPassword } from 'movies/src/actions/login';
import FacebookLoginButton from 'movies/src/components/container/FacebookLoginButton';

class LoginScreen extends Component {
  static navigationOptions = {
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
  return bindActionCreators({ setLogin, setPassword}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);