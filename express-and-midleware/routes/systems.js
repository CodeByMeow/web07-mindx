const express = require("express");
const routes = express.Router();

const data = [
  { user: "alice", student: 5, teacher: 1, subject: 0 },
  { user: "bob", student: 10, teacher: 1, subject: 8 },
];
routes.get("/statistic", (req, res) => {
  res.json({
    data,
  });
});

module.exports = routes;
