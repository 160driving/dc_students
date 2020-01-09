import React from 'react';
import { View, Platform } from 'react-native';
import {
  GiftedChat,
  Bubble,
  Send,
  InputToolbar
} from 'react-native-gifted-chat';
import AndroidKeyboardAdjust from 'react-native-android-keyboard-adjust';
import moment from 'moment';
import { connect } from 'react-redux';

import ChatsActions from '_store/models/chats';
import JobsActions from '_store/models/jobs';
import { Header, Text } from '_components';
import { JobRequest } from './Popups';
import { ChatUserTypes } from '_constants/chats';
import Firebase from '_services/firebase';
import { getMessagesList } from '_helpers/transform';
import { SendIcon, Information } from '_assets/img';
import * as styles from './styles';

class Chat extends React.Component {
  state = {
    messages: [],
    disabled: false,
    jobTitle: ''
  };

  componentDidMount() {
    const { updateMessages, getLatestOffer, navigation } = this.props;
    const {
      firebaseId,
      disabledChat,
      applicationId,
      jobTitle,
      isNotification
    } = navigation.state.params || {};
    if (Platform.OS === 'android') {
      AndroidKeyboardAdjust.setAdjustResize();
    }
    if (firebaseId) {
      Firebase.getMessages(firebaseId, messages => {
        updateMessages(messages);
        console.log('messages: ', messages);
        if (Firebase.isMessageNotSeenMode(messages[0])) {
          Firebase.updateSeenLastMessage(firebaseId);
        }
      });
    }
    getLatestOffer(applicationId, true);
    this.setState({ disabled: disabledChat, jobTitle });

    if (isNotification) {
      this.props.updateSelectedConversation(firebaseId);
      this.props.getJobApplications();
    }
  }

  componentWillUnmount() {
    if (Platform.OS === 'android') {
      AndroidKeyboardAdjust.setAdjustPan();
    }
    Firebase.endMessagesListener();
    this.props.updateSelectedConversation(null);
    this.props.resetLatestOffer();
    this.props.getJobApplications();
  }

  onSend(messages = []) {
    console.log('onSend: ', messages);
    const { navigation } = this.props;
    const { firebaseId } = navigation.state.params || {};

    const lastMessage = {
      createdAt: moment().unix() * 1000,
      seen: false,
      senderId: ChatUserTypes.MEMBER,
      text: messages[0].text
    };
    if (firebaseId) {
      Firebase.sendMessage(firebaseId, lastMessage);
      Firebase.updateLastMessage(firebaseId, lastMessage);
    }
  }

  goToJobOffer = () => {
    const { jobOffer, navigation } = this.props;
    navigation.navigate('JobOffer', {
      jobOffer,
      onDecline: () => {
        this.setState({ disabled: true });
      }
    });
  };

  renderBlockedView = () => {
    return (
      <View style={styles.blockedView}>
        <Text style={styles.blockedViewTitle}>We’re sorry!</Text>

        <Text style={styles.blockedViewSubTitle}>
          This position is no longer available.
        </Text>

        <Text style={styles.blockedViewMessage}>
          This conversation will remain in your inbox for 30 days, after which
          it will no longer be accessible.{' '}
        </Text>

        <Text style={styles.blockedViewQuestion}>
          Do you think you’re receiving this message in error?
        </Text>
      </View>
    );
  };

  renderBubble = props => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: styles.leftBubble,
          right: styles.rightBubble
        }}
        textStyle={{ left: styles.bubbleText, right: styles.bubbleText }}
      />
    );
  };

  renderInputToolbar = props => {
    if (this.state.disabled) {
      return <View />;
    }
    return (
      <InputToolbar {...props} containerStyle={styles.inputToolbarStyle} />
    );
  };

  renderSend(props) {
    return (
      <Send {...props} containerStyle={styles.sendButton}>
        <SendIcon />
      </Send>
    );
  }

  render() {
    const {
      jobOfferModalOpen,
      acceptJobOffer,
      declineJobOffer,
      jobOffer,
      navigation
    } = this.props;

    const { id } = jobOffer;

    return (
      <React.Fragment>
        <Header
          title={this.state.jobTitle}
          goBack={true}
          onBackPressed={() => {
            navigation.goBack();
          }}
          // ActionIcon={Information}
          // onActionIconPressed={this.goToJobOffer}
        />

        <View style={styles.container}>
          <View style={{ flex: 1, paddingHorizontal: 15 }}>
            <GiftedChat
              messages={this.props.messages}
              onSend={messages => this.onSend(messages)}
              alwaysShowSend
              showAvatarForEveryMessage={false}
              renderAvatar={null}
              renderBubble={this.renderBubble}
              renderTime={() => <View />}
              renderInputToolbar={this.renderInputToolbar}
              renderFooter={() => <View style={{ height: 80 }} />}
              renderSend={this.renderSend}
              textInputStyle={styles.textInputStyle}
              minComposerHeight={50}
              bottomOffset={Platform.OS === 'ios' ? -30 : 0}
              user={{
                _id: ChatUserTypes.MEMBER
              }}
            />

            {this.state.disabled && this.renderBlockedView()}
          </View>

          <JobRequest
            onAcceptPressed={() => {
              acceptJobOffer(id);
            }}
            onDeclinePressed={() => {
              declineJobOffer(id);
              this.setState({ disabled: true });
            }}
            onMoreInfoPressed={this.goToJobOffer}
            isModalVisible={jobOfferModalOpen}
          />
        </View>
      </React.Fragment>
    );
  }
}

function mapStateToProps({ jobs, chats }) {
  return {
    jobOffer: jobs.jobOffer,
    loadingGetJobOffer: jobs.loadingGetJobOffer,
    loadingAcceptJobOffer: jobs.loadingAcceptJobOffer,
    loadingDeclineJobOffer: jobs.loadingDeclineJobOffer,
    jobOfferModalOpen: jobs.jobOfferModalOpen,

    messages: getMessagesList(chats.messages),
    selectedConversation: chats.selectedConversation
  };
}

export default connect(mapStateToProps, { ...ChatsActions, ...JobsActions })(
  Chat
);
