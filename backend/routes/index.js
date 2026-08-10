// backend/user/index.js
const express = require('express');
const userRouter = require("./user");
const applicationRouter=require("./application")
const adminRouter = require("./admin");

const router = express.Router();

router.use("/user", userRouter);
router.use("/application",applicationRouter);
router.use("/admin", adminRouter);

module.exports = router;