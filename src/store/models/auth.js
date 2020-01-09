import AsyncStorage from '@react-native-community/async-storage';
import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions({
  logIn: ['email', 'password', 'navigation'],
  logInSuccess: [],
  logInFailed: [],
  updateUser: ['user'],
  updateToken: ['token'],
  updateRefreshToken: ['refreshToken'],
  logInQr: ['qr', 'navigation'],
  logInQrSuccess: [],
  logInQrFailed: [],

  changePassword: ['oldPassword', 'newPassword'],
  changePasswordSuccess: [],
  changePasswordFailed: [],

  updateProfile: ['profileData', 'navigation'],
  updateProfileSuccess: [],
  updateProfileFailed: []
});

export const AuthTypes = Types;

const INITIAL_STATE = {
  loadingLogin: false,
  token: '',
  refreshToken: '',
  user: {},
  loadingLoginQr: false,
  loadingChangePassword: false,
  loadingProfileUpdate: false
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOG_IN]: state => ({ ...state, loadingLogin: true }),
  [Types.LOG_IN_SUCCESS]: state => ({ ...state, loadingLogin: false }),
  [Types.LOG_IN_FAILED]: state => ({ ...state, loadingLogin: false }),
  [Types.UPDATE_USER]: (state, { user }) => {
    AsyncStorage.setItem('user', JSON.stringify(user));

    return { ...state, user };
  },
  [Types.UPDATE_TOKEN]: (state, { token }) => ({ ...state, token }),
  [Types.UPDATE_REFRESH_TOKEN]: (state, { refreshToken }) => ({
    ...state,
    refreshToken
  }),
  [Types.LOG_IN_QR]: state => ({ ...state, loadingLoginQr: true }),
  [Types.LOG_IN_QR_SUCCESS]: state => ({ ...state, loadingLoginQr: false }),
  [Types.LOG_IN_QR_FAILED]: state => ({ ...state, loadingLoginQr: false }),

  [Types.CHANGE_PASSWORD]: state => ({ ...state, loadingChangePassword: true }),
  [Types.CHANGE_PASSWORD_SUCCESS]: state => ({
    ...state,
    loadingChangePassword: false
  }),
  [Types.CHANGE_PASSWORD_FAILED]: state => ({
    ...state,
    loadingChangePassword: false
  }),
  [Types.UPDATE_PROFILE]: state => ({ ...state, loadingProfileUpdate: true }),
  [Types.UPDATE_PROFILE_SUCCESS]: state => ({
    ...state,
    loadingProfileUpdate: false
  }),
  [Types.UPDATE_PROFILE_FAILED]: state => ({
    ...state,
    loadingProfileUpdate: false
  })
});

export default Creators;
