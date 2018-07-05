require('dotenv').config();
const fastify = require('fastify')();
const cors = require('cors');
const { getConnectUrl } = require('./utils/db');

// fastify.use(cors());

fastify.register(require('fastify-mongodb'), {
  url: getConnectUrl(),
  useNewUrlParser: true,
});

fastify.get('/status', async (request, reply) => {
  reply.type('application/json').code(200);
  return true;
});

fastify.get('/', (request, reply) => {
  reply.send({ hello: 'world' });
});

fastify.listen(3000, err => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`server listening on ${fastify.server.address().port}`);
});
