const db = require('mongoose');
const config = require('./config');

const URI = `mongodb+srv://${config.dbUser}:${config.dbPassword}@${config.dbHost}/${config.dbName}`;

db.Promise = global.Promise;
const connect = async () => {
  try {
    await db.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('[db] Connected successfully');
  } catch (err) {
    console.log(`[db] ${err}`);
  }
}

module.exports = connect;
