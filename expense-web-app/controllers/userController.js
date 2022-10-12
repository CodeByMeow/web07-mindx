const bcrypt = require("bcrypt");
const { ObjectId } = require("mongodb");
const user = require("../models/users");

const userController = {
  index: async () => {
    return await user.index();
  },
  create: async ({ username, password }) => {
    if (checkMissing(username, password))
      return { msg: `missing some key`, error: true };

    if (await isExisted(username))
      return { msg: `${username} existed`, error: true };
    const hashpwd = hashPassword(password);
    const { insertedId } = await user.create({ username, password: hashpwd });

    return insertedId;
  },
  getByUsername: async (username) => {
    return await user.getOne({ username });
  },

  getById: async (id) => {
    return await user.getOne({ _id: ObjectId(id) });
  },
};

function checkMissing(...args) {
  return args.some(function (item) {
    return !item;
  });
}

async function isExisted(username) {
  return await user.getOne({ username });
}

function hashPassword(password) {
  const salt = 10;
  return bcrypt.hashSync(password, salt);
}

function correctPassword(password, hash) {
  return bcrypt.compareSync(password, hash);
}

module.exports = {
  userController,
  checkMissing,
  correctPassword,
};
