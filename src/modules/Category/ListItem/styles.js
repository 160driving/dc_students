import { GREY_TEXT } from '_constants/colors';

const container = {
  width: 145,
  height: 145,
  flex: 1,
  borderRadius: 27,
  backgroundColor: 'white',
  marginLeft: 20,
  marginRight: 20,
  marginTop: 10,
  marginBottom: 10,
};

const containerShadow = {
  height: 145,
  width: 145,
  border: 10,
  color: '#000',
  radius: 27,
  x: 0,
  y: 1,
  opacity: 0.06,
};

const innerContainer = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  justifyContent: 'space-between',
  paddingTop: 15,
  paddingBottom: 15,
  alignItems: 'center',
};

const titleStyle = {
  color: GREY_TEXT,
  fontSize: 18,
  textAlign: 'center',
};

const performanceRateStyle = {
  fontSize: 14,
  textAlign: 'center',
};

export {
  container,
  containerShadow,
  innerContainer,
  titleStyle,
  performanceRateStyle,
};
