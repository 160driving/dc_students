import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';

import {Text} from '_components';
import {PRIMARY_COLOR, WHITE} from '_constants/colors';
import {
  container,
  questionTextStyle,
  questionNrTextStyle,
  optionButton,
  valueContainer,
  valueTextStyle,
} from './styles';

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {selectedOptionId: -1};
  }

  renderOptions = () => {
    const {options, onSelect} = this.props;
    const {selectedOptionId} = this.state;
    const optionKeys = Object.keys(options);
    const optionsArray = optionKeys.map(key => ({
      id: key,
      value: options[key],
    }));

    return (
      <View style={{marginLeft: 8}}>
        {optionsArray.map(({id, value}, index) => {
          const isSelected = selectedOptionId === id;
          const isLastOption = index === optionsArray.length - 1;
          return (
            <TouchableOpacity
              key={id}
              style={[optionButton, {marginBottom: isLastOption ? 0 : 21}]}
              onPress={() => {
                this.setState({selectedOptionId: id});
                onSelect(id);
              }}>
              <View
                style={[
                  valueContainer,
                  {
                    borderWidth: isSelected ? 0 : 3,
                    backgroundColor: isSelected ? PRIMARY_COLOR : WHITE,
                  },
                ]}
              />
              <Text
                style={[
                  valueTextStyle,
                  {color: isSelected ? PRIMARY_COLOR : '#A0A0A0'},
                ]}>
                {value}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  render() {
    const {question, inputNo} = this.props;
    return (
      <View style={container}>
        <Text style={questionTextStyle}>
          <Text style={questionNrTextStyle}>{`${inputNo}. `}</Text>
          {question}
        </Text>
        <View style={{marginTop: 8}}>{this.renderOptions()}</View>
      </View>
    );
  }
}

export default Checkbox;
