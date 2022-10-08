const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const auth = await authController.login(username, password);
  if (auth.error) return res.status(400).json(auth);

  return res.json(auth);
});

module.exports = router;
