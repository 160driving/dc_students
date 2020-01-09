import React from 'react';
import Date from 'react-native-datepicker';
import { View, Text as Avenir } from 'react-native';

import { Text } from '_components';

import styles from './styles';

const Datepicker = ({
  value,
  onChange,
  style = {},
  labelUp = false,
  label = '',
  renderIcon,
  error,
  ...props
}) => {
  return (
    <View style={[styles.container, style.container]}>
      {labelUp && (
        <Text style={[{ marginBottom: 13 }, style.label]}>{label}</Text>
      )}
      <View style={styles.dateContainer}>
        <Date
          {...props}
          showIcon={false}
          style={[styles.date, style.date]}
          date={value}
          mode="date"
          format="MM/DD/YYYY"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateInput: styles.date,
            dateText: styles.inputText
          }}
          onDateChange={date => onChange && onChange(date)}
        />

        {!!renderIcon && <View style={[styles.icon]}>{renderIcon()}</View>}
      </View>
      {/* {!labelUp && <Text style={styles.label}>{label}</Text>} */}
      {!!error && <Avenir style={styles.errorText}>{error}</Avenir>}
    </View>
  );
};

export default Datepicker;
