import React, { Component } from 'react';
import { View } from 'react-native';
import OneSignal from 'react-native-onesignal';

import { Header, Button } from '_components';
import { SettingsIconBig } from '_assets/img';
import { BLUE } from '_constants/colors';
import { removeUserData } from '_helpers/storage';
import { settingsImg, buttonsTextStyle } from './styles';

class Settings extends Component {
  render() {
    const { goBack, navigate } = this.props.navigation;

    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Header title="Settings" goBack={true} onBackPressed={() => goBack()} />
        <SettingsIconBig style={settingsImg} />
        {/* 
        <Button
          textStyle={{ ...buttonsTextStyle, marginTop: 50 }}
          text="Update Job Profile"
          onPress={() => {
            navigate('Registration', { goBack: true });
          }}
        /> */}

        <Button
          textStyle={buttonsTextStyle}
          text="Change Password"
          onPress={() => {
            navigate('ChangePassword');
          }}
        />

        <Button
          textStyle={{ ...buttonsTextStyle, color: BLUE }}
          text="Log Out"
          onPress={() => {
            OneSignal.setSubscription(false);
            navigate('Login');
            removeUserData();
          }}
        />
      </View>
    );
  }
}

export default Settings;
