import React, { Component } from 'react';
import { View } from 'react-native';

import { Header, InfoScreen } from '_components';
import { YellowTruck } from '_assets/img';

import { updateJobPage } from '_constants/landing-pages';
import { resetInsideStack } from '_helpers';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    updateJobPage(0);
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <Header title="Jobs" />
        <InfoScreen
          title="Welcome to Jobs"
          Icon={YellowTruck}
          buttonTitle="Get started"
          onPress={() => {
            resetInsideStack(navigation, 'Registration');
          }}>
          You’re just a moment away from having tens of thousands of trucking
          jobs at your fingertips.
          {'\n'}
          {'\n'}
          By pre-filling out this job application you can help us get the right
          information to your dream company!
          {'\n'}
          {'\n'}
          Go ahead and get started, and once you save this form we’ll show you
          how the job search works…
        </InfoScreen>
      </View>
    );
  }
}

export default Welcome;
