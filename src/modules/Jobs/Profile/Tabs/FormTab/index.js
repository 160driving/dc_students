import React from 'react';
import { View, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Field } from 'form';

import {
  Input,
  Datepicker,
  Select,
  Slider,
  CheckboxGroup,
  FormGroup,
  GradientButton,
  GooglePlacesInput
} from '_components';
import { GRADIENT_BLUE } from '_constants/colors';
import { styles, componentStyle } from './styles';

function getFieldComponent(type) {
  switch (type) {
    case 'date':
      return Datepicker;
    case 'select':
      return Select;
    case 'checkbox':
      return CheckboxGroup;
    case 'slider':
      return Slider;
    case 'formGroup':
      return FormGroup;
    case 'placesAutoComplete':
      return GooglePlacesInput;
    default:
      return Input;
  }
}

function renderField({
  key,
  value,
  onChange,
  type,
  label,
  renderIcon,
  ...rest
}) {
  const Component = getFieldComponent(type);

  return (
    <Field
      name={key}
      render={fieldProps => (
        <Component
          {...rest}
          key={key}
          // value={value}
          labelUp={true}
          renderIcon={renderIcon}
          style={componentStyle}
          label={label}
          {...fieldProps}
        />
      )}
    />
  );
}

const GenericTab = ({
  topText,
  config,
  buttonTitle = 'Next',
  onButtonPress,
  loading = false
}) => {
  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}>
      {topText && <Text style={styles.topText}>{topText}</Text>}
      {config.map(renderField)}

      <View style={{ height: 30 }} />
      <GradientButton
        style={styles.button}
        text={buttonTitle}
        colors={GRADIENT_BLUE}
        onPress={onButtonPress}
        loading={loading}
      />
    </KeyboardAwareScrollView>
  );
};

export default GenericTab;
