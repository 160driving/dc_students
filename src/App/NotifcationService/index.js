import { Vibration } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import Firebase from '_services/firebase';

import { getUserData } from '_helpers/storage';
import alertStyles from './alertStyles';

const MESSAGE = 'NEW_MESSAGE';
const JOB = 'NEW_JOB_OFFER';

function navigateToChat({ notification, navigation, currentRoute = null }) {
  const {
    payload: {
      notificationID: notificationId,
      additionalData: {
        job_title: jobTitle = '',
        application_id: applicationId,
        firebase_id: firebaseId
      } = {}
    } = {}
  } = notification;

  const params = {
    firebaseId,
    disabledChat: false,
    applicationId,
    jobTitle,
    isNotification: true
  };

  if (currentRoute === 'Chat') {
    //TODO: HANDLE WHEN IS ON CHAT || IS ON INBOX
    navigation.resetRoute({ routeName: 'Chat', params });
  } else if (currentRoute === 'Inbox') {
    navigation.navigate({ routeName: 'Chat', params });
  } else {
    navigation.navigateToChat('TabNav', 'Chat', params);
  }
}

export function notificationReceived({
  notification,
  selectedConversation,
  navigation,
  store
}) {
  const {
    payload: {
      body,
      additionalData: {
        type,
        job_title: jobTitle = '',
        firebase_id: firebaseId,
        application_id: applicationId
      } = {}
    } = {}
  } = notification;
  //user is on the current chat, update the offer
  if (firebaseId === selectedConversation) {
    if (type === JOB) {
      store.dispatch({
        type: 'GET_LATEST_OFFER',
        applicationId,
        company: true
      });
    }
  } else {
    //we are not in that chat, show the blue message
    Vibration.vibrate([200, 300, 400]);
    showMessage({
      message: body,
      description: jobTitle,
      type: 'info',
      position: { top: 10, left: 10, right: 10 },
      floating: true,
      duration: 6000,
      titleStyle: alertStyles.titleStyle,
      textStyle: alertStyles.textStyle,
      backgroundColor: alertStyles.backgroundColor,
      onPress: () => {
        Vibration.cancel();
        const currentRoute = navigation.getCurrentRoute();
        navigateToChat({ navigation, notification, currentRoute });
      }
    });
  }
}
export function notificationOpened({ notification, navigation, store }) {
  // let { token, refreshToken, user } = await getUserData();
  // user = JSON.parse(user);

  // if (token) {
  //   store.dispatch({ type: 'UPDATE_USER', user });
  //   store.dispatch({ type: 'UPDATE_TOKEN', token });
  //   store.dispatch({ type: 'UPDATE_REFRESH_TOKEN', refreshToken });
  // }
  navigateToChat({ notification, navigation });
}
