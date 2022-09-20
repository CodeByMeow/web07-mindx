const express = require("express");
const router = express.Router();
const categoriesController = require("../controllers/categoryController");

router.get("/", (req, res) => {
  const data = categoriesController.getAllCategories();
  return res.status(200).json({
    msg: "Get successful categories",
    data,
  });
});

module.exports = router;
