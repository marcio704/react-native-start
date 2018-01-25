import { StyleSheet } from 'react-native';

import {colors, fonts, metrics} from 'movies/src/styles'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    height: 50,
    marginBottom: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: fonts.big,
  },
});

export default styles;
