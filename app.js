const { MongoClient } = require('mongodb');
const uri = `mongodb://localhost:27017`;
const client = new MongoClient(uri);

async function run() {
  const database = client.db('firstDB');
  const users = database.collection('users');

  //   const userData = await users.insertOne({ name: 'hyunjoo', age: 24 });
  //   console.log('result', userData);

  //   const userList = [
  //     { name: 'hyunjoo', age: 34 },
  //     { name: 'mina', age: 17 },
  //   ];
  //   const userListResult = await users.insertMany(userList);
  //   console.log('result', userListResult);
  //   const findUser = await users.findOne({ age: { $gt: 20 } });
  //   console.log('result', findUser);
  //   const updateUser = await users.updateOne(
  //     { name: 'hyunjoo' },
  //     { $set: { age: 28 } }
  //   );
  //   console.log(updateUser);
  //   const deleteUsers = await users.deleteMany({ age: { $gt: 20 } });
  //   console.log('ddd', deleteUsers);
  //   const userData = await users
  //     .find({ name: 'mina' })
  //     .project({ _id: 0 })
  //     .toArray();
  //   console.log('userData', userData);
}
run();

async function run2() {
  const database = client.db('firstDB');
  const users = database.collection('inventory');
  //   const userData = await users.insertOne({
  //     item: 'canvas',
  //     qty: 100,
  //     tags: ['cotton'],
  //     size: { h: 28, w: 35.5, uom: 'cm' },
  //   });
  //   console.log('ddd', userData);

  await users.insertMany([
    {
      item: 'journal',
      qty: 25,
      tags: ['blank', 'red'],
      size: { h: 14, w: 21, uom: 'cm' },
    },
    {
      item: 'mat',
      qty: 85,
      tags: ['gray'],
      size: { h: 27.9, w: 35.5, uom: 'cm' },
    },
    {
      item: 'mousepad',
      qty: 25,
      tags: ['gel', 'blue'],
      size: { h: 19, w: 22.85, uom: 'cm' },
    },
  ]);

  const data = users.find({}).toArray();
  console.log('ddd', data);
}
run2();
