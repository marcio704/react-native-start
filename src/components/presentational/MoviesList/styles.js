import { StyleSheet, Platform } from 'react-native';

import {colors, fonts, metrics} from 'movies/src/styles'

const styles = StyleSheet.create({
  exceptionContainer: {
    height: metrics.containerHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderContainer: {
    height: metrics.containerHeight,
    justifyContent: 'center',
  },
  container: {
    height: metrics.containerHeight,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',  
    paddingTop: metrics.padding,
    paddingBottom: metrics.padding,
    borderBottomWidth: 1,
    borderColor: colors.light,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: 'cover',
    marginRight: metrics.padding,
    marginLeft: metrics.padding,
  },
  textsContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  title: {
    fontWeight: 'bold',
    fontSize: fonts.big,
  },
  descriptionContainer:{
  },
  description: {
  }
});

export default styles;
