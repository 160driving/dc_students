import {PRIMARY_COLOR} from '_constants/colors';

const container = {marginLeft: 17, marginRight: 17, marginBottom: 42};

const questionTextStyle = {
  marginBottom: 17,
  fontWeight: 'bold',
  fontSize: 15,
  color: '#A0A0A0',
};

const questionNrTextStyle = {
  fontWeight: 'bold',
  fontSize: 15,
  color: PRIMARY_COLOR,
};

const optionButton = {
  flexDirection: 'row',
  alignSelf: 'stretch',
  justifyContent: 'space-between',
};

const valueContainer = {
  height: 14,
  width: 14,
  marginRight: 32,
  borderRadius: 7,
  borderColor: '#DEDEDE',
};

const valueTextStyle = {
  flex: 4,
  textAlign: 'left',
};

export {
  container,
  questionTextStyle,
  questionNrTextStyle,
  optionButton,
  valueContainer,
  valueTextStyle,
};
