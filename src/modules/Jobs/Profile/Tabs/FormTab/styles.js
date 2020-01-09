import { StyleSheet } from 'react-native';

import { GREY_TEXT, BLUE } from '_constants/colors';

export const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 50,
    paddingHorizontal: 20,
    paddingTop: 20
  },
  topText: {
    color: BLUE,
    fontFamily: 'Avenir',
    fontSize: 14,
    marginBottom: 14
  },
  button: {
    height: 56,
    borderRadius: 28
  }
});

export const componentStyle = StyleSheet.create({
  label: { color: GREY_TEXT },
  container: { marginTop: 10 }
});
