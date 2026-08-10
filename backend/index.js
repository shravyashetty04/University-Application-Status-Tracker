// backend/index.js
const express = require('express');
const cors = require("cors");
const rootRouter = require("./routes/index");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", rootRouter);

const setupAdminJS = require('./admin/setup');

// We have to wait for AdminJS to be setup before listening
const start = async () => {
  await setupAdminJS(app);

  app.listen(3000, () => {
      console.log("Server is running on port 3000");
  });
};

start();