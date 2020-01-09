import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions({
  updateConversations: ['conversations'],
  updateMessages: ['messages'],
  updateSelectedConversation: ['selectedConversation']
});

export const ChatsTypes = Types;

const INITIAL_STATE = {
  conversations: [],
  messages: [],
  selectedConversation: null
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.UPDATE_CONVERSATIONS]: (state, { conversations }) => ({
    ...state,
    conversations
  }),
  [Types.UPDATE_MESSAGES]: (state, { messages }) => ({
    ...state,
    messages
  }),
  [Types.UPDATE_SELECTED_CONVERSATION]: (state, { selectedConversation }) => ({
    ...state,
    selectedConversation,
    messages: []
  })
});

export default Creators;
