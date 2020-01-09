import { Dimensions } from 'react-native';

import { GREY_TITLE } from '_constants/colors';

const win = Dimensions.get('window');

import { proportionHeight as ph } from '_helpers/dimensions';

const container = {
  paddingLeft: 12,
  paddingRight: 12,
  aligSelf: 'stretch',
  height: ph(60),
  backgroundColor: 'white',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  textAlign: 'center'
};

const shadowStyle = {
  height: ph(60),
  inset: true,
  border: 2,
  width: win.width,
  color: '#000',
  backgroundColor: 'white',
  alignSelf: 'stretch',
  radius: 0,
  x: 0,
  y: 2,
  opacity: 0.08
};

const titleContainer = {
  flex: 1,
  height: '100%',
  justifyContent: 'center'
};

const textStyle = {
  color: GREY_TITLE,
  fontSize: 15,
  textAlign: 'center'
};

const subTitleStyle = {
  color: GREY_TITLE,
  fontSize: 12,
  textAlign: 'center'
};

const backArrowContainer = {
  backgroundColor: 'white',
  height: 40,
  width: 40,
  justifyContent: 'center',
  alignItems: 'flex-start'
};

const actionIconContainer = {
  backgroundColor: 'white',
  height: 40,
  width: 40,
  justifyContent: 'center',
  alignItems: 'flex-end'
};

export {
  container,
  textStyle,
  subTitleStyle,
  shadowStyle,
  titleContainer,
  backArrowContainer,
  actionIconContainer
};
