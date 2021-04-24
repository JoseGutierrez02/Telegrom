const store = require('./store');

const addChat = (users) => {
  if(!users || users.length < 2) {
    console.log('[chatController] There are missing users');
    return Promise.reject('Missing data');
  }

  const chat = {
    users: users
  };

  return store.add(chat);
}

const getChats = () => {
  return store.list();
}

module.exports = {
  addChat,
  getChats,
};
