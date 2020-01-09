import React from 'react';
import { BoxShadow } from 'react-native-shadow';

import {
  EmptyGauge,
  NeedsImprovementGauge,
  ProficientGauge,
  SatisfactoryGauge,
  UnsuccessfulGauge,
} from '_assets/img';

import { gaugeStyle, gaugeShadow } from './styles';

const generateGaugeFromResult = result => {
  switch (result) {
    case 'UNSUCCESFUL':
      return UnsuccessfulGauge;
    case 'NEEDS IMPROVEMENT':
      return NeedsImprovementGauge;
    case 'SATISFACTORY':
      return SatisfactoryGauge;
    case 'PROFICIENT':
      return ProficientGauge;
    default:
      return EmptyGauge;
  }
};

const Gauge = ({ style = {}, performance }) => {
  const {
    marginTop = 0,
    marginLeft = 0,
    marginRight = 0,
    marginBottom = 0,
    height = 62,
    width = 62,
  } = style;

  const Gauge = generateGaugeFromResult(performance);

  return (
    <BoxShadow
      setting={{
        ...gaugeShadow,
        height,
        width,
        radius: height / 2,
        style: {
          marginVertical: marginTop - marginBottom,
          marginHorizontal: marginLeft - marginRight,
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}>
      <Gauge
        style={[
          gaugeStyle,
          style,
          {
            marginTop: 0,
            marginRight: 0,
            marginLeft: 0,
            marginRight: 0,
            display: 'flex',
          },
        ]}
      />
    </BoxShadow>
  );
};

export default Gauge;
