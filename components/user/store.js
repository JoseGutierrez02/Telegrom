const User = require('./model');

const addUser = (user) => {
  const myUser = new User(user);
  return myUser.save();
};

const getUsers = async () => {
  const usersList = await User.find();
  return usersList;
} 

module.exports = {
  add: addUser,
  list: getUsers,
}