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

async function authenticate(username, pwd) {
  if (checkMissing(username, pwd))
    return message("missing some required keys", true);

  const user = await userController.getByUsername(username);

  if (!user) return message(`${username} not existed`, true);

  if (!correctPassword(pwd, user.password))
    return message("username or password incorrect", true);

  const { password, ...restUser } = user;

  return message("Login sucessfully", false, restUser);
}

function message(content = "", error = false, data = {}) {
  return { msg: content, error, data };
}
