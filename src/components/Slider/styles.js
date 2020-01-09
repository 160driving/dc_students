import { StyleSheet } from 'react-native';

import { GREY_TEXT, BLUE, ERROR } from '_constants/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'flex-start',
    marginBottom: 16
  },
  slider: {
    width: '100%',
    marginVertical: 2
  },
  label: {
    color: GREY_TEXT,
    fontSize: 14,
    textAlign: 'left'
  },
  value: {
    color: BLUE
  },
  error: {
    fontFamily: 'Avenir',
    color: ERROR,
    alignSelf: 'stretch',
    marginTop: 4,
    fontSize: 13
  }
});
