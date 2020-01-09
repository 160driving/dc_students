import React from 'react';
import { View, Text as Avenir } from 'react-native';
import PickerSelect from 'react-native-picker-select';

import { Text } from '_components';
import { pickerStyles, styles } from './styles';

function returnViewContainer(renderView) {
  return (
    <View style={{ height: '100%', justifyContent: 'center' }}>
      {renderView()}
    </View>
  );
}

const Select = ({
  onChange,
  placeholder,
  label,
  labelUp = false,
  style = {},
  renderIcon,
  value,
  error,
  items = [],
  ...props
}) => {
  return (
    <View style={[styles.container, style.container]}>
      {labelUp && (
        <Text style={[{ marginBottom: 13 }, style.label]}>{label}</Text>
      )}
      <View>
        <PickerSelect
          useNativeAndroidPickerStyle={false}
          style={pickerStyles}
          value={value}
          placeholder={{}}
          itemKey={'value'}
          onValueChange={value => {
            onChange && onChange(value);
          }}
          Icon={!!renderIcon ? () => returnViewContainer(renderIcon) : null}
          items={[
            { label: label || placeholder || 'Select an item', value: null },
            ...items
          ]}
          {...props}
        />
      </View>
      {!!error && <Avenir style={styles.errorText}>{error}</Avenir>}
    </View>
  );
};

export default Select;
