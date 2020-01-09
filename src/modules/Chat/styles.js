import { Platform } from 'react-native';

import { GREY_TEXT, SKY } from '_constants/colors';

const container = {
  flex: 1
};

const bubble = {
  borderTopLeftRadius: 36,
  borderTopRightRadius: 36,
  paddingVertical: 17,
  paddingLeft: 30,
  paddingRight: 45
};

const leftBubble = {
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 36,
  ...bubble,
  backgroundColor: '#53B8FC'
};

const rightBubble = {
  borderBottomLeftRadius: 36,
  borderBottomRightRadius: 0,
  ...bubble,
  backgroundColor: '#B2B2B2'
};

const bubbleText = {
  fontFamily: 'Montserrat-Bold',
  color: '#fff',
  fontSize: 14,
  lineHeight: 15
};

const inputToolbarStyle = {
  borderTopWidth: 0,
  ...Platform.select({
    ios: {
      height: 80,
      marginBottom: 20
    },
    android: {
      height: 80
    }
  }),
  justifyContent: 'center'
};

const sendButton = {
  justifyContent: 'center',
  marginLeft: 15,
  height: '100%'
};

const textInputStyle = {
  paddingHorizontal: 15,
  backgroundColor: '#F2F2F2',
  borderRadius: 26,
  paddingTop: Platform.OS === 'ios' ? 20 : 0,
  paddingBottom: Platform.OS === 'ios' ? 10 : 0
};

const blockedView = {
  width: '100%',
  height: 150,
  alignItems: 'center'
};

const blockedViewTitle = {
  fontSize: 15,
  color: SKY,
  textAlign: 'center',
  marginBottom: 10
};

const blockedViewSubTitle = {
  fontSize: 14,
  color: GREY_TEXT,
  textAlign: 'center',
  marginBottom: 20
};

const blockedViewMessage = {
  fontSize: 12,
  color: GREY_TEXT,
  textAlign: 'center',
  marginBottom: 20
};

const blockedViewQuestion = {
  fontSize: 12,
  color: SKY,
  textAlign: 'center'
};

export {
  container,
  leftBubble,
  rightBubble,
  bubbleText,
  inputToolbarStyle,
  sendButton,
  textInputStyle,
  blockedView,
  blockedViewTitle,
  blockedViewSubTitle,
  blockedViewMessage,
  blockedViewQuestion
};
