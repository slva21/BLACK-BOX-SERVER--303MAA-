const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const BlackBox = require("./routes/blackbox");
const cors = require("cors");

require("dotenv/config");

mongoose.connect(
  process.env.mongoDB,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("connected to DB...")
);

app.use(
  bodyParser.json({
    limit: "10mb",
    extended: true,
  })
);

app.use(
  bodyParser.urlencoded({
    limit: "10mb",
    extended: true,
  })
);

app.use(cors());

app.use("/api/302MAA/blackbox", BlackBox);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
