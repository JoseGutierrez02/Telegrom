const express = require('express');
const app = express();
const server = require('http').Server(app);
const db = require('./db');
const routes = require('./network/routes');
const socket = require('./socket');
const config = require('./config'); 
const cors = require('cors');

db();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
socket.connect(server);
routes(app);

app.use('/app', express.static('public'));

server.listen(config.port, () => {
  console.log(`Server listening in http://localhost:${config.port}`);
});
