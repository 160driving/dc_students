import { StyleSheet } from 'react-native';

import { ORANGE, GREY_TEXT } from '_constants/colors';

export default StyleSheet.create({
  container: {
    paddingVertical: 20,
    alignItems: 'center',
    paddingHorizontal: 24
  },
  jobTitle: {
    color: ORANGE,
    fontSize: 16,
    textAlign: 'center',
    alignSelf: 'stretch'
  },
  separator: {
    height: 1,
    opacity: 0.18,
    backgroundColor: '#707070',
    alignSelf: 'stretch',
    marginTop: 8,
    marginBottom: 16
  },
  message: {
    fontSize: 14,
    fontWeight: '800',
    color: GREY_TEXT,
    textAlign: 'center',
    alignSelf: 'stretch'
  },
  specsContainer: {
    marginTop: 14,
    alignSelf: 'stretch'
  },
  acceptBtn: {
    marginTop: 48,
    backgroundColor: '#62C437',
    height: 50,
    alignSelf: 'stretch',
    marginHorizontal: 40,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  acceptBtnText: {
    color: 'white',
    fontSize: 13
  },
  declineBtn: {
    marginHorizontal: 40,
    height: 50,
    borderRadius: 25,
    alignSelf: 'stretch',
    marginTop: 13,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#F26523',
    justifyContent: 'center',
    alignItems: 'center'
  },
  declineBtnText: {
    color: '#F26523',
    fontSize: 13
  }
});
