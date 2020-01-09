import { StyleSheet } from 'react-native';
import { GREY_TEXT, ERROR } from '_constants/colors';

export default StyleSheet.create({
  container: { paddingLeft: 20, width: '100%' },
  titleText: { marginLeft: -20, marginBottom: 16, color: GREY_TEXT },
  checkbox: {
    marginVertical: 8,
    flexDirection: 'row',
    width: '100%'
  },
  checkboxText: {
    fontSize: 14,
    marginLeft: 22,
    color: GREY_TEXT
  },
  errorText: {
    fontFamily: 'Avenir',
    color: ERROR,
    alignSelf: 'stretch',
    marginTop: 4,
    fontSize: 13
  }
});
