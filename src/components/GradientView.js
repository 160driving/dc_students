import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import { GRADIENT_ORANGE } from '_constants/colors';

const GradientView = ({
  style,
  children,
  colors = GRADIENT_ORANGE,
  startPoint = { x: 0, y: 0 },
  endPoint = { x: 1, y: 0 },
}) => {
  return (
    <LinearGradient
      start={startPoint}
      end={endPoint}
      colors={colors}
      style={style}>
      {children}
    </LinearGradient>
  );
};

export default GradientView;
