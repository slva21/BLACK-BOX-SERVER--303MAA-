const express = require("express");
const { BlackBox } = require("../models/blackbox");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const entry = new BlackBox({
      location: {
        longitude: req.body.long,
        latitude: req.body.lat,
      },
      orientation: {
        pitch: req.body.pitch,
        roll: req.body.roll,
      },
      temperature: req.body.temp,
    });

    await entry.save();

    res.status(201).send("BlackBox-201");
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;
