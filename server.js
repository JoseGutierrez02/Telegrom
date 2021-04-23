const express = require('express');
const router = express.Router();
const response = require('./network/response');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

router.get('/message', (req, res) => {
  response.success(req, res, 'Message List');
});

router.post('/message', (req, res) => {
  response.success(req, res, 'Message created correctly', 201);
});

app.use('/app', express.static('public'));

app.listen(3000, () => {
  console.log('Server listening in http://localhost:3000');
});
