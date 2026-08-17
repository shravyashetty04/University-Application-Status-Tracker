const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { User } = require('./db'); // Ensure this is pointing to your db.js

async function createAdmin() {
    try {
        // Connect to MongoDB using the same connection string from db.js
        // If it's already connected in db.js when imported, this might not be needed,
        // but it's safe to ensure connection.
        console.log("Connecting to database...");
        
        // Define admin details here
        const adminData = {
            username: 'admin@university.edu',
            password: process.env.ADMIN_PASSWORD,
            firstName: 'System',
            lastName: 'Administrator',
            role: 'admin'
        };

        // Check if admin already exists
        const existingAdmin = await User.findOne({ username: adminData.username });
        if (existingAdmin) {
            console.log(`Admin user ${adminData.username} already exists.`);
            process.exit(0);
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(adminData.password, 10);
        adminData.password = hashedPassword;

        // Create user
        await User.create(adminData);
        console.log(`\nSuccess! Admin account created.`);
        console.log(`Email: admin@university.edu`);
        console.log(`Password: (hidden for security)\n`);
        
        process.exit(0);
    } catch (error) {
        console.error("Error creating admin:", error);
        process.exit(1);
    }
}

createAdmin();
