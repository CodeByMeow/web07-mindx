const jwt = require("jsonwebtoken");

const {
  userController,
  checkMissing,
  correctPassword,
} = require("../controllers/userController");
const { JWT_SECRET_KEY, JWT_EXPIRES_TIME } = process.env;

module.exports = {
  login: async (username, password) => {
    const auth = await authenticate(username, password);
    if (auth.error) return auth;

    const token = jwt.sign(auth.data, JWT_SECRET_KEY, {
      expiresIn: JWT_EXPIRES_TIME,
    });

    return { ...auth, token, isAuthenticated: true };
  },
};

async function authenticate(username, password) {
  if (checkMissing(username, password))
    return message("missing some required keys", true);

  const user = await userController.getByUsername(username);

  if (!user) return message(`${username} not existed`, true);

  if (!correctPassword(password, user.password))
    return message("username or password incorrect", true);

  const data = {
    username,
  };

  return message("Login sucessfully", false, data);
}

function message(content = "", error = false, data = {}) {
  return { msg: content, error, data };
}
