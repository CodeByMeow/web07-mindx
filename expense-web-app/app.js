const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1";
const config = {
  connectTimeoutMS: 5000,
  useUnifiedTopology: true,
};

async function mongodb() {
  console.time("connect");
  try {
    await MongoClient.connect(url, config);
  } catch (error) {
    console.error(error);
  } finally {
    console.timeEnd("connect");
  }
}
mongodb();
