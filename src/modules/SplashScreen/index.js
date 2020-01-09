import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import AuthActions from '_store/models/auth';
import { getUserData } from '_helpers/storage';

class SplashScreen extends Component {
  async componentDidMount() {
    const {
      navigation,
      updateToken,
      updateRefreshToken,
      updateUser
    } = this.props;

    let { token, refreshToken, user } = await getUserData();
    user = JSON.parse(user);

    if (token) {
      updateUser(user);
      updateToken(token);
      updateRefreshToken(refreshToken);
    }

    if (token) {
      const { active } = user;
      navigation.navigate(active ? 'TabNav' : 'Profile');
    } else {
      navigation.navigate('LoginStack');
    }
  }

  render() {
    return <View />;
  }
}

export default connect(null, AuthActions)(SplashScreen);
