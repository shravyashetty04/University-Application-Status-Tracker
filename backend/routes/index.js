// backend/user/index.js
const express = require('express');
const userRouter = require("./user");
const applicationRouter=require("./application")

const router = express.Router();

router.use("/user", userRouter);
router.use("/application",applicationRouter);

module.exports = router;