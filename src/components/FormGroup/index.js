import React, { Component } from 'react';
import { View, TouchableOpacity, Text as Avenir } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import {
  Text,
  Datepicker,
  DateRange,
  Input,
  Select,
  RadioButton,
  Button
} from '_components';

import { CloseX } from '_assets/img';

import { styles, component } from './styles';

class FormGroup extends Component {
  constructor(props) {
    super(props);
    const { items } = this.props;
    const value = this.props.value || [{}];
    const formItems = value.map(function createItemGroups() {
      return items;
    });

    this.state = {
      formItems
    };
  }

  getComponent = type => {
    switch (type) {
      case 'date':
        return Datepicker;
      case 'select':
        return Select;
      case 'checkbox':
        return CheckboxGroup;
      case 'radioButton':
        return RadioButton;
      case 'dateRange':
        return DateRange;
      default:
        return Input;
    }
  };

  renderComponent = (item, fieldValue, index) => {
    const { key, type, label, renderIcon, subItems, ...rest } = item;
    const Component = this.getComponent(type);
    const { value, onChange } = this.props;

    return (
      <Component
        key={key}
        value={fieldValue}
        renderIcon={renderIcon}
        onChange={newValue => {
          value[index][item.key] = newValue;
          onChange(value);
        }}
        labelUp={false}
        style={component}
        placeholder={label}
        {...rest}
      />
    );
  };

  groupRemoved = index => {
    const { value, onChange } = this.props;
    value.splice(index, 1);

    onChange(value);
  };

  renderGroups(error) {
    const { groupLabel, items } = this.props;

    const value = this.props.value || [];

    return value.map((groupValue, index) => (
      <View style={styles.groupContainer}>
        <View style={styles.groupTitleContainer}>
          <Text style={styles.groupTitle}>{`${groupLabel} ${index + 1}`}</Text>
          <TouchableOpacity
            onPress={() => this.groupRemoved(index)}
            style={styles.closeButton}>
            <CloseX />
          </TouchableOpacity>
        </View>

        {items.map(item =>
          this.renderComponent(item, groupValue[item.key], index)
        )}
        {error.index === index && (
          <Avenir style={styles.errorText}>{error.message}</Avenir>
        )}
      </View>
    ));
  }

  addAnotherPressed() {
    const { onChange } = this.props;
    const value = this.props.value || [];
    onChange([...value, {}]);
  }

  render() {
    const { label, error = {}, buttonTitle } = this.props;
    const value = this.props.value || [];
    const anOrAnother = value.length > 0 ? 'Another' : 'An';

    return (
      <View style={[styles.container]}>
        <Text style={styles.title}>{label}</Text>
        <KeyboardAwareScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}>
          {this.renderGroups(error)}
          <Button
            onPress={() => {
              this.addAnotherPressed();
            }}
            text={`Add ${anOrAnother} ${buttonTitle}`}
            style={styles.button}
            textStyle={styles.buttonText}
          />
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

export default FormGroup;
