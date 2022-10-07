const bcrypt = require("bcrypt");
const user = require("../models/users");

const userController = {
  index: async () => {
    return await user.getUser();
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
};

function checkMissing(...args) {
  return args.some((item) => !item);
}

async function isExisted(username) {
  const rs = await user.getUser({ username: username });
  return rs.length > 0;
}

function hashPassword(password) {
  const salt = 10;
  return bcrypt.hashSync(password, salt);
}

module.exports = userController;
