const mockData = require("../config/data");

const getAllCategories = () => {
  const responseData = mockData.categories;
  return responseData;
};

module.exports = {
  getAllCategories,
};
