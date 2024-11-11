const Signup = require("../models/signupModel");
const jwt = require("jsonwebtoken");

const addsignup = async (req, res) => {
    const { username, password, email } = req.body;

    // Validate input fields
    if (!username || !password || !email) {
        return res.status(400).json({ message: "User Name, Password, and Email are mandatory." });

        
    }

    try {
        // Check if the username already exists
        const existingUser = await Signup.findOne({ username });

        if (existingUser) {
            return res.status(409).json({ message: "Username already exists." });
        }

        // Create a new user
        const user = await Signup.create({ username, password, email });




        // Respond with the created user details
        return res.status(201).json({ _id: user._id, username: user.username });
    } catch (error) {
        console.error("Error creating user:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = { addsignup };
