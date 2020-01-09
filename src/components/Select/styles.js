import { StyleSheet } from 'react-native';

import { GREY_TEXT, ERROR } from '_constants/colors';

const pickerStyles = StyleSheet.create({
  inputIOS: {
    alignSelf: 'stretch',
    color: GREY_TEXT,
    flex: 1,
    height: 47,
    borderRadius: 24,
    paddingRight: 40,
    paddingLeft: 24,
    backgroundColor: '#F7F7F7',
    fontSize: 14,
    fontWeight: 'bold'
  },
  iconContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 20
  },
  inputAndroidContainer: {
    flex: 1,
    width: '100%',
    height: 47,
    borderRadius: 24,
    paddingRight: 40,
    color: GREY_TEXT,
    backgroundColor: '#F7F7F7',
    fontSize: 14,
    fontWeight: 'bold'
  },
  inputAndroid: {
    color: GREY_TEXT,
    fontSize: 14,
    fontWeight: '700',
    paddingLeft: 24
  },
  placeholder: {
    opacity: 0.8,
    color: GREY_TEXT,
    fontSize: 14,
    paddingLeft: 24
  }
});

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  errorText: {
    fontFamily: 'Avenir',
    color: ERROR,
    alignSelf: 'stretch',
    marginTop: 4,
    fontSize: 13
  }
});

export { pickerStyles, styles };
