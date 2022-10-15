const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.SERVER_PORT;
const { connectToMongo } = require("./config/db");

connectToMongo();

app.use(express.json());
app.use(cors("*"));

const routes = require("./routes");
app.use("/api/v1", routes);

app.use((error, _req, res) => {
  console.log(error.stack);
  res.status(500).send(error);
});

app.listen(PORT, () => {
  console.log(`server is running at port: ${PORT}`);
});
