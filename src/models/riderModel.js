const mongoose = require("mongoose");

const riderSchema = mongoose.Schema({
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

const riderModel = mongoose.model("rider", riderSchema);

module.exports = riderModel;
