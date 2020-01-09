import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import { Text } from '_components';
import styles from './styles';

const RadioButton = ({ placeholder, items, onChange, value, style }) => {
  return (
    <View style={[styles.container, style.container]}>
      <Text style={styles.text}>{placeholder}</Text>
      <View style={styles.radioBtnsContainer}>
        {items.map(function renderOption({ label, key, checked }) {
          return (
            <TouchableOpacity
              onPress={() => onChange(key)}
              style={styles.radioContainer}>
              <View style={styles.radio}>
                {value === key && <View style={styles.radioSelected} />}
              </View>
              <Text
                style={[
                  styles.radioText,
                  value === key && styles.radioTextSelected
                ]}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default RadioButton;
