const db = require('mongoose');
require('dotenv').config();

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_NAME;
const URI = `mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/${dbName}`;

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
