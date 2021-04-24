const express = require('express');
const messageRouter = require('../components/message/network');
const userRouter = require('../components/user/network');

const routes = (server) => {
  server.use('/message', messageRouter);
  server.use('/user', userRouter);
};

module.exports = routes;
