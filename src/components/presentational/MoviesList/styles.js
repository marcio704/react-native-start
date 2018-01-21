import { StyleSheet } from 'react-native';

import {colors, fonts, metrics} from 'AwesomeProject/src/styles'

const styles = StyleSheet.create({
  container: {
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',  
    paddingTop: metrics.padding,
    paddingBottom: metrics.padding,
    borderBottomWidth: 1,
    borderColor: colors.lighter,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
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