import {PRIMARY_COLOR} from '_constants/colors';

const container = {marginLeft: 17, marginRight: 17, marginBottom: 42};

const questionTextStyle = {
  marginBottom: 17,
  fontWeight: 'bold',
  fontSize: 15,
  color: '#A0A0A0',
};

const inputNoTextStyle = {
  fontWeight: 'bold',
  fontSize: 15,
  color: PRIMARY_COLOR,
};

const questionContainer = {
  borderColor: '#70707050',
  borderWidth: 1,
  borderRadius: 9,
  minHeight: 40,
  paddingTop: 8,
};

const limitContainer = {
  position: 'absolute',
  backgroundColor: 'white',
  height: 16,
  top: -8,
  paddingLeft: 14,
};

export {
  container,
  questionTextStyle,
  inputNoTextStyle,
  questionContainer,
  limitContainer,
};
