import React, { Component } from 'react';
import { View } from 'react-native';

import { Header, Text, Button } from '_components';

import {
  NeedsImprovementFace,
  ProficientFace,
  SatisfactoryFace,
  UnsuccessfulFace
} from '_assets/img';

import {
  resultsTopTextStyle,
  testResultTextStyle,
  explanationTextStyle,
  backToDashboardBtn,
  backToBashboardBtnTextStyle,
  testResultIcon
} from './styles';

function generateResultsAndIcon(result) {
  const res = result < 1 ? Math.round(result * 100) : result;

  switch (true) {
    case res <= 40:
      return { status: 'Unsuccessful', Face: UnsuccessfulFace };
    case res <= 60:
      return { status: 'Needs Improvement', Face: NeedsImprovementFace };
    case res <= 80:
      return { status: 'Satisfactory', Face: SatisfactoryFace };
    case res < 100:
      return { status: 'Proficient', Face: ProficientFace };
  }
}

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { goBack, popToTop, state } = this.props.navigation;
    const { result } = state.params;
    const { Face, status } = generateResultsAndIcon(result);
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Header
          title="General Knowledge"
          goBack={true}
          onBackPressed={() => {
            goBack();
          }}
        />
        <Text style={resultsTopTextStyle}>Your results are</Text>
        <Face style={testResultIcon} />
        <Text style={testResultTextStyle}>{status}</Text>
        <Text style={explanationTextStyle}>
          These results are for educational purposes only and do not affect your
          performance on the LMS system.
        </Text>
        <Button
          style={backToDashboardBtn}
          textStyle={backToBashboardBtnTextStyle}
          text="Back to Dashboard"
          onPress={() => {
            popToTop();
          }}
        />
      </View>
    );
  }
}

export default Result;
