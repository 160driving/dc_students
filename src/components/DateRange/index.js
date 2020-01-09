import React, { useState } from 'react';
import { View } from 'react-native';

import { Datepicker } from '_components';
import styles from './styles';

const DateRange = ({ renderIcon, value = {}, items, onChange }) => {
  const [dates, setDates] = useState({ ...value });

  return (
    <View style={styles.container}>
      {items.map(function renderDateComponent({ label, key }) {
        return (
          <Datepicker
            key={key}
            placeholder={label}
            value={dates[key]}
            style={{ container: { width: '48%' } }}
            onChange={value => {
              let dts = { ...dates };
              dts[key] = value;
              setDates(dts);
              onChange({ ...dts });
            }}
            renderIcon={renderIcon}
          />
        );
      })}
    </View>
  );
};

export default DateRange;
