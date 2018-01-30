import { StyleSheet } from 'react-native';

import { fonts, colors, metrics } from 'movies/src/styles';

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      width: '100%',
      height: '100%',
      margin: 0,
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      position: 'absolute',
    },
    facebook: {
      marginBottom: 50,
    },
    textInput: {
      height: 40,
      width: '90%',
      borderRadius: 5,
      borderColor: colors.light,
      borderWidth: 1,
      marginBottom: metrics.padding,
      backgroundColor: colors.lighter,
    },
    textInputContainer: {
      width: '90%',
      alignItems: 'center',
      marginTop: metrics.padding,
    },
    login: {

    },
    password: {
      
    },
    loginButton: {
      width: '50%',
      borderRadius: 5,
      backgroundColor: '#2196F3',
    },
  });
