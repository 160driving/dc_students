import { Dimensions } from 'react-native';
const win = Dimensions.get('window');

import {
  proportionHeight as ph,
  proportionWidth as pw,
} from '_helpers/dimensions';

const containerShadow = {
  height: win.height - ph(300),
  width: win.width - pw(120),
  flex: 1,
  border: 10,
  color: '#000',
  backgroundColor: 'white',
  radius: 27,
  x: 0,
  y: 0,
  opacity: 0.08,
};

const container = {
  backgroundColor: 'white',
  height: win.height - ph(300),
  width: win.width - pw(120),
  borderRadius: 27,
  flex: 1,
  alignItems: 'center',
};

const imageContainer = {
  flex: 3.5,
  alignSelf: 'stretch',
  borderTopLeftRadius: 27,
  borderTopRightRadius: 27,
  backgroundColor: 'grey',
};

const specsContainer = {
  flex: 6.5,
  alignSelf: 'stretch',
  paddingLeft: 15,
  paddingRight: 15,
  paddingBottom: 4,
};

const titleStyle = {
  textAlign: 'center',
  alignSelf: 'stretch',
  color: '#585858',
  fontSize: 15,
  marginTop: 20,
  marginBottom: 20,
};

const specsTextStyle = {
  color: '#585858',
  textAlign: 'left',
  alignSelf: 'stretch',
  fontSize: 12,
  marginTop: 10,
  marginBottom: 10,
};

const bulletPoint = {
  height: 4,
  width: 4,
  backgroundColor: '#585858',
  borderRadius: 2,
  marginRight: 6,
};

export {
  containerShadow,
  container,
  imageContainer,
  specsContainer,
  titleStyle,
  specsTextStyle,
  bulletPoint,
};
