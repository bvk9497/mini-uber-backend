const mongoose = require("mongoose");

const cabSchema = mongoose.Schema({
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
  status: {
    type: String,
    // required: true,
  },
});

const cabModel = mongoose.model("cab", cabSchema);

module.exports = cabModel;
