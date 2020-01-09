import {
  proportionHeight as ph,
  proportionWidth as pw
} from '_helpers/dimensions';

const gradientView = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0
};

const rotatedViewBackButton = {
  left: -60
};

const rotatedView = {
  left: pw(-230),
  position: 'absolute'
};

const backArrowTouch = {
  position: 'absolute',
  top: ph(70),
  left: 5
};

const register = {
  marginTop: ph(160),
  alignSelf: 'center',
  marginBottom: 30
};

const infoContainer = {
  paddingLeft: 8,
  paddingRight: 8,
  alignSelf: 'stretch',
  alignItems: 'center',
  paddingVertical: 40
};

export {
  gradientView,
  rotatedView,
  backArrowTouch,
  register,
  infoContainer,
  rotatedViewBackButton
};
