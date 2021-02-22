const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  location: {
    longitude: {
      type: String,
      required: true,
    },
    latitude: {
      type: String,
      required: true,
    },
  },
  orientation: {
    pitch: {
      type: String,
      required: true,
    },
    roll: {
      type: String,
      required: true,
    },
  },

  temperature: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    default: new Date(Date.now()).toLocaleDateString(),
  },
});

module.exports.BlackBox = mongoose.model("BlackBox", schema);
