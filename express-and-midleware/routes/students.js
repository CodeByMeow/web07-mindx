const express = require("express");
const routes = express.Router();
const students = [
  { username: "alice", apiKey: "alice@123" },
  { username: "bob", apiKey: "bob@123" },
  { username: "charlie", apiKey: "charlie@123" },
];

routes.get("/", (req, res) => {
  res.json(students);
});

routes.get("/:apikey", (req, res) => {
  const { apikey } = req.params;

  const idx = students.findIndex((student) => student.apiKey === apikey);
  if (idx === -1) {
    return res.status(404).json({
      mes: `Can't find a student with ${apikey}`,
    });
  }

  return res.json({ mes: "success", data: students[idx] });
});

module.exports = routes;
