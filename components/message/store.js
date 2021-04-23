const Message = require('./model');

const addMessage = (message) => {
  const newMessage = new Message(message);
  newMessage.save();
};

const getMessages = async (user) => {
  let filter = {};
  if(user) {
    filter.user = new RegExp(user, 'i');
  }
  const messageList = await Message.find(filter);
  return messageList;
};

const updateMessage = async (id, message) => {
  const updatedMessage = await Message.findOneAndUpdate(
    { _id: id }, 
    { message }, 
    { new: true },
  );

  return updatedMessage;
};

const deleteMessage = (id) => {
  return Message.deleteOne({ _id: id });
}

module.exports = {
  add: addMessage,
  list: getMessages,
  update: updateMessage,
  delete: deleteMessage,
};
