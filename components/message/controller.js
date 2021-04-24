const store = require('./store');

const addMessage = (user, message, chat, file) => {
  return new Promise((resolve, reject) => {
    if(!user || !message || !chat) {
      console.log('[messageController] There is no user, message or chat');
      return reject('Missing data');
    }

    let fileUrl = '';
    if(file) fileUrl = `http://localhost:3000/app/files/${file.filename}`;

    const fullMessage = {
      user: user,
      message: message,
      chat: chat,
      date: new Date(),
      file: fileUrl,
    };
    
    store.add(fullMessage)
    resolve(fullMessage);
  })
};

const getMessages = (chat) => {
  return new Promise((resolve, reject) => {
    resolve(store.list(chat));
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