import React, { Component } from 'react';
import { View } from 'react-native';

import { Header, InfoScreen, Text } from '_components';
import { Inbox } from '_assets/img';
import { updateJobPage } from '_constants/landing-pages';
import { resetInsideStack } from '_helpers';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    updateJobPage(3);
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <Header title="Jobs" />
        <InfoScreen
          title="Your Inbox"
          Icon={Inbox}
          buttonTitle="Get Hired"
          onPress={() => {
            resetInsideStack(navigation, 'Swiper');
          }}>
          When an employer receives your application and wants to reach out,
          you’ll receive their message here.
          {'\n'}
          {'\n'}
          Once you’ve discussed details and come to an agreement, you’ll be
          given the option to accept or reject their offer.
          {'\n'}
          {'\n'}
          Don’t forget to claim your $100 Gift Card after you get hired.
          {'\n'}
          {'\n'}
          <Text style={{ fontWeight: '700', color: '#54B7FC' }}>
            Good Luck!
          </Text>
        </InfoScreen>
      </View>
    );
  }
}

export default Welcome;
