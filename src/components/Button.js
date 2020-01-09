import React from 'react';
import { TouchableOpacity, ActivityIndicator } from 'react-native';

import Text from './Text';

const Button = ({
  style,
  text,
  textStyle,
  onPress,
  disabled = false,
  loading = false
}) => {
  const { color: indicatorColor = 'white' } = textStyle;
  return (
    <TouchableOpacity
      disabled={disabled || loading}
      style={style}
      onPress={onPress}>
      {loading ? (
        <ActivityIndicator color={indicatorColor} size="small" />
      ) : (
        <Text style={[{ textAlign: 'center', padding: 10 }, textStyle]}>
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
