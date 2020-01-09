import React from 'react';
import { View, Image, ScrollView } from 'react-native';

import { BoxShadow } from 'react-native-shadow';

import { Text } from '_components';

import {
  containerShadow,
  container,
  titleStyle,
  specsTextStyle,
  imageContainer,
  specsContainer,
  bulletPoint,
} from './styles';

const renderBulletListItem = (text, index, squarePoint = false) => (
  <View
    key={index}
    style={{
      flexDirection: 'row',
      alignItems: 'center',
    }}>
    <View style={[bulletPoint, !!squarePoint && { borderRadius: 0 }]} />
    <Text style={specsTextStyle}>{text}</Text>
  </View>
);

const ListItem = ({ title, image, specs, style, left = 0, right = 0 }) => (
  <BoxShadow
    setting={{
      ...containerShadow,
      style: { marginLeft: left, marginRight: right },
    }}>
    <View style={[container, style]}>
      <Image style={imageContainer} />
      <View style={specsContainer}>
        <Text style={titleStyle}>{title}</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          {specs.map(function renderText(value, index) {
            if (typeof value === 'string') {
              return renderBulletListItem(value, index);
            } else {
              return (
                <React.Fragment>
                  {renderBulletListItem(value.title)}
                  <View style={{ marginLeft: 15 }}>
                    {value.innerValues.map(function renderText(value, index) {
                      return renderBulletListItem(value, index, true);
                    })}
                  </View>
                </React.Fragment>
              );
            }
          })}
        </ScrollView>
      </View>
    </View>
  </BoxShadow>
);

export default ListItem;
