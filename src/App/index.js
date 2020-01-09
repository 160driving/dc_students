import React, { Component } from 'react';
import { SafeAreaView, Platform, Vibration } from 'react-native';
import { Provider } from 'react-redux';
import OneSignal from 'react-native-onesignal';
import NavigationService from './NavigationService';
import * as Sentry from '@sentry/react-native';
import DeviceInfo from 'react-native-device-info';

import FlashMessage, { showMessage } from 'react-native-flash-message';
import AndroidKeyboardAdjust from 'react-native-android-keyboard-adjust';

import { getUserData } from '_helpers/storage';
import configureStore from '../store';
import rootSaga from '../store/sagas';
import AppContainer from './navigation';

console.reportErrorsAsExceptions = false;

Sentry.init({
  dsn: 'https://4fa6286634f144d98199ff2c7178c0a5@sentry.io/1862389'
});

Sentry.setTags({
  buildNumber: DeviceInfo.getBuildNumber(),
  deviceInfo: {
    systemName: DeviceInfo.getSystemName(),
    systemVersion: DeviceInfo.getSystemVersion(),
    deviceName: DeviceInfo.getDeviceName()
  }
});

const store = configureStore();
store.runSaga(rootSaga);

class App extends Component {
  state = {
    notificationShowing: false
  };

  componentDidMount() {
    if (Platform.OS === 'android') {
      AndroidKeyboardAdjust.setAdjustPan();
    }

    OneSignal.init('4fecd6f5-d1ae-48fe-9896-6bf223430ee7', {
      kOSSettingsKeyInFocusDisplayOption: 0
    });
    OneSignal.enableVibrate(true);
    OneSignal.enableSound(true);
    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
    OneSignal.inFocusDisplaying(0);
  }

  // componentWillUnmount() {
  //   OneSignal.removeEventListener('received', this.onReceived);
  //   OneSignal.removeEventListener('opened', this.onOpened);
  //   OneSignal.removeEventListener('ids', this.onIds);
  // }

  onReceived(notification) {
    const isOnChat = NavigationService.getCurrentRoute() === 'Chat';
    const { title, body } = notification.payload;
    if (isOnChat) {
      Vibration.vibrate([200, 300, 400]);
    } else {
      Vibration.vibrate([200, 300, 400]);
      showMessage({
        message: 'You have a new message',
        description: body,
        type: 'info',
        position: { top: 10, left: 10, right: 10 },
        floating: true,
        duration: 3000,
        titleStyle: {
          fontFamily: 'Montserrat-Bold',
          alignSelf: 'stretch',
          textAlign: 'left',
          paddingTop: 6,
          fontSize: 13
        },
        textStyle: {
          fontFamily: 'Avenir',
          paddingBottom: 6,
          fontSize: 12,
          marginTop: 14
        },
        hideOnPress: { isOnChat },
        backgroundColor: '#52B9FC',
        onPress: () => {
          if (!isOnChat) {
            const {
              firebase_id,
              application_id,
              job_title = ''
            } = notification.payload.additionalData;

            Vibration.cancel();
            NavigationService.navigateToChat('TabNav', 'Chat', {
              firebaseId: firebase_id,
              disabledChat: false,
              applicationId: application_id,
              jobTitle: job_title,
              isNotification: true
            });
          }
        }
      });
    }
  }

  async onOpened(openResult) {
    //TODO: HERE MANAGE THE NOTIFICATION WHEN CLICKED FROM OUTSIDE THE APP

    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
    const {
      firebase_id,
      application_id,
      job_title = ''
    } = openResult.notification.payload.additionalData;

    let { token, refreshToken, user } = await getUserData();
    console.log('token, refreshToken, user: ', token, refreshToken, user);
    user = JSON.parse(user);

    if (token) {
      store.dispatch({ type: 'UPDATE_USER', user });
      store.dispatch({ type: 'UPDATE_TOKEN', token });
      store.dispatch({ type: 'UPDATE_REFRESH_TOKEN', refreshToken });

      NavigationService.navigateToChat('TabNav', 'Chat', {
        firebaseId: firebase_id,
        disabledChat: false,
        applicationId: application_id,
        jobTitle: job_title,
        isNotification: true
      });
    }
  }

  // onIds(device) {}

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
