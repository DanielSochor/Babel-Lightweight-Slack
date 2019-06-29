// Global name of the application
export const APP_NAME = '**Placeholder**';

// Chat Group Types
export const CHAT_GROUP_TYPES = {
  empty: 'empty',
  loading: 'loading',
  group: 'group',
  direct: 'direct'
};

// Notification strings for pubsub
export const NOTIF = {
  MODAL_TOGGLE: 'modal_toggle',
  SIGN_IN: 'signin',
  SIGN_UP: 'signup',
  SIGN_OUT: 'signout',
  MESSAGES_RECEIVED: 'messages_received'
};

// API routes
export const API = {
  getUsers: '/api/users',
  getUserById: '/api/user/',
  signin: '/api/users/login',
  signup: '/api/users',
  signout: '/api/users/login',
  deleteUserById: '/api/users/',
  getAllChannels: '/api/channels',
  getChannelById: '/api/channels/',
  createChannel: '/api/channels',
  deleteChannelById: '/api/channels/',
  // join: '/api/join',
  sendMessage: '/api/messages',
  getMessages: '/api/messages',
  getMessageById: '/api/messages/',
  deleteMessageById: '/api/messages/'
};

// Auth modal types
// Doubly purposed to be the text displayed at the top of the modal
export const AUTH_MODAL_TYPES = {
  signin: 'Sign In',
  signup: 'Sign Up'
};