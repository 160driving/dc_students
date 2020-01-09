import React, { Component, Fragment } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import OneSignal from 'react-native-onesignal';
import Modal from 'react-native-modal';
import { connect } from 'react-redux';

import { proportionHeight as ph } from '_helpers/dimensions';
import {
  GradientView,
  RotatedView,
  Input,
  Button,
  GradientButton,
  Text
} from '_components';
import { GREEN, PRIMARY_COLOR } from '_constants/colors';
import {
  Logo160,
  ScanQrCode,
  QrCodeScanned,
  LoginBackground
} from '_assets/img';
import AuthActions from '_store/models/auth';
import QrCodeScanner from './QrCodeScanner';

import {
  gradient,
  rotatedView,
  infoContainer,
  forgotPasswordBtn,
  forgotPasswordTxt,
  dontHaveAcc,
  signUpBtn,
  signUpTxt,
  scanQrTxt,
  loginBtn,
  loginBtnContainer,
  inputsContainer
} from './styles';

const credentials = __DEV__
  ? {
      email: 'andi.ndrecka1@gmail.com',
      password: 'Andindrecka1'
    }
  : {
      email: '',
      password: ''
    };

class Login extends Component {
  constructor(props) {
    super(props);
    OneSignal.getPermissionSubscriptionState(status => {
      console.log('ONESIGNAL ID', status.userId);
    });
  }

  state = {
    ...credentials,
    scanned: false,
    showModal: false
  };

  onScanSuccess = qrCode => {
    const { navigation } = this.props;
    this.props.logInQr(qrCode, navigation);
    this.closeModal();
  };

  openModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { email, password, scanned, showModal } = this.state;
    const { logIn, navigation, loadingLogin } = this.props;
    const QrCodeIcon = scanned ? QrCodeScanned : ScanQrCode;
    const scanQrTextColor = scanned ? GREEN : PRIMARY_COLOR;

    return (
      <Fragment>
        <GradientView
          startPoint={{ x: 1, y: 0 }}
          endPoint={{ x: 0, y: 0 }}
          style={gradient}
        />

        <LoginBackground style={rotatedView} />

        <View style={infoContainer}>
          <TouchableOpacity
            onPress={this.openModal}
            style={{ alignItems: 'center' }}>
            <QrCodeIcon style={{ marginTop: ph(16) }} />
            <Text style={{ ...scanQrTxt, color: scanQrTextColor }}>
              Scan QR CODE
            </Text>
          </TouchableOpacity>

          <Image
            style={{ marginTop: 20 }}
            source={require('_assets/img/login.png')}
          />

          <View style={inputsContainer}>
            <Input
              style={{ marginTop: ph(36) }}
              placeholder="E-Mail"
              value={email}
              onChange={email => this.setState({ email })}
            />

            <Input
              secureTextEntry
              placeholder="Password"
              style={{ marginTop: ph(19) }}
              value={password}
              onChange={password => this.setState({ password })}
            />
          </View>

          {/* <Button
            style={forgotPasswordBtn}
            textStyle={forgotPasswordTxt}
            text="Forgot Password?"
          /> */}

          <View style={loginBtnContainer}>
            <GradientButton
              marginTop={ph(42)}
              style={loginBtn}
              text="Log In"
              loading={loadingLogin}
              onPress={() => logIn(email, password, navigation)}
            />
            {/* 
            <Text style={dontHaveAcc}>Don’t have an account yet?</Text>

            <Button
              style={signUpBtn}
              textStyle={signUpTxt}
              text="Sign Up"
              onPress={() => {
                this.props.navigation.navigate('Register');
              }}
            /> */}
          </View>
        </View>

        <Modal isVisible={showModal} style={{ margin: 0 }}>
          <QrCodeScanner
            onScanSuccess={this.onScanSuccess}
            close={this.closeModal}
          />
        </Modal>
      </Fragment>
    );
  }
}

function mapStateToProps({ auth }) {
  return { loadingLogin: auth.loadingLogin };
}

export default connect(mapStateToProps, AuthActions)(Login);
