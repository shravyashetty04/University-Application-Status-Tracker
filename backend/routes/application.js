const express = require("express");
const router = express.Router();
const { Application } = require("../db");
const { authMiddleware } = require("../middleware");

// Submit application
router.post("/", authMiddleware, async (req, res) => {
  const { course } = req.body;

  const application = await Application.create({
    userId: req.userId,
    course
  });

  res.json({
    message: "Application submitted",
    application
  });
});

// Get application status
router.get("/", authMiddleware, async (req, res) => {
  const application = await Application.findOne({ userId: req.userId });

  res.json({
    application
  });
});

module.exports = router;
