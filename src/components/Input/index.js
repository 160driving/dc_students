import React, { Component, Fragment } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text as Avenir
} from 'react-native';

import { Text } from '_components';

import {
  container,
  inputContainer,
  textStyle,
  iconContainer,
  labelStyle,
  charLimitStyle,
  errorContainer,
  errorText
} from './styles';

class Input extends Component {
  render() {
    const {
      style = {},
      placeholder,
      secureTextEntry = false,
      keyboardType = 'default',
      value = '',
      label,
      charLimit,
      renderIcon = null,
      onIconPress = () => null,
      onChange = () => {},
      error
    } = this.props;
    return (
      <View style={[container, style.container]}>
        {!!label && <Text style={[labelStyle, style.label]}>{label}</Text>}
        <View
          style={[
            inputContainer,
            style,
            !!charLimit && { height: 75 },
            !!error && errorContainer
          ]}>
          {!!renderIcon && (
            <TouchableOpacity
              style={iconContainer}
              disabled={!onIconPress}
              onPress={onIconPress}>
              {renderIcon()}
            </TouchableOpacity>
          )}
          <TextInput
            multiline={charLimit ? true : false}
            autoCapitalize="none"
            style={textStyle}
            placeholder={label ? null : placeholder}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            value={value}
            onChangeText={onChange}
          />
        </View>
        {charLimit && (
          <Text
            style={charLimitStyle}>{`${charLimit} Characters Remaining`}</Text>
        )}
        {!!error && <Avenir style={errorText}>{error}</Avenir>}
      </View>
    );
  }
}

export default Input;
