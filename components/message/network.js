const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.get('/', (req, res) => {
  const { user } = req.query; 
  controller.getMessages(user)
    .then((messageList) => {
      response.success(req, res, messageList, 200);
    })
    .catch((err) => {
      response.error(req, res, 'Unexpected error', 500, err)
    })
});

router.post('/', (req, res) => {
  const { user, message } = req.body;
  controller.addMessage(user, message)
    .then((fullMessage) => {
      response.success(req, res, fullMessage, 201);
    })
    .catch((err) => {
      response.error(req, res, 'Invalid data', 400, err);
    });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const { message } = req.body;
  controller.updateMessage(id, message)
    .then((updatedMessage) => {
      response.success(req, res, updatedMessage, 201);
    })
    .catch((err) => {
      response.error(req, res, 'Invalid data', 400, err);
    });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  controller.deleteMessage(id)
    .then(() => {
      response.success(req, res, `Message ${id} was deleted successfully`, 201);
    })
    .catch((err) => {
      response.error(req, res, 'Internal error', 500, err);
    })
})

module.exports = router;
