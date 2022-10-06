const express = require("express");

const categoriesRouter = require("./Categories");
const authRouter = require("./Auth");
const userRouter = require("./User");
const router = express.Router();
const authMdw = require("../middlewares/auth");

router.use("/auth", authRouter);
router.use("/categories", authMdw, categoriesRouter);
router.use("/users", userRouter);

module.exports = router;
