require('dotenv');
const fastify = require('fastify')({ logger: false });

fastify.get('/', (request, reply) => {
  request.log.info('Some info about the current request');
  reply.send({ hello: 'world' });
});

fastify.listen(3000, err => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`server listening on ${fastify.server.address().port}`);
});
