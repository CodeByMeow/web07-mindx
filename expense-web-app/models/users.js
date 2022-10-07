const { db } = require("../config/db");
module.exports = {
  list: async () => {
    return await db.users.find({}).toArray();
  },
  create: async ({ username, password }) => {
    return await db.users.insertOne({ username, password });
  },
};
