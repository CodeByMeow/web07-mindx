const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { db } = require("../config/db");

router.get("/", (req, res) => {
  const users = db.users;
  return res.json({
    msg: "list users",
    data: users,
  });
});

module.exports = router;
