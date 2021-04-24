const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.get('/', (req, res) => {
  controller.getChats()
    .then((chatList) => {
      response.success(req, res, chatList, 200);
    })
    .catch((err) => {
      response.error(req, res, 'Internal error', 500, err)
    })
})

router.post('/', (req, res) => {
  const { users } = req.body
  controller.addChat(users)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((err) => {
      response.error(req, res, 'Internal error', 500, err);
    })
});

module.exports = router;
