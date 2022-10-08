const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

const {
  userController,
  checkMissing,
  correctPassword,
} = require("../controllers/userController");
const { JWT_SECRET_KEY, JWT_EXPIRES_TIME } = process.env;

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  if (checkMissing(username, password))
    return res.status(400).json({
      msg: "Missing some required keys",
    });

  const user = await userController.getByUsername(username);
  if (!user) return res.status(400).json({ msg: `${username} not existed` });
  if (!correctPassword(password, user.password))
    return res.status(400).json({ msg: "username or password incorrect" });

  const token = jwt.sign(user, JWT_SECRET_KEY, {
    expiresIn: JWT_EXPIRES_TIME,
  });

  return res.json({
    msg: "Login sucessfully",
    token,
    isAuthenticated: true,
  });
});

module.exports = router;
