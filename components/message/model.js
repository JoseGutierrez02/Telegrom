const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = Schema({
  user: String,
  message: {
    type: String,
    required: true,
  },
  date: Date,
});

const Message = mongoose.model('Message', messageSchema);
module.exports = Message;
