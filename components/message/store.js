const Message = require('./model');

const addMessage = (message) => {
  const newMessage = new Message(message);
  newMessage.save();
};

const getMessages = async (user) => {
  return new Promise(async (resolve, reject) => {
    let filter = {};
    if(user) filter.user = new RegExp(user, 'i');
    Message.find(filter)
      .populate('user')
      .exec((error, populated) => (error) ? reject(error) : resolve(populated));
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
