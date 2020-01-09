// usage: set the height and the width of the design.

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const proportionHeight = height => {
  return hp(`${(height / 812) * 100}%`);
};

export const proportionWidth = width => {
  return wp(`${(width / 375) * 100}%`);
};
