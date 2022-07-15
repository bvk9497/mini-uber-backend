const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./src/apiRoutes");
const riderrouter = require("./src/riderRoutes");
const triprouter = require("./src/tripRoutes");
require("./src/dbConnect");

app.use(cors());
app.use(express.json());
app.use("/car", router);
app.use("/rider", riderrouter);
app.use("/trip", triprouter);

app.listen(5000, () => {
  console.log("backend running");
});
