import moment from 'moment';

export const getChatList = (conversations, applications) => {
  const chats = applications.map(item => {
    const { lastMessage = {} } =
      conversations.find(i => i.id === item.firebaseId) || {};

    return {
      ...item,
      lastMessage
    };
  });

  return chats.sort((a, b) => {
    const first = a.lastMessage.createdAt || moment(a.createdAt).unix() * 1000;
    const second = b.lastMessage.createdAt || moment(b.createdAt).unix() * 1000;

    return second - first;
    //a.id - b.id
  });
};

export const getMessagesList = messages =>
  messages.map(({ id, text, createdAt, senderId }) => ({
    _id: id,
    text,
    createdAt: new Date(createdAt),
    user: {
      _id: senderId
    }
  }));
