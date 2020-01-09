import { StyleSheet } from 'react-native';

import { GREY_TEXT, BLUE } from '_constants/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'flex-start',
    paddingHorizontal: 12,
    marginBottom: 10
  },
  text: {
    textAlign: 'left',
    color: GREY_TEXT,
    fontSize: 12,
    marginBottom: 18
  },
  radioBtnsContainer: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  radio: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center'
  },
  radioSelected: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: BLUE
  },
  radioText: {
    fontSize: 13,
    textAlign: 'left',
    marginLeft: 14,
    color: GREY_TEXT
  },
  radioTextSelected: {
    color: BLUE
  }
});
