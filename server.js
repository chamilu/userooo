require('dotenv').config();
const fastify = require('fastify')();
const path = require('path');
const cors = require('cors');
const { getConnectUrl } = require('./utils/db');

const { COLLECTION_USERS } = require('./constants');
const port = process.env.PORT || 3000;

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'dist'),
});

fastify.register(require('fastify-mongodb'), {
  url: getConnectUrl(),
  useNewUrlParser: true,
});

fastify.get('/api/users', async (request, reply) => {
  const db = fastify.mongo.db;

  const users = await db
    .collection(COLLECTION_USERS)
    .find({})
    .toArray();

  reply.type('application/json').send(users);
});

fastify.listen(port, err => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`server listening on ${fastify.server.address().port}`);
});
