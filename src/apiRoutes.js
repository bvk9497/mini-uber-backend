const express = require("express");
const router = express.Router();

const Car = require("./models/cabModel");

router.post("/", async (req, res) => {
  const newCar = new Car(req.body);
  try {
    const data = await newCar.save();
    console.log("car added");
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

//get all cars
router.get("/allcars", async (req, res) => {
  try {
    const data = await Car.find();
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});
//Read

router.get("/", async (req, res) => {
  try {
    const data = await Car.find();
    //calculate distance and filter the data
    //Status true ==> Available
    const availableCars = (await data).filter(
      (item) => item.status === "active" && item.booked !== true
    );

    res.send(availableCars);
  } catch (error) {
    console.log(error.message);
  }
});

//Update booking details if booked
router.put("/booked/:id", async (req, res) => {
  try {
    const updatedCar = await Car.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { booked: req.body.booked } }
    );
    res.send(updatedCar);
  } catch (error) {
    console.log(error);
  }
});

//Update Cab status
router.put("/status/:id", async (req, res) => {
  try {
    const updatedCar = await Car.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } },
      { new: true }
    );
    res.send(updatedCar);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
