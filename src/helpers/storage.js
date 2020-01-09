import AsyncStorage from '@react-native-community/async-storage';
import { getPath } from 'utils';

const LANDING_PAGES = 'landing_pages';
const DASHBOARD = 'dashboard';

export const KEYS = {
  LANDING_PAGES,
  DASHBOARD
};

export const hasOpenedDashboardBefore = async () => {
  try {
    let hasCheckedDashboard = await AsyncStorage.getItem('dashboardOpened');
    return !!hasCheckedDashboard;
  } catch (e) {
    return false;
  }
};

export const getUserData = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    const refreshToken = await AsyncStorage.getItem('refreshToken');
    let user = await AsyncStorage.getItem('user');
    return {
      token,
      refreshToken,
      user
    };
  } catch (e) {
    // saving error
  }
};

export const storeUserData = async (member, accessToken, refreshToken) => {
  try {
    AsyncStorage.setItem('user', member ? JSON.stringify(member) : member);
    AsyncStorage.setItem('token', accessToken);
    AsyncStorage.setItem('refreshToken', refreshToken);
  } catch (e) {
    // saving error
  }
};

export const removeUserData = async (member, accessToken, refreshToken) => {
  try {
    await AsyncStorage.removeItem('user');
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('refreshToken');
  } catch (e) {
    // saving error
  }
};

export const storeLandingPagesData = async (key, value) => {
  try {
    const data = await AsyncStorage.getItem(KEYS.LANDING_PAGES);
    let values = JSON.parse(data) || {};
    values = {
      ...values,
      [key]: value
    };
    await AsyncStorage.setItem(KEYS.LANDING_PAGES, JSON.stringify(values));
  } catch (e) {
    // saving error
  }
};

export const getLandingPagesData = async (key, defaultValue) => {
  try {
    const data = await AsyncStorage.getItem(KEYS.LANDING_PAGES);
    const value = getPath(JSON.parse(data), key);
    if (value) {
      return value;
      // value previously stored
    } else {
      await storeLandingPagesData(key, defaultValue);
      return defaultValue;
    }
  } catch (e) {
    // error reading value
    return defaultValue;
  }
};
