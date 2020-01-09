import React from 'react';
import {View, StyleSheet} from 'react-native';

import {
  proportionHeight as ph,
  proportionWidth as pw,
} from '_helpers/dimensions';

const RotatedView = ({angle = -199, style}) => (
  <View
    style={[
      styles.rotatedView,
      {
        transform: [{rotate: `${angle}deg`}],
      },
      style,
    ]}
  />
);

const styles = StyleSheet.create({
  rotatedView: {
    height: ph(758),
    width: pw(618),
    borderRadius: 72,
    backgroundColor: 'white',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.11,
    shadowRadius: 25,
    elevation: 1,
  },
});

export default RotatedView;
