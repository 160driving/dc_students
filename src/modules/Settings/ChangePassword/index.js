import React, { Component, Fragment } from 'react';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';

import AuthActions from '_store/models/auth';
import { Header, Text, Input, GradientButton } from '_components';
import {
  PasswordUnVisible,
  PasswordVisible,
  PasswordLongTick,
  PasswordSpecsBullet,
  PasswordMismatchCross
} from '_assets/img';
import { GRADIENT_BLUE } from '_constants/colors';
import {
  container,
  inputLabelTextStyle,
  inputStyle,
  passwordSecurityIssuesTextStyle,
  innerSpeckContainer,
  yourNewPasswordAgainTextStyle,
  applyButtonTextStyle,
  applyButton,
  passwordSecurityStatusTextStyle,
  applyButtonContainer
} from './styles';

class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oldPassword: '',
      oldPasswordVisible: false,
      newPassword: '',
      newPasswordVisible: false,
      newPasswordAgain: '',
      newPasswordAgainVisible: false
    };
  }

  renderPasswordIcon = visible =>
    visible ? <PasswordVisible /> : <PasswordUnVisible />;

  renderNewPasswordSpec = (isOk, text) => {
    const Icon = isOk ? PasswordLongTick : PasswordSpecsBullet;
    return (
      <View style={innerSpeckContainer}>
        <View style={{ width: 10 }}>
          <Icon />
        </View>
        <Text
          style={[
            passwordSecurityIssuesTextStyle,
            isOk && { color: '#3BBF2D' }
          ]}>
          {text}
        </Text>
      </View>
    );
  };

  getPasswordSpecs = password => {
    const isShort = password.length <= 5;
    const hasSymbol = (function hasSymbol() {
      const format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
      return format.test(password);
    })();
    const hasNumber = (function hasNumber() {
      return password.match(/\d+/g) != null;
    })();
    const isStrong = !isShort && hasSymbol | hasNumber;
    return {
      isShort,
      hasNumber,
      hasNumber,
      isStrong
    };
  };

  renderNewPasswordSecuritySpecs = () => {
    const { newPassword } = this.state;
    if (newPassword == '') {
      return null;
    } else {
      const { isShort, hasNumber, hasSymbol, isStrong } = this.getPasswordSpecs(
        newPassword
      );
      return (
        <React.Fragment>
          <Text
            style={[
              passwordSecurityStatusTextStyle,
              isStrong ? { color: '#3BBF2D' } : { color: '#FA6244' }
            ]}>
            {isStrong ? 'Strong' : 'Weak'}
          </Text>
          {this.renderNewPasswordSpec(!isShort, 'More than 5 characters')}
          {this.renderNewPasswordSpec(
            hasNumber | hasSymbol,
            'At least one number or symbol'
          )}
        </React.Fragment>
      );
    }
  };

  renderPasswordMatchStatus = () => {
    const { newPassword, newPasswordAgain } = this.state;
    if (newPasswordAgain == '') {
      return null;
    } else {
      const passMatch = !!(newPassword === newPasswordAgain);
      const Icon = passMatch ? PasswordLongTick : PasswordMismatchCross;
      return (
        <View style={innerSpeckContainer}>
          <View style={{ width: 10 }}>
            <Icon />
          </View>
          <Text
            style={[
              { ...passwordSecurityIssuesTextStyle, color: '#FA6244' },
              passMatch && { color: '#3BBF2D' }
            ]}>
            {passMatch ? 'Passwords match' : 'Passwords do not match'}
          </Text>
        </View>
      );
    }
  };

  applyBtnEnabled = () => {
    const { oldPassword, newPassword, newPasswordAgain } = this.state;
    const { isStrong } = this.getPasswordSpecs(newPassword);
    return (
      oldPassword.length > 5 && isStrong && newPassword == newPasswordAgain
    );
  };

  submit = () => {
    const { oldPassword, newPassword } = this.state;

    this.props.changePassword(oldPassword, newPassword);
  };

  render() {
    const {
      oldPassword,
      oldPasswordVisible,
      newPassword,
      newPasswordVisible,
      newPasswordAgain,
      newPasswordAgainVisible
    } = this.state;

    const { loading } = this.props;

    return (
      <Fragment>
        <Header
          title="Change Password"
          goBack={true}
          onBackPressed={() => {
            this.props.navigation.goBack();
          }}
        />
        <KeyboardAwareScrollView
          enableOnAndroid={true}
          enableAutomaticScroll={Platform.OS === 'ios'}
          contentContainerStyle={container}>
          <Text style={inputLabelTextStyle}>Your old password</Text>
          <Input
            value={oldPassword}
            onChange={oldPassword => {
              this.setState({ oldPassword });
            }}
            secureTextEntry={!oldPasswordVisible}
            renderIcon={() => this.renderPasswordIcon(oldPasswordVisible)}
            onIconPress={() =>
              this.setState({ oldPasswordVisible: !oldPasswordVisible })
            }
            style={inputStyle}
          />
          <Text style={inputLabelTextStyle}>Your new password</Text>
          <Input
            value={newPassword}
            onChange={newPassword => this.setState({ newPassword })}
            secureTextEntry={!newPasswordVisible}
            renderIcon={() => this.renderPasswordIcon(newPasswordVisible)}
            onIconPress={() => {
              this.setState({ newPasswordVisible: !newPasswordVisible });
            }}
            style={inputStyle}
          />
          {this.renderNewPasswordSecuritySpecs()}
          <Text style={yourNewPasswordAgainTextStyle}>
            Your new password again
          </Text>
          <Input
            value={newPasswordAgain}
            onChange={newPasswordAgain => this.setState({ newPasswordAgain })}
            secureTextEntry={!newPasswordAgainVisible}
            renderIcon={() => this.renderPasswordIcon(newPasswordAgainVisible)}
            onIconPress={() => {
              this.setState({
                newPasswordAgainVisible: !newPasswordAgainVisible
              });
            }}
            style={{ ...inputStyle }}
          />
          {this.renderPasswordMatchStatus()}

          <View style={applyButtonContainer}>
            <GradientButton
              loading={loading}
              colors={GRADIENT_BLUE}
              disabled={!this.applyBtnEnabled()}
              style={[
                applyButton,
                !this.applyBtnEnabled() && {
                  opacity: 0.6
                }
              ]}
              textStyle={applyButtonTextStyle}
              text="Apply"
              onPress={this.submit}
            />
          </View>
        </KeyboardAwareScrollView>
      </Fragment>
    );
  }
}

function mapStateToProps({ auth }) {
  return { loading: auth.loadingChangePassword };
}

export default connect(mapStateToProps, AuthActions)(ChangePassword);
