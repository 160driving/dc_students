import firebase from '@firebase/app';
import '@firebase/firestore';

import { ChatUserTypes } from '_constants/chats';

class FireStore {
  constructor() {
    this.init();

    this.unsubscribeMessagesListener = null;
  }

  init = () => {
    firebase.initializeApp({
      apiKey: 'AIzaSyBryVvHH1IXpXe6jMSWMFRoGLyDC5MjVN0',
      authDomain: 'tokyo-ring-258216.firebaseapp.com',
      databaseURL: 'https://tokyo-ring-258216.firebaseio.com',
      projectId: 'tokyo-ring-258216',
      storageBucket: 'tokyo-ring-258216.appspot.com',
      messagingSenderId: '297776382684',
      appId: '1:297776382684:web:7f21221a585198a92a2a19'
    });
  };

  getChats = (memberId, onChange = () => {}) => {
    firebase
      .firestore()
      .collection('Chats')
      .where('memberId', '==', memberId)
      .onSnapshot(function(querySnapshot) {
        var chats = [];
        querySnapshot.forEach(function(doc) {
          chats.push({ ...doc.data(), id: doc.id });
        });
        onChange(chats);
      });
  };

  getMessages = (docId, onChange = () => {}) => {
    this.unsubscribeMessagesListener = firebase
      .firestore()
      .collection('Chats')
      .doc(docId)
      .collection('messages')
      .orderBy('createdAt', 'desc')
      .onSnapshot(function(querySnapshot) {
        var messages = [];
        querySnapshot.forEach(function(doc) {
          messages.push({ ...doc.data(), id: doc.id });
        });
        onChange(messages);
        console.log('messages: ', messages);
      });
  };

  endMessagesListener = () => {
    if (this.unsubscribeMessagesListener !== null) {
      this.unsubscribeMessagesListener();
    }
  };

  isMessageNotSeenMode = (message = {}) => {
    const { seen, senderId } = message;
    return senderId === ChatUserTypes.EMPLOYER && seen === false;
  };

  startChat = (jobId, memberId) => {
    return new Promise((resolve, reject) => {
      firebase
        .firestore()
        .collection('Chats')
        .add({
          jobId,
          memberId,
          lastMessage: {}
        })
        .then(function(docRef) {
          console.log('Document written with ID: ', docRef.id);
          resolve(docRef.id);
        })
        .catch(function(error) {
          console.error('Error adding document: ', error);
          reject('Error adding document');
        });
    });
  };

  updateSeenLastMessage = docId => {
    firebase
      .firestore()
      .collection('Chats')
      .doc(docId)
      .update({
        'lastMessage.seen': true
      })
      .then(function() {
        console.log('lastMessage seen successfully updated!');
      });
  };

  updateLastMessage = (docId, message) => {
    firebase
      .firestore()
      .collection('Chats')
      .doc(docId)
      .update({
        lastMessage: message
      })
      .then(function() {
        console.log('lastMessage seen successfully updated!');
      });
  };

  sendMessage = (docId, message) => {
    firebase
      .firestore()
      .collection('Chats')
      .doc(docId)
      .collection('messages')
      .add(message)
      .then(function(docRef) {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch(function(error) {
        console.error('Error adding document: ', error);
      });
  };
}

const Firebase = new FireStore();
export default Firebase;
