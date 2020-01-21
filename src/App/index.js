import React, { Component } from 'react';
import { SafeAreaView, Platform, Vibration } from 'react-native';
import { Provider } from 'react-redux';
import OneSignal from 'react-native-onesignal';
import NavigationService from './NavigationService';
// import { notificationOpened, notificationReceived } from './NotifcationService';
import * as Sentry from '@sentry/react-native';
import DeviceInfo from 'react-native-device-info';

import FlashMessage from 'react-native-flash-message';
import AndroidKeyboardAdjust from 'react-native-android-keyboard-adjust';

import configureStore from '../store';
import rootSaga from '../store/sagas';
import AppContainer from './navigation';

console.reportErrorsAsExceptions = false;

Sentry.init({
  dsn: 'https://0448df22a9ae481f9cb4047504f16c11@sentry.io/1880949'
});

const store = configureStore();
store.runSaga(rootSaga);

class App extends Component {
  componentDidMount() {
    const getDeviceInfo = Promise.all([
      DeviceInfo.getBuildNumber(),
      DeviceInfo.getSystemName(),
      DeviceInfo.getSystemVersion(),
      DeviceInfo.getDeviceName()
    ]);
    getDeviceInfo.then(function setTags(info) {
      Sentry.setTags({
        buildNumber: info[0],
        deviceInfo: {
          systemName: info[1],
          systemVersion: info[2],
          deviceName: info[3]
        }
      });
    });

    if (Platform.OS === 'android') {
      AndroidKeyboardAdjust.setAdjustPan();
    }

    OneSignal.init('8a920c6d-b46c-4fb6-ab33-610f479b9bc4', {
      // kOSSettingsKeyInFocusDisplayOption: 0
    });
    OneSignal.enableVibrate(true);
    OneSignal.enableSound(true);
    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
  }

  // componentWillUnmount() {
  //   OneSignal.removeEventListener('received', this.onReceived);
  //   OneSignal.removeEventListener('opened', this.onOpened);
  //   OneSignal.removeEventListener('ids', this.onIds);
  // }

  onReceived(notification) {
    // const { chats: { selectedConversation } = {} } = store.getState();
    // notificationReceived({
    //   notification,
    //   navigation: NavigationService,
    //   selectedConversation,
    //   store
    // });
  }

  onOpened(openResult) {
    // notificationOpened({
    //   notification: openResult.notification,
    //   navigation: NavigationService,
    //   store
    // });
  }

  render() {
    return (
      <>
        <SafeAreaView style={{ flex: 1 }}>
          <AppContainer
            ref={navigatorRef => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
          />
        </SafeAreaView>
        <FlashMessage position={{ left: '50%', right: 15, top: 75 }} />
      </>
    );
  }
}

export default Main = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
