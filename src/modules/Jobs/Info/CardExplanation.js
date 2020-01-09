import React, { Component } from 'react';
import { View } from 'react-native';

import { Header, InfoScreen, Text } from '_components';
import { ThumbsUp } from '_assets/img';
import { updateJobPage } from '_constants/landing-pages';
import { resetInsideStack } from '_helpers';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    updateJobPage(2);
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <Header title="Jobs" />
        <InfoScreen
          title="Good Job!"
          Icon={ThumbsUp}
          buttonTitle="Next - Inbox"
          onPress={() => {
            resetInsideStack(navigation, 'InboxInfo');
          }}>
          Now that you’ve filled out your application forms, you can start
          applying to jobs.
          {'\n'}
          {'\n'}
          If you see a job you like,{' '}
          <Text style={{ fontWeight: '700', color: '#62C437' }}>
            swipe right
          </Text>{' '}
          and your application will be automatically sent to the employer.
          {'\n'}
          {'\n'}
          If you’re not interested,{' '}
          <Text style={{ fontWeight: '700', color: '#F26523' }}>
            swipe left
          </Text>{' '}
          and we’ll show you the next job.
        </InfoScreen>
      </View>
    );
  }
}

export default Welcome;
