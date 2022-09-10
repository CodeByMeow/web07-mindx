const express = require("express");
const router = express.Router();

const studentRouter = require("./students");
const systemsRouter = require("./systems");
const logger = require("../middlewares/logger");

router.use(logger);
router.use("/students", studentRouter);
router.use("/system", systemsRouter);

module.exports = router;
