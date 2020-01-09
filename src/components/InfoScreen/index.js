import React from 'react';
import { View, Text as InnerText } from 'react-native';

import { Text, GradientButton } from '_components';
import { GRADIENT_BLUE } from '_constants/colors';
import {
  container,
  titleStyle,
  buttonContainer,
  button,
  textStyle
} from './styles';

const InfoScreen = ({ title, Icon, buttonTitle, onPress, children }) => (
  <View style={container}>
    <Text style={titleStyle}>{title}</Text>
    <Icon style={{ marginVertical: 40 }} />
    <InnerText style={textStyle}>{children}</InnerText>
    <View style={buttonContainer}>
      <GradientButton
        text={buttonTitle}
        textStyle={{ fontSize: 14 }}
        style={button}
        colors={GRADIENT_BLUE}
        onPress={onPress}
      />
    </View>
  </View>
);

export default InfoScreen;
