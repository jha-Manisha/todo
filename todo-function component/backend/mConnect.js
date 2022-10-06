
const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'todoApp';
const client = new MongoClient(url);

async function getData () {
let result = await client.connect();
let db = result.db(dbName );
 return db.collection('lists');
};


module.exports = getData;