import { GREY_TEXT } from '_constants/colors';

const container = {
  flex: 1,
  alignItems: 'center',
  width: '100%',
  alignSelf: 'stretch',
  paddingLeft: 18,
  paddingRight: 18
};

const inputLabelTextStyle = {
  color: GREY_TEXT,
  marginTop: 28,
  fontSize: 12,
  alignSelf: 'stretch'
};

const inputStyle = {
  alignSelf: 'stretch',
  width: '100%',
  marginTop: 12,
  marginLeft: 0,
  marginRight: 0
};

const passwordSecurityStatusTextStyle = {
  fontSize: 13,
  marginTop: 12,
  alignSelf: 'stretch'
};

const passwordSecurityIssuesTextStyle = {
  fontSize: 13,
  marginLeft: 8,
  color: '#B2B2B2',
  alignSelf: 'stretch'
};

const innerSpeckContainer = {
  marginTop: 13,
  alignSelf: 'stretch',
  alignItems: 'center',
  justifyContent: 'flex-start',
  flexDirection: 'row'
};

const yourNewPasswordAgainTextStyle = {
  marginTop: 28,
  alignSelf: 'stretch',
  color: GREY_TEXT,
  fontSize: 12
};

const applyButtonContainer = {
  alignItems: 'center',
  justifyContent: 'flex-end',
  paddingBottom: 20,
  bottom: 0,
  position: 'absolute',
  left: 18,
  right: 18
};

const applyButton = {
  height: 56,
  alignSelf: 'stretch',
  borderRadius: 28
};

const applyButtonTextStyle = {
  fontSize: 14,
  textAlign: 'center',
  color: 'white'
};

export {
  container,
  inputLabelTextStyle,
  inputStyle,
  passwordSecurityStatusTextStyle,
  passwordSecurityIssuesTextStyle,
  innerSpeckContainer,
  yourNewPasswordAgainTextStyle,
  applyButtonContainer,
  applyButton,
  applyButtonTextStyle
};
