import firebase from '@firebase/app';
import '@firebase/firestore';

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
      });
  };

  endMessagesListener = () => {
    if (this.unsubscribeMessagesListener !== null) {
      this.unsubscribeMessagesListener();
    }
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
          resolve(docRef.id);
        })
        .catch(function(error) {
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
      .then(function() {});
  };

  updateLastMessage = (docId, message) => {
    firebase
      .firestore()
      .collection('Chats')
      .doc(docId)
      .update({
        lastMessage: message
      })
      .then(function() {});
  };

  sendMessage = (docId, message) => {
    firebase
      .firestore()
      .collection('Chats')
      .doc(docId)
      .collection('messages')
      .add(message)
      .then(function(docRef) {})
      .catch(function(error) {});
  };
}

const Firebase = new FireStore();
export default Firebase;
