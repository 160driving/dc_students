import { StyleSheet } from 'react-native';

import { ERROR } from '_constants/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  dateContainer: {
    flex: 1,
    borderRadius: 24,
    paddingHorizontal: 24,
    height: 47,
    backgroundColor: '#F7F7F7',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  label: {
    fontFamily: ' Montserrat-Bold'
  },
  date: {
    alignSelf: 'stretch',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flex: 1,
    borderWidth: 0
  },
  inputText: {
    fontFamily: 'Montserrat-Bold',
    color: '#A3A3A3',
    fontSize: 14,
    backgroundColor: '#F5F5F5'
  },
  errorText: {
    fontFamily: 'Avenir',
    color: ERROR,
    alignSelf: 'stretch',
    marginTop: 4,
    fontSize: 13
  }
});

export default styles;
