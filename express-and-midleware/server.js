const express = require("express");
const cors = require("cors");
const router = require("./routes");

const app = express();
const PORT = 3001;
app.use(express.json());
app.use(cors());
app.use("/api/v1/", router);

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
