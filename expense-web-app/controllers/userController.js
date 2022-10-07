const bcrypt = require("bcrypt");
const user = require("../models/users");

const userController = {
  index: async () => {
    return await user.list();
  },
  create: async ({ username, password }) => {
    if (checkMissing(username, password)) return false;
    const hashpwd = hashPassword(password);
    const { insertedId } = await user.create({ username, password: hashpwd });

    return insertedId;
  },
};

function checkMissing(...args) {
  return args.some((item) => !item);
}

function hashPassword(password) {
  const salt = 10;
  return bcrypt.hashSync(password, salt);
}

module.exports = userController;
