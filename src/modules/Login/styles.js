import { PRIMARY_COLOR, GREY_TEXT } from '_constants/colors';

import {
  proportionHeight as ph,
  proportionWidth as pw
} from '_helpers/dimensions';

const gradient = { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 };

const rotatedView = {
  position: 'absolute',
  top: 20,
  left: -pw(250),
  width: pw(872988),
  height: ph(943.83),
  elevation: 0
};

const infoContainer = {
  flex: 1,
  marginTop: ph(230),
  alignSelf: 'stretch',
  backgroundColor: '#00000000',
  alignItems: 'center',
  padding: 0
};

const forgotPasswordBtn = {
  marginTop: ph(18.1),
  alignSelf: 'flex-end',
  marginRight: pw(38)
};

const forgotPasswordTxt = { color: PRIMARY_COLOR, fontSize: 14 };

const loginBtn = {
  alignSelf: 'stretch',
  borderRadius: 28,
  height: 56
};

const dontHaveAcc = {
  color: GREY_TEXT,
  fontSize: 15,
  marginVertical: 12,
  textAlign: 'center'
};

const signUpBtn = {
  borderRadius: 28,
  height: 56,
  width: '100%',
  borderColor: PRIMARY_COLOR,
  borderWidth: 1,
  textAlign: 'center',
  justifyContent: 'center'
};

const signUpTxt = {
  color: PRIMARY_COLOR,
  fontSize: 16
};

const scanQrTxt = {
  color: PRIMARY_COLOR,
  marginTop: ph(13),
  fontWeight: 'bold',
  fontSize: 14
};

const loginBtnContainer = {
  alignSelf: 'stretch',
  left: 40,
  right: 40,
  bottom: 40,
  position: 'absolute'
};

const modalCloseButton = {
  position: 'absolute',
  top: 30,
  left: 30
};

const modalCloseIcon = {
  width: 20,
  height: 20,
  resizeMode: 'contain'
};

const inputsContainer = {
  width: '100%',
  paddingHorizontal: 30
};

export {
  gradient,
  rotatedView,
  infoContainer,
  forgotPasswordBtn,
  forgotPasswordTxt,
  dontHaveAcc,
  signUpBtn,
  signUpTxt,
  inputsContainer,
  loginBtn,
  scanQrTxt,
  loginBtnContainer,
  modalCloseButton,
  modalCloseIcon
};
