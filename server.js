const express = require('express');
const routes = require('./network/routes');
const db = require('./db');

db();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
routes(app);

app.use('/app', express.static('public'));

app.listen(3000, () => {
  console.log('Server listening in http://localhost:3000');
});
