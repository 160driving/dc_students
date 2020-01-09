import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Text } from '_components';
import { Checked, UnChecked } from '_assets/img';
import { BLUE } from '_constants/colors';
import styles from './styles';

const Checkbox = ({
  title,
  id,
  checked = false,
  clicked = () => {},
  style = {}
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, style.container]}
      onPress={() => clicked(id)}>
      {checked ? <Checked /> : <UnChecked />}
      <Text style={[styles.text, checked && { color: BLUE }, style.text]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Checkbox;
