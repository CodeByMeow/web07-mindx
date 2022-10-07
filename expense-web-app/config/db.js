const { MongoClient } = require("mongodb");

const PORT = process.env.MONGODB_PORT;
const MONGODB_DBNAME = process.env.MONGODB_DBNAME;
const MONGODB_URI = `mongodb://127.0.0.1:${PORT}`;

const client = new MongoClient(MONGODB_URI);

const db = {};
const connectToMongo = async () => {
  await client.connect();
  console.log("DB connected!");

  const database = client.db(MONGODB_DBNAME);
  db.users = database.collection("users");
};

module.exports = {
  connectToMongo,
  db,
};
