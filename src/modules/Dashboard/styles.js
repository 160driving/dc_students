import { Dimensions } from 'react-native';

import {
  proportionHeight as ph,
  proportionWidth as pw
} from '_helpers/dimensions';

import { GREY_TEXT, GREEN, ORANGE } from '_constants/colors';

const win = Dimensions.get('window');

const totalHoursStyle = {
  fontSize: 20,
  marginTop: ph(28),
  color: GREY_TEXT
};

const totalAbsencesStyle = {
  fontSize: 15,
  marginTop: 8,
  color: GREEN
};

const shadowStyle = {
  shadowColor: '#000',
  backgroundColor: 'white',
  shadowRadius: 8,
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2
};

const getStartedContainer = {
  width: win.width - 50,
  height: 190 - 5,
  alignSelf: 'center',
  backgroundColor: 'white',
  paddingVertical: 20,
  paddingHorizontal: 13,
  borderRadius: 30
  //elevation: 10,
  // overflow: 'hidden'
  // ...shadowStyle
};

const getStartedShadow = {
  width: win.width - 36,
  height: 190,

  style: {
    marginTop: ph(60),
    marginBottom: 10,
    justifyContent: 'center',
    marginLeft: 18
  },

  inset: true,
  border: 10,
  color: '#000',
  backgroundColor: 'white',
  alignSelf: 'center',
  radius: 30,
  x: 0,
  y: 0,
  opacity: 0.06
};

const getStartedTitle = {
  fontSize: 20,
  marginTop: 20,
  marginLeft: 20,
  color: ORANGE,
  fontWeight: '700'
};

const getStartedSubTitle = {
  fontSize: 14,
  marginTop: 22,
  color: '#A3A3A3',
  textAlign: 'center',
  fontWeight: '700'
};

const getStartedText = {
  fontSize: 15,
  color: ORANGE,
  textAlign: 'center',
  fontWeight: '700'
};

const paginationContainer = {
  width: 36,
  height: 5
};

const dotStyle = {
  width: 12,
  height: 12,
  borderRadius: 6,
  backgroundColor: '#99EC50'
};

const inactiveDotStyle = {
  backgroundColor: '#AAAAAA'
};

const preTripContainer = {
  height: 140,
  marginLeft: 18,
  marginRight: 18,
  alignSelf: 'stretch',
  backgroundColor: 'white',
  alignItems: 'center',
  textAlign: 'center',
  marginTop: ph(60),
  borderRadius: 10,
  elevation: 7,
  ...shadowStyle
};

const preTripGauge = {
  marginTop: -31,
  height: 62,
  width: 62
};

const preTripTitleStyle = {
  marginTop: 36,
  fontSize: 20,
  color: GREY_TEXT
};

const preTripStatusStyle = {
  fontSize: 14,
  color: GREEN,
  marginTop: 8
};

const tapToPractice = {
  //TODO: fontFamily: 'Helvetica Newe',
  fontSize: 14,
  marginTop: ph(20),
  fontWeight: 'bold',
  color: GREY_TEXT,
  marginBottom: 10
};

const roadSkillsContainer = {
  marginTop: 14,
  flexDirection: 'row',
  alignSelf: 'stretch',
  marginLeft: 18,
  marginRight: 18,
  justifyContent: 'space-between'
};

const roadContainer = {
  borderRadius: pw(27),
  width: pw(157),
  height: pw(157),
  alignItems: 'center',
  paddingTop: 15,
  paddingBottom: 20,
  justifyContent: 'space-between'
};

const skillsContainer = {
  borderRadius: pw(27),
  width: pw(157),
  height: pw(157),
  alignItems: 'center',
  paddingTop: 15,
  paddingBottom: 20,
  justifyContent: 'space-between'
};

const roadSkillTitleStyle = {
  fontSize: 20,
  color: 'white'
};

const roadSkillStatusStyle = {
  fontSize: 14,
  color: 'white'
};

const generalKnowledgeButtonGradientStyle = {
  marginLeft: 18,
  marginRight: 18,
  borderRadius: 27,
  alignSelf: 'stretch',
  height: ph(108),
  justifyContent: 'center',
  alignItems: 'center',
  ...shadowStyle,
  shadowColor: 'blue',
  marginTop: 30
};

const generalKnowledgeTextStyle = {
  textAlign: 'center',
  fontSize: 20,
  color: 'white',
  marginTop: 14
};

const tapToTakePracticeTestTextStyle = {
  textAlign: 'center',
  fontSize: 14,
  color: 'white'
};

export {
  totalHoursStyle,
  totalAbsencesStyle,
  getStartedContainer,
  getStartedTitle,
  getStartedSubTitle,
  getStartedText,
  getStartedShadow,
  paginationContainer,
  dotStyle,
  inactiveDotStyle,
  preTripContainer,
  preTripGauge,
  preTripTitleStyle,
  preTripStatusStyle,
  tapToPractice,
  roadSkillsContainer,
  roadContainer,
  skillsContainer,
  roadSkillTitleStyle,
  roadSkillStatusStyle,
  generalKnowledgeTextStyle,
  tapToTakePracticeTestTextStyle,
  generalKnowledgeButtonGradientStyle
};
