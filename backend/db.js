// backend/db.js
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Connected to MongoDB successfully"))
.catch(err => console.error("Failed to connect to MongoDB:", err.message));
// Create a Schema for Users
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    role: {
        type: String,
        enum: ['student', 'admin'],
        default: 'student'
    }
});
// Create a schema for application
const applicationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  course: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ["Pending", "Approved", "Rejected"],
    default: "Pending"
  }
});
const Application=mongoose.model("Application",applicationSchema);
const User=mongoose.model("User",userSchema);

module.exports = {
	User,
    Application
};