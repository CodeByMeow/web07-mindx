const { db } = require("../config/db");
module.exports = {
  getUser: async (query = {}) => {
    return await db.users.find(query).toArray();
  },
  create: async ({ username, password }) => {
    return await db.users.insertOne({ username, password });
  },
};
