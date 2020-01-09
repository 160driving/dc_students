import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import OneSignal from 'react-native-onesignal';

import { put, call } from 'redux-saga/effects';

import AuthActions from '../models/auth';
import {
  logInService,
  logInQrService,
  changePasswordService,
  updateProfileService
} from '_services/auth';
import { storeUserData } from '_helpers/storage';

export function* logIn({ email, password, navigation }) {
  OneSignal.setSubscription(true);
  const { userId } = yield new Promise(resolve => {
    OneSignal.getPermissionSubscriptionState(status => {
      resolve(status);
    });
  });

  const response = yield call(logInService, email, password, userId);

  const { success, data } = response || {};

  if (success === 1) {
    const { member, accessToken, refreshToken } = data;
    const { active } = member;
    yield put(AuthActions.logInSuccess());
    yield put(AuthActions.updateUser(member));
    yield put(AuthActions.updateToken(accessToken));
    yield put(AuthActions.updateRefreshToken(refreshToken));
    storeUserData(member, accessToken, refreshToken);
    navigation.navigate(active ? 'TabNav' : 'Profile');
  } else {
    yield put(AuthActions.logInFailed());
    OneSignal.setSubscription(false);
    Alert.alert('Failed to login', 'Please check your credentials');
  }
}

export function* logInQr({ qr, navigation }) {
  OneSignal.setSubscription(true);
  const { userId } = yield new Promise(resolve => {
    OneSignal.getPermissionSubscriptionState(status => {
      resolve(status);
    });
  });
  const response = yield call(logInQrService, qr, userId);
  const { success, data } = response || {};

  if (success === 1) {
    const { member, accessToken, refreshToken } = data;
    const { active } = member;

    yield put(AuthActions.logInSuccess());
    yield put(AuthActions.updateUser(member));
    yield put(AuthActions.updateToken(accessToken));
    yield put(AuthActions.updateRefreshToken(refreshToken));

    storeUserData(member, accessToken, refreshToken);
    navigation.navigate(active ? 'TabNav' : 'Profile');
  } else {
    yield put(AuthActions.logInQrFailed());
    Alert.alert('Failed to login', 'Please check your credentials');
  }
}

export function* changePassword({ oldPassword, newPassword }) {
  const response = yield call(changePasswordService, oldPassword, newPassword);

  const { success, data } = response || {};
  if (success === 1) {
    yield put(AuthActions.changePasswordSuccess());
    Alert.alert('Password updated successfully', '', [{ text: 'OK' }], {
      cancelable: false
    });
  } else {
    yield put(AuthActions.changePasswordFailed());
    Alert.alert('Password change failed', '', [{ text: 'OK' }], {
      cancelable: false
    });
  }
}

export function* updateProfile({ profileData, navigation }) {
  const response = yield call(updateProfileService, profileData);
  const { success, data } = response || {};
  console.log('UPDATE PROFILE DATA: ', data);

  if (success === 1) {
    const { member } = data;
    console.log('MEMBER UPDATE PROFLE: ', member);

    yield put(AuthActions.updateProfileSuccess());
    yield put(AuthActions.updateUser(member));
    AsyncStorage.setItem('user', JSON.stringify(member));
    navigation.navigate('Dashboard');
  } else {
    yield put(AuthActions.updateProfileFailed());
    Alert.alert('Failed to update profile information');
  }
}
