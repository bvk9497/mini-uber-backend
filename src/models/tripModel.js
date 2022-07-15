const mongoose = require("mongoose");

const tripSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  x: {
    type: Number,
    required: true,
  },
  y: {
    type: Number,
    required: true,
  },
  booked: {
    type: Boolean,
  },
});

const tripModel = mongoose.model("trip", tripSchema);

module.exports = tripModel;
