const express = require("express");
const router = express.Router();

const trip = require("./models/tripModel");
//Cabs
//Create
router.post("/", async (req, res) => {
  const newtrip = new trip(req.body);
  try {
    const data = await newtrip.save();
    console.log("trip added");
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

//Read
//get all trips
router.get("/alltrips", async (req, res) => {
  try {
    const data = await trip.find();
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

//Update
router.put("/:id", async (req, res) => {
  try {
    const updatedtrip = await trip.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } },
      { new: true }
    );
    res.send(updatedtrip);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
