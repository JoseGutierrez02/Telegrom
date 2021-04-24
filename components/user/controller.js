const store = require('./store');

const addUser = (name) => {
  if(!name) {
    console.log('[messageController] There is no user');
    return Promise.reject('Missing data');
  }

  const user = {
    name,
  };

  return store.add(user);
};

const getUsers = () => {
  return store.list();
};

module.exports = {
  addUser,
  getUsers,
}