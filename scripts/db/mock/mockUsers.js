const faker = require('faker');
const bcrypt = require('bcryptjs');

const mockUsers = Array.from({ length: 10 }).map(() => {
  const createdAt = faker.date.between(2017, new Date());

  return {
    // _id: ObjectId(createdAt.getTime() / 1000),
    username: faker.internet.userName(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    description: faker.random.words(),
    profile_image_url: faker.internet.avatar(),
    location: faker.address.state(),
    url: faker.internet.url(),
    email: faker.internet.email(),
    password: bcrypt.hashSync(faker.internet.password(), 10),
    created_at: createdAt,
  };
});

module.exports = {
  mockUsers,
};
