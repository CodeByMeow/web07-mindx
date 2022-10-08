const express = require("express");
const router = express.Router();
const categoriesController = require("../controllers/categoryController");

router.get("/", (_req, res) => {
  const data = categoriesController.index();
  return res.status(200).json({
    msg: "Get successful categories",
    data,
  });
});

module.exports = router;
