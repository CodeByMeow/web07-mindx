const { db } = require("../config/db");
module.exports = {
  index: async (query = {}) => {
    return await db.users.find(query).toArray();
  },
  create: async ({ username, password }) => {
    return await db.users.insertOne({ username, password });
  },
  getOne: async (query = {}) => {
    return await db.users.findOne(query);
  },
};
