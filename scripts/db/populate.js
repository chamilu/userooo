const { connect } = require('../../utils/db');
const { COLLECTION_USERS } = require('../../constants');
const { mockUsers } = require('./mock/mockUsers');

const run = async () => {
  const client = await connect();
  const db = client.db();

  console.log('\nPopulating collection');
  console.log(`-> ${COLLECTION_USERS}`);
  await db
    .collection(COLLECTION_USERS)
    .insertMany(mockUsers)
    .catch(console.error);

  console.log('\nTask completed successfully !!!');
  client.close().catch(console.error);
};

run();
