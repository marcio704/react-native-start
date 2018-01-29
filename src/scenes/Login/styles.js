import { StyleSheet } from 'react-native';

import { fonts, colors, metrics } from 'movies/src/styles';

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    textInput: {
      height: 30,
      width: '90%',
      borderRadius: 5,
      borderColor: colors.light,
      borderWidth: 1,
      marginBottom: metrics.padding,
  },
    login: {
    },
    password: {
    },
  });
