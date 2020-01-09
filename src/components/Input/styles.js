import { GREY_TEXT, BLUE, ERROR } from '_constants/colors';

const container = {
  width: '100%'
};

const inputContainer = {
  height: 47,
  width: '100%',
  backgroundColor: '#F5F5F5',
  alignSelf: 'stretch',
  borderRadius: 23.5,
  paddingHorizontal: 24
};

const errorContainer = {
  borderWidth: 1,
  borderColor: ERROR,
  borderRadius: 23.5
};

const errorText = {
  fontFamily: 'Avenir',
  color: ERROR,
  alignSelf: 'stretch',
  marginTop: 4,
  fontSize: 13
};

const textStyle = {
  color: GREY_TEXT,
  marginRight: 24,
  fontWeight: 'bold',
  fontSize: 14,
  flex: 1,
  zIndex: 1
};

const iconContainer = {
  position: 'absolute',
  top: 0,
  zIndex: 2,
  bottom: 0,
  paddingRight: 22,
  paddingLeft: 14,
  right: 0,
  justifyContent: 'center',
  alignItems: 'center'
};

const labelStyle = { marginBottom: 13, fontSize: 14, color: GREY_TEXT };

const charLimitStyle = {
  marginTop: 6,
  textAlign: 'right',
  color: BLUE,
  fontFamily: 'Avenir',
  fontSize: 12,
  marginRight: 12
};

export {
  container,
  inputContainer,
  textStyle,
  iconContainer,
  labelStyle,
  charLimitStyle,
  errorContainer,
  errorText
};
