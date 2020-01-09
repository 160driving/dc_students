import { StyleSheet } from 'react-native';

import { ORANGE, GREY_TEXT } from '_constants/colors';

export default StyleSheet.create({
  container: {
    marginTop: 14,
    alignSelf: 'stretch'
  },
  specContainer: {
    marginVertical: 4,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  specTitle: {
    fontSize: 14,
    color: ORANGE,
    textAlign: 'left'
  },
  specValue: {
    fontSize: 14,
    textAlign: 'right',
    color: GREY_TEXT
  },
  bulletPointContainer: {
    flexDirection: 'row',
    marginVertical: 4,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  bulletPoint: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: ORANGE
  },
  bulletedText: {
    fontSize: 14,
    color: GREY_TEXT,
    marginLeft: 16,
    textAlign: 'left'
  }
});
