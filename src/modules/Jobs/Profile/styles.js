import { Dimensions } from 'react-native';

import { BLUE, GREY_TEXT } from '_constants/colors';

const win = Dimensions.get('window');

const tabNavShadow = {
  width: win.width,
  height: 45,
  color: '#000',
  border: 6,
  opacity: 0.08,
  x: 0,
  y: 1
};

const indicator = { backgroundColor: BLUE, height: 3 };

const tabBarLabelStyle = { fontSize: 10, marginBottom: 6 };

const tabBarStyle = { backgroundColor: 'white', height: 45 };

export { tabNavShadow, indicator, tabBarStyle, tabBarLabelStyle };
