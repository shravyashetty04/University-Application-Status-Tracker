const express = require('express');
const router = express.Router();
const zod = require("zod");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { User, Application } = require("../db");
const { JWT_SECRET } = require("../config");
const { authMiddleware } = require("../middleware");

// Zod schema for signup
const signupBody = zod.object({
    username: zod.string().email(),
    firstName: zod.string(),
    lastName: zod.string(),
    password: zod.string()
});

router.post("/signup", async (req, res) => {
    const { success } = signupBody.safeParse(req.body);
    if (!success) {
        return res.status(400).json({
            message: "Incorrect inputs"
        });
    }

    const existingUser = await User.findOne({
        username: req.body.username
    });

    if (existingUser) {
        return res.status(409).json({
            message: "Email already taken"
        });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = await User.create({
        username: req.body.username,
        password: hashedPassword,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    });

    const token = jwt.sign({ userId: user._id }, JWT_SECRET);

    res.json({
        message: "User created successfully",
        token: token
    });
});

// Zod schema for signin
const signinBody = zod.object({
    username: zod.string().email(),
    password: zod.string()
});

router.post("/signin", async (req, res) => {
    const { success } = signinBody.safeParse(req.body);
    if (!success) {
        return res.status(400).json({
            message: "Incorrect inputs"
        });
    }

    const user = await User.findOne({
        username: req.body.username
    });

    if (!user) {
        return res.status(401).json({
            message: "Invalid username or password"
        });
    }

    const isPasswordValid = await bcrypt.compare(req.body.password, user.password);

    if (!isPasswordValid) {
        return res.status(401).json({
            message: "Invalid username or password"
        });
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET);

    res.json({ token });
});

// Zod schema for update
const updateBody = zod.object({
    password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
});

router.put("/", authMiddleware, async (req, res) => {
    const { success } = updateBody.safeParse(req.body);
    if (!success) {
        return res.status(400).json({
            message: "Error while updating information"
        });
    }

    const updateData = { ...req.body };

    // If password is being updated, hash it
    if (updateData.password) {
        updateData.password = await bcrypt.hash(updateData.password, 10);
    }

    await User.updateOne({ _id: req.userId }, updateData);

    res.json({
        message: "Updated successfully"
    });
});

module.exports = router;

