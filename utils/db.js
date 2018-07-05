require('dotenv').config();
const { MongoClient } = require('mongodb');
const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD } = process.env;

const getConnectUrl = ({
  host = DB_HOST,
  port = DB_PORT,
  name = DB_NAME,
  user = DB_USER,
  password = DB_PASSWORD,
} = {}) => {
  if (!host || !port || !name || !user || !password) {
    throw new Error('ERR::Missing database connection information.');
  }

  return `mongodb://${user}:${password}@${host}:${port}/${name}`;
};

const connect = ({
  host = DB_HOST,
  port = DB_PORT,
  name = DB_NAME,
  user = DB_USER,
  password = DB_PASSWORD,
} = {}) => {
  const url = getConnectUrl({ host, port, name, user, password });
  const client = MongoClient.connect(
    url,
    { useNewUrlParser: true },
  ).catch(console.error);

  return client;
};

module.exports = {
  connect,
  getConnectUrl,
};
