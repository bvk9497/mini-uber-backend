const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://bvk:bvk9497@mongo.3kvb1.mongodb.net/uber?retryWrites=true&w=majority"
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to mongodb")
});
