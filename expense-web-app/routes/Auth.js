const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

const { JWT_SECRET_KEY, JWT_EXPIRES_TIME, DEFAULT_USERNAME, DEFAULT_PASSWORD } =
  process.env;
const status = require("../config/statusConst");

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  if (!username || !password) {
    return res.status(400).json({
      msg: "Missing some required keys",
      status: status.MISSING,
    });
  }

  const data = {
    fullName: "Katinbox",
    role: "admin",
  };

  if (username === DEFAULT_USERNAME && password === DEFAULT_PASSWORD) {
    const token = jwt.sign(data, JWT_SECRET_KEY, {
      expiresIn: JWT_EXPIRES_TIME,
    });

    return res.json({
      msg: "Login sucessfully",
      token,
      status: status.OK,
    });
  }

  return res.json({
    msg: "Username or password is incorrect",
    status: status.FAILED,
  });
});

module.exports = router;
