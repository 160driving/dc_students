import { StyleSheet } from 'react-native';

import { GREY_TEXT, BLUE, ERROR } from '_constants/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginTop: 30
  },
  scrollView: { width: '105%', padding: 0 },
  contentContainer: {
    width: '100%',
    alignItems: 'center'
  },
  title: {
    width: '100%',
    fontSize: 14,
    color: GREY_TEXT,
    textAlign: 'left'
  },
  groupContainer: {
    width: '95%',
    paddingVertical: 16,
    marginVertical: 10,
    borderRadius: 27,
    alignItems: 'center',
    elevation: 3,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 6,
    shadowOpacity: 0.1,
    paddingHorizontal: 12
  },
  groupTitleContainer: {
    marginHorizontal: 8,
    alignSelf: 'stretch',
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  closeButton: {
    padding: 6
  },
  groupTitle: {
    textAlign: 'left',
    marginLeft: 8,
    color: BLUE,
    fontSize: 15,
    marginBottom: 3
  },
  groupField: {
    marginVertical: 7.5
  },
  button: {
    width: '97%',
    shadowColor: '#000',
    elevation: 5,
    shadowOpacity: 0.1,
    shadowRadius: 6,
    marginVertical: 16,
    shadowOffset: { width: 0, height: 0 },
    height: 47,
    borderRadius: 23.5,
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 12,
    color: BLUE
  },
  dateRange: {
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  errorContainer: {
    borderWidth: 1,
    borderColor: ERROR,
    borderRadius: 23.5
  },
  errorText: {
    fontFamily: 'Avenir',
    color: ERROR,
    alignSelf: 'stretch',
    marginTop: 4,
    fontSize: 13
  }
});

export const component = StyleSheet.create({
  label: { color: GREY_TEXT },
  container: { marginTop: 10 }
});
