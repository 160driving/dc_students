import React from 'react';
import { Text } from 'react-native';

const CustomText = ({ style, children }) => {
  return (
    <Text style={[style, { fontFamily: 'Montserrat-Bold' }]}>{children}</Text>
  );
};

export default CustomText;
