import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';

import JobsActions from '_store/models/jobs';
import ChatsActions from '_store/models/chats';
import { Header, EmptyScreen } from '_components';
import { OpenedMessage } from '_assets/img';
import { Card } from './sections';
import { ChatUserTypes } from '_constants/chats';
import Firebase from '_services/firebase';
import { getChatList } from '_helpers/transform';

import * as styles from './styles';

class Inbox extends Component {
  componentDidMount() {
    const { user, updateConversations } = this.props;
    if (user.id) {
      Firebase.getChats(user.id, chats => {
        updateConversations(chats);
      });
    }
    // this.props.getJobApplications();
    this.props.navigation.addListener('didFocus', () =>
      this.props.getJobApplications()
    );
  }

  componentDidUpdate() {
    const { selectedConversation, chatList, user } = this.props;
    if (selectedConversation) {
      const chat = chatList.find(
        item => item.firebaseId === selectedConversation
      );
      if (
        chat &&
        chat.lastMessage &&
        this.isMessageNotSeenMode(chat.lastMessage)
      ) {
        Firebase.updateSeenLastMessage(selectedConversation);
      }
    }
  }

  isMessageNotSeenMode = (message = {}) => {
    const { seen, senderId } = message;
    return senderId === ChatUserTypes.EMPLOYER && seen === false;
  };

  goToChat = (
    firebaseId,
    updateLastMessage,
    disabledChat,
    applicationId,
    jobTitle
  ) => {
    const { navigation, updateSelectedConversation } = this.props;

    updateSelectedConversation(firebaseId);
    navigation.navigate('Chat', {
      firebaseId,
      disabledChat,
      applicationId,
      jobTitle
    });
    if (updateLastMessage && firebaseId) {
      Firebase.updateSeenLastMessage(firebaseId);
    }
  };

  render() {
    const { chatList } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <Header title={'Inbox'} />

        <View style={styles.container}>
          <FlatList
            data={chatList}
            renderItem={({ item }) => (
              <Card
                {...item}
                goToChat={this.goToChat}
                isMessageNotSeenMode={this.isMessageNotSeenMode}
              />
            )}
            contentContainerStyle={styles.listContainer}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => `${item.id}`}
            ListEmptyComponent={() => (
              <EmptyScreen
                Icon={OpenedMessage}
                title="No Messages"
                message="Apply to the jobs you are interested in, in order to be able to chat with the employers"
                bottomMessage="Good luck on your applications!"
              />
            )}
          />
        </View>
      </View>
    );
  }
}

function mapStateToProps({ auth, jobs, chats }) {
  return {
    user: auth.user,
    chatList: getChatList(chats.conversations, jobs.applications),
    selectedConversation: chats.selectedConversation
  };
}

export default connect(mapStateToProps, { ...JobsActions, ...ChatsActions })(
  Inbox
);
