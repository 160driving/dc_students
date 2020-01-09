import { GREY_TEXT, GREEN, BLUE } from '_constants/colors';

const resultsTopTextStyle = {
  color: GREY_TEXT,
  fontSize: 15,
  marginTop: 30,
  textAlign: 'center'
};

const testResultTextStyle = {
  color: GREEN,
  fontSize: 20,
  marginTop: 30,
  textAlign: 'center'
};

const testResultIcon = {
  marginTop: 30
};

const explanationTextStyle = {
  marginTop: 27,
  color: GREY_TEXT,
  fontSize: 12,
  marginLeft: 40,
  marginRight: 40
};

const backToDashboardBtn = {
  height: 56,
  borderRadius: 28,
  alignSelf: 'stretch',
  borderColor: BLUE,
  borderWidth: 1.5,
  position: 'absolute',
  justifyContent: 'center',
  alignItems: 'center',
  left: 40,
  right: 40,
  bottom: 36
};

const backToBashboardBtnTextStyle = {
  textAlign: 'center',
  color: BLUE,
  fontSize: 14
};

export {
  resultsTopTextStyle,
  testResultTextStyle,
  testResultIcon,
  explanationTextStyle,
  backToDashboardBtn,
  backToBashboardBtnTextStyle
};
