import React, { Fragment } from 'react';
import { View, Image, TouchableOpacity, Platform, Aniated } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { GradientView } from '_components';
import { BackArrow, ProfileBackground } from '_assets/img';

import {
  gradientView,
  rotatedView,
  backArrowTouch,
  register,
  infoContainer
} from './styles';

const Background = ({ showBackButton = false, children, onBackPressed }) => {
  return (
    <Fragment>
      <GradientView style={gradientView} />
      <ProfileBackground style={rotatedView} />

      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        enableOnAndroid={true}
        enableAutomaticScroll={Platform.OS === 'ios'}
        contentContainerStyle={infoContainer}>
        <View style={register}>
          <Image source={require('_assets/img/profile_img.png')} />
        </View>
        {children}
      </KeyboardAwareScrollView>

      {showBackButton && (
        <TouchableOpacity onPress={onBackPressed} style={backArrowTouch}>
          <BackArrow width={36} height={21} />
        </TouchableOpacity>
      )}
    </Fragment>
  );
};

export default Background;
