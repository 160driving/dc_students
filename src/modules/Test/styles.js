import { Dimensions } from 'react-native';
const win = Dimensions.get('window');

import { WHITE } from '_constants/colors';
import {
  proportionHeight as ph,
  proportionWidth as pw
} from '_helpers/dimensions';

const ovalHeader = {
  height: win.width * 1.5,
  width: win.width * 1.5,
  borderRadius: (win.width * 1.5) / 2,
  backgroundColor: 'white',
  elevation: 1,
  shaddowColor: '#000',
  shadowRadius: 20,
  shadowOpacity: 0.3,
  position: 'absolute',
  top: -(win.width * 1.4) / 1.6 + ph(40),
  left: -(win.width * 1.4) / 6
};

const questionNumberText = {
  fontSize: 16,
  zIndex: 2,
  elevation: 2,
  marginTop: ph(20),
  fontWeight: 'bold',
  textAlign: 'center'
};

const questionText = {
  textAlign: 'center',
  fontSize: 14,
  elevation: 2,
  zIndex: 2,
  marginTop: ph(15),
  marginLeft: pw(32),
  marginRight: pw(32)
};

const optionButtonStyle = {
  backgroundColor: WHITE,
  shadowOffset: { width: 0, height: 0 },
  borderRadius: 27,
  marginTop: ph(30),
  minHeight: 54,
  padding: 10,
  justifyContent: 'center',
  alignItems: 'center',
  elevation: 1,
  shadowRadius: 15,
  marginRight: pw(35),
  marginLeft: pw(35)
};

const optionButtonTextStyle = {
  fontSize: 15,
  margin: 8,
  padding: 0,
  textAlign: 'left',
  flexWrap: 'wrap'
};

const nextButtonStyle = {
  position: 'absolute',
  elevation: 10,
  height: 60,
  borderTopWidth: 1,
  borderTopColor: 'white',
  justifyContent: 'center',
  alignItems: 'center',
  left: 0,
  right: 0,
  bottom: 0
};

const temporaryHackCoverView = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  width: '100%',
  height: 48,
  backgroundColor: 'yellow'
};

const scrollViewOuterContainer = {
  position: 'absolute',
  zIndex: -1,
  top: (win.width * 1.5) / 2 - 120,
  bottom: 0,
  left: 0,
  right: 0
};

export {
  ovalHeader,
  questionNumberText,
  questionText,
  optionButtonStyle,
  optionButtonTextStyle,
  nextButtonStyle,
  temporaryHackCoverView,
  scrollViewOuterContainer
};
