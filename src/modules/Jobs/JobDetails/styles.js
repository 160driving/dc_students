import { StyleSheet } from 'react-native';

import { ORANGE, DARK_TEXT, GREY_TEXT } from '_constants/colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 18
  },
  title: {
    color: ORANGE,
    fontSize: 16,
    textAlign: 'center',
    alignSelf: 'stretch',
    marginTop: 12
  },
  sectionTitle: {
    color: ORANGE,
    alignSelf: 'stretch',
    fontSize: 14,
    textAlign: 'left',
    marginBottom: 12,
    marginTop: 26
  },
  location: {
    color: DARK_TEXT,
    opacity: 0.56,
    marginTop: 8,
    textAlign: 'center'
  },
  employment: {
    textAlign: 'center',
    opacity: 0.8,
    color: DARK_TEXT,
    marginTop: 14
  },
  employmentDetails: {
    textAlign: 'center',
    opacity: 0.8,
    color: DARK_TEXT
  },
  jobDescription: {
    color: DARK_TEXT,
    lineHeight: 30,
    fontWeight: '600',
    textAlign: 'left',
    fontSize: 14,
    fontFamily: 'Avenir',
    alignSelf: 'stretch'
  },
  cdlTruckDricerApplicants: {
    color: GREY_TEXT,
    fontSize: 14,
    alignSelf: 'stretch'
  },
  lettersContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    textAlign: 'left'
  },
  buttonContainer: {
    alignSelf: 'stretch',
    marginHorizontal: 28,
    marginTop: 60,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: { color: 'white', fontSize: 14 }
});
