const express = require('express');
const messageRouter = require('../components/message/network');
const userRouter = require('../components/user/network');
const chatRouter = require('../components/chat/network');

const routes = (server) => {
  server.use('/message', messageRouter);
  server.use('/user', userRouter);
  server.use('/chat', chatRouter);
};

module.exports = routes;
