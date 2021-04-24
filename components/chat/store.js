const Chat = require('./model');

const addChat = (chat) => {
  const myChat = new Chat(chat);
  return myChat.save();
}

const getChats = () => {
  return new Promise((resolve, reject) => {
    Chat.find()
      .populate('users')
      .exec((error, populated) => {
        (error)
          ? reject(error)
          : resolve(populated);
      })
  })
}

module.exports = {
  add: addChat,
  list: getChats,
};
