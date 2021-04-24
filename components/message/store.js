const Message = require('./model');

const addMessage = (message) => {
  const newMessage = new Message(message);
  newMessage.save();
};

const getMessages = async (chat) => {
  return new Promise((resolve, reject) => {
    let filter = {};
    if(chat) filter.chat = chat;
    Message.find(filter)
      .populate('user')
      .exec((error, populated) => {
        (error) 
          ? reject(error) 
          : resolve(populated);
      });
  })
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
