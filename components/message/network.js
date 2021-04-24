const path = require('path');
const multer = require('multer');
const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

const storage = multer.diskStorage({
  destination: 'public/files/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname))
  }
});

const upload = multer({ storage: storage });

router.get('/', (req, res) => {
  const { chat } = req.query;
  controller.getMessages(chat)
    .then((messageList) => {
      response.success(req, res, messageList, 200);
    })
    .catch((err) => {
      response.error(req, res, 'Unexpected error', 500, err)
    })
});

router.post('/', upload.single('file'), (req, res) => {
  const { user, message, chat } = req.body;
  const { file } = req;
  controller.addMessage(user, message, chat, file)
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
