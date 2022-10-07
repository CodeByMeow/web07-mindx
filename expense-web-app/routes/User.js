const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.get("/", async (_req, res) => {
  const listUser = await userController.index();
  return res.json({
    msg: "list users",
    data: listUser,
  });
});

router.post("/", async (req, res) => {
  const { username, password } = req.body;
  const inserted = await userController.create({ username, password });

  return res.status(201).json({
    msg: "new user was created",
    data: inserted,
  });
});

module.exports = router;
