import base from './base';

export const logInService = (email, password, deviceToken) =>
  base
    .post('login', {
      email,
      password,
      deviceToken,
      deviceInfo: {}
    })
    .catch(err => {});

export const logInQrService = qr =>
  base
    .post('login/qr', { qrCode: qr, deviceToken: '', deviceInfo: {} })
    .catch(err => {});

export const changePasswordService = (oldPassword, newPassword) =>
  base.post('password_change', { oldPassword, newPassword }).catch(err => {});

export const updateProfileService = profileInfo =>
  base.patch('profile', profileInfo).catch(err => {});
