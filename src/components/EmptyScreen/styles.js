import { StyleSheet } from 'react-native';

// const GREEN = '#2ACA00';
import { GREY_TEXT, GREEN } from '_constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 28
  },
  title: {
    fontFamily: 'Avenir',
    textAlign: 'center',
    color: GREEN,
    fontSize: 20,
    marginTop: 34
  },
  img: {
    marginVertical: 40
  },
  message: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 14,
    color: GREY_TEXT
  }
});
