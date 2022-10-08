const category = require("../models/categories");

module.exports = {
  index: async () => {
    return await category.index();
  },
};
