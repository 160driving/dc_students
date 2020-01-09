import React from 'react';
import { View, Text as Avenir } from 'react-native';
import Slider from '@react-native-community/slider';

import { Text } from '_components';
import { BLUE } from '_constants/colors';
import styles from './styles';

const SliderComponent = ({
  label,
  style = {},
  valType,
  decimalPlaces = false,
  min,
  error,
  max,
  step,
  onChange,
  inverted = false,
  currency = '',
  ...rest
}) => {
  const value = rest.value || min;
  const roundValue = value =>
    decimalPlaces ? Math.round(value * 100) / 100 : Math.round(value);
  return (
    <View style={[styles.container, style.container]}>
      <Text style={styles.label}>{label}</Text>
      <Slider
        value={value}
        onValueChange={value => {
          onChange(value);
        }}
        style={styles.slider}
        minimumValue={min}
        maximumValue={max}
        step={step}
        minimumTrackTintColor={inverted ? BLUE : '#F0F0F0'}
        maximumTrackTintColor={inverted ? '#F0F0F0' : BLUE}
        thumbTintColor={BLUE}
        {...rest}
      />
      <Text style={[styles.label, styles.value]}>{`${currency &&
        currency} ${roundValue(value)}${valType}`}</Text>
      {!!error && <Avenir style={styles.error}>{error}</Avenir>}
    </View>
  );
};

export default SliderComponent;
