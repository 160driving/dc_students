import React, { Component } from 'react';
import { View, Text as Avenir } from 'react-native';

import { Text, Checkbox } from '_components';
import styles from './styles';

class CheckboxGroup extends Component {
  checkboxClicked = id => {
    const { onChange } = this.props;
    const value = this.props.value || [];
    let newValues = [...value];
    const index = newValues.indexOf(id);

    if (index === -1) {
      newValues.push(id);
    } else {
      newValues.splice(index, 1);
    }

    onChange(newValues);
  };

  render() {
    const { label, items, style = {}, error } = this.props;
    const value = this.props.value || [];

    return (
      <View style={[styles.container, style.container]}>
        <Text style={styles.titleText}>{label}</Text>

        {items.map(({ label, key }, index) => {
          return (
            <Checkbox
              title={label}
              id={key}
              key={index}
              checked={value.indexOf(key) != -1}
              clicked={id => {
                this.checkboxClicked(id);
              }}
            />
          );
        })}
        {!!error && <Avenir style={styles.errorText}>{error}</Avenir>}
      </View>
    );
  }
}

export default CheckboxGroup;
