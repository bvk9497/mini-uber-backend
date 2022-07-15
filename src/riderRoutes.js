const express = require("express");
const router = express.Router();

const rider = require("./models/riderModel");
//Cabs
//Create
router.post("/", async (req, res) => {
  const newRider = new rider(req.body);
  try {
    const data = await newRider.save();
    console.log("rider added");
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

//Read
//get all users
router.get("/allriders", async (req, res) => {
  try {
    const data = await rider.find();
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

//Update
router.put("/:id", async (req, res) => {
  try {
    const updatedRider = await rider.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } },
      { new: true }
    );
    res.send(updatedRider);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
