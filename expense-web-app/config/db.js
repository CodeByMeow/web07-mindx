const { MongoClient } = require("mongodb");

const PORT = process.env.MONGODB_PORT;
const MONGODB_DBNAME = process.env.MONGODB_DBNAME;
const MONGODB_URI = "mongodb://localhost:${PORT}/${MONGODB_DBNAME}";

const client = new MongoClient(MONGODB_URI);
const db = {};

const connectToMongo = async () => {
  await client.connect();
  console.log("DB connected!");

  const database = client.db(MONGODB_DBNAME);
  db.categories = database.collections("categories");
};

module.exports = {
  connectToMongo,
  db,
};
