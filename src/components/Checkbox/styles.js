import { StyleSheet } from 'react-native';

import { GREY_TEXT } from '_constants/colors';

export default StyleSheet.create({
  container: {
    marginVertical: 8,
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%'
  },
  text: {
    fontSize: 14,
    marginLeft: 22,
    color: GREY_TEXT
  }
});
