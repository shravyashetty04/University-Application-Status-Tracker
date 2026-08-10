// backend/db.js
const mongoose = require('mongoose');

mongoose.connect("mongodb://shravyashetty415_db_user:Tooh6OkqQK0sbhQI@ac-twbmz1p-shard-00-00.fc3bywh.mongodb.net:27017,ac-twbmz1p-shard-00-01.fc3bywh.mongodb.net:27017,ac-twbmz1p-shard-00-02.fc3bywh.mongodb.net:27017/users?ssl=true&replicaSet=atlas-n27ewq-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0")
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