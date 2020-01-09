import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

import { Text } from '_components';
import { GREY_TEXT } from '_constants/colors';
import {
  container,
  proportionWidth,
  inputNoTextStyle,
  questionContainer,
  limitContainer
} from '_helpers/dimensions';

import { questionTextStyle } from './styles';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { charachters: 0, charachterLimitReached: false };
  }
  render() {
    const { onChange, value, question, placeHolder, inputNo } = this.props;
    return (
      <View style={container}>
        <Text style={questionTextStyle}>
          <Text style={inputNoTextStyle}>{`${inputNo}. `}</Text>
          {question}
        </Text>
        <View style={questionContainer}>
          <View style={[limitContainer, { marginLeft: proportionWidth(40) }]}>
            <Text
              style={{
                color: this.state.charachterLimitReached
                  ? '#FB7A5D'
                  : '#70707050'
              }}>
              {this.state.charachters}/300
            </Text>
          </View>
          <TextInput
            multiline={true}
            style={{ padding: 12, color: GREY_TEXT }}
            onChangeText={value => {
              if (value.length < 300) {
                onChange(value);
                this.setState({ charachterLimitReached: false });
              } else {
                this.setState({ charachterLimitReached: true });
              }
              this.setState({ charachters: value.length });
            }}
            placeholder={placeHolder}
            value={value}
          />
        </View>
      </View>
    );
  }
}

export default Input;
