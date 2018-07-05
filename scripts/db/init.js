const { connect, getConnectUrl } = require('../../utils/db');
const { COLLECTION_USERS } = require('../../constants');

const DB_COLLECTION = [COLLECTION_USERS];

const run = async () => {
  const client = await connect();
  const db = client.db();

  const collections = (await db.collections().catch(console.error))
    .map(({ s }) => s.name)
    .filter(name => name !== 'system.indexes');

  console.log('\nDropping collections');
  for (let name of collections) {
    console.log(`-> ${name}`);
    await db.dropCollection(name).catch(console.error);
  }

  console.log('\nCreating collections');
  for (let name of DB_COLLECTION) {
    console.log(`-> ${name}`);
    await db.createCollection(name).catch(console.error);
  }

  console.log('\nTask completed successfully !!!');
  client.close().catch(console.error);
};

run();
