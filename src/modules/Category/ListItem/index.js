import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { BoxShadow } from 'react-native-shadow';

import { Gauge, Text } from '_components';
import { PreTripLeft } from '_assets/img';
import {
  UNSUCCESSFUL,
  NEEDS_IMPROVEMENT,
  SATISFACTORY,
  PROFICIENT
} from '_constants/colors';

import {
  container,
  containerShadow,
  innerContainer,
  titleStyle,
  performanceRateStyle
} from './styles';

const generateColorFromResult = performance => {
  switch (performance) {
    case 0:
      return UNSUCCESSFUL;
    case 1:
      return NEEDS_IMPROVEMENT;
    case 2:
      return SATISFACTORY;
    case 3:
      return PROFICIENT;
    default:
      return '#A0A0A0';
  }
};

getPerformanceStatus = performance => {
  const performanceMapping = {
    0: 'Unsuccessful',
    1: 'Needs improvement',
    2: 'Satisfactory',
    3: 'Proficient'
  };
  const performanceStatus = performanceMapping[performance];

  return performanceStatus ? performanceStatus : 'No info';
};

getPerformanceKey = performance => {
  const performanceMapping = {
    0: 'UNSUCCESFUL',
    1: 'NEEDS IMPROVEMENT',
    2: 'SATISFACTORY',
    3: 'PROFICIENT'
  };

  return performanceMapping[performance];
};

const ListItem = ({ index, performance, title, id, onItemPressed }) => {
  return (
    <BoxShadow setting={containerShadow}>
      <TouchableOpacity style={container} onPress={() => onItemPressed(id)}>
        <View style={{ flex: 1 }}>
          <PreTripLeft
            width={145}
            height={145}
            style={index % 2 === 0 && { transform: [{ rotateY: '180deg' }] }}
          />
          <View style={innerContainer}>
            <Gauge
              style={{ height: 62, width: 62, marginTop: 0 }}
              performance={getPerformanceKey(performance)}
            />
            <Text style={titleStyle}>{title}</Text>

            <Text
              style={[
                performanceRateStyle,
                { color: generateColorFromResult(performance) }
              ]}>
              {getPerformanceStatus(performance)}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </BoxShadow>
  );
};

export default ListItem;
