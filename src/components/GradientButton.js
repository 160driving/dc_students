import React from 'react';
import { TouchableOpacity, View, ActivityIndicator } from 'react-native';

import { GradientView, Text } from '_components';
import { GRADIENT_ORANGE } from '_constants/colors';

const colorsWithOpacity = (colors, opacity) => {
  return [`${colors[0]}${opacity}`, `${colors[1]}${opacity}`];
};

const GradientButton = ({
  disabled = false,
  loading = false,
  text,
  onPress,
  textStyle = {},
  style = {},
  colors = GRADIENT_ORANGE,
  numberOfLines = 1
}) => {
  const { opacity, height = 50 } = style;
  const { color: indicatorColor = 'white' } = textStyle;
  return (
    <TouchableOpacity
      style={{ width: '100%', height, alignSelf: 'stretch' }}
      disabled={disabled || loading}
      onPress={onPress}>
      <View style={{ width: '100%', height, alignSelf: 'stretch' }}>
        <GradientView
          startpoint={{ x: 0, y: 0 }}
          endPoint={{ x: 1, y: 0 }}
          colors={opacity ? colorsWithOpacity(colors, opacity) : colors}
          style={[
            {
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center'
            },
            style
          ]}>
          {loading ? (
            <ActivityIndicator color={indicatorColor} size="small" />
          ) : (
            <Text
              elliptizeMode="middle"
              numberOfLines={numberOfLines}
              style={[
                { fontSize: 16, color: 'white', textAlign: 'center' },
                textStyle
              ]}>
              {text}
            </Text>
          )}
        </GradientView>
      </View>
    </TouchableOpacity>
  );
};
export default GradientButton;
