const store = require('./store');

const addMessage = (user, message) => {
  return new Promise((resolve, reject) => {
    if(!user || !message) {
      console.log('[messageController] There is no user or message');
      return reject('Missing data');
    }

    const fullMessage = {
      user: user,
      message: message,
      date: new Date(),
    };
    
    store.add(fullMessage)
    resolve(fullMessage);
  })
};

const getMessages = (user) => {
  return new Promise((resolve, reject) => {
    resolve(store.list(user));
  })
};

const updateMessage = (id, message) => {
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      console.log('[messageController] There is no id or message');
      return reject('Missing data');
    }

    const updatedMessage = await store.update(id, message);
    resolve(updatedMessage);
  })
};

const deleteMessage = (id) => {
  return new Promise((resolve, reject) => {
    if (!id) {
      console.log('[messageController] There is no id');
      return reject('Missing data');
    }

    store.delete(id)
      .then(() => resolve())
      .catch((err) => reject(err));
  }); 
}

module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessage,
}