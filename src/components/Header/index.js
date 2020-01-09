import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { BorderShadow, BoxShadow } from 'react-native-shadow';

import { LeftBackArrow } from '_assets/img';
import { Text } from '_components';
import {
  container,
  titleContainer,
  textStyle,
  subTitleStyle,
  shadowStyle,
  backArrowContainer,
  actionIconContainer
} from './styles';

const Header = ({
  title,
  subtitle,
  onBackPressed,
  goBack = false,
  style = {},
  ActionIcon,
  onActionIconPressed
}) => (
  <BoxShadow setting={shadowStyle}>
    <View style={[container, style]}>
      {goBack ? (
        <TouchableOpacity onPress={onBackPressed} style={backArrowContainer}>
          <LeftBackArrow />
        </TouchableOpacity>
      ) : (
        <View style={{ width: 40 }} /> /* Just to keep the text on center */
      )}

      <View style={titleContainer}>
        <Text numberOfLines={1} style={textStyle}>
          {title}
        </Text>

        {subtitle && (
          <Text numberOfLines={1} style={subTitleStyle}>
            {subtitle}
          </Text>
        )}
      </View>

      {ActionIcon ? (
        <TouchableOpacity
          onPress={onActionIconPressed}
          style={actionIconContainer}>
          <ActionIcon />
        </TouchableOpacity>
      ) : (
        <View style={{ width: 40 }} />
      )}
    </View>
  </BoxShadow>
);

export default Header;
