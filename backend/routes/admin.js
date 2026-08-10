const express = require("express");
const router = express.Router();
const { Application, User } = require("../db");
const { authMiddleware } = require("../middleware");

// Middleware to check if user is admin
const adminMiddleware = async (req, res, next) => {
    try {
        const user = await User.findById(req.userId);
        if (!user || user.role !== 'admin') {
            return res.status(403).json({ message: "Access denied. Admin only." });
        }
        next();
    } catch (err) {
        res.status(500).json({ message: "Server error checking admin status" });
    }
};

// Apply auth and admin middleware to all admin routes
router.use(authMiddleware, adminMiddleware);

// Get all applications
router.get("/applications", async (req, res) => {
    try {
        const applications = await Application.find({}).populate('userId', 'firstName lastName username');
        res.json({ applications });
    } catch (error) {
        res.status(500).json({ message: "Error fetching applications" });
    }
});

// Update application status
router.put("/application/:id", async (req, res) => {
    try {
        const { status } = req.body;
        if (!['Pending', 'Approved', 'Rejected'].includes(status)) {
            return res.status(400).json({ message: "Invalid status" });
        }

        const application = await Application.findByIdAndUpdate(
            req.params.id, 
            { status },
            { new: true }
        );

        if (!application) {
            return res.status(404).json({ message: "Application not found" });
        }

        res.json({ message: "Application updated successfully", application });
    } catch (error) {
        res.status(500).json({ message: "Error updating application" });
    }
});

module.exports = router;
