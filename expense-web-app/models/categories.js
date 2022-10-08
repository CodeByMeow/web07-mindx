const { db } = require("../config/db");

module.exports = {
  index: async () => {
    return await db.categories.find().toArray();
  },
};
