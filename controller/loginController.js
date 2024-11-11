const Signup = require("../models/signupModel");
const jwt = require("jsonwebtoken");
const key = "uv";

const login = async (req, res) => {
  const { username, password } = req.body;
  console.log("username", username);
  // Validate required fields
  if (!username) {
    return res
      .status(400)
      .json({ message: "Username and password are required." });
  }

  try {
    // Find user by username
    const user = await Signup.findOne({ username });

    // Check if user exists
    if (!user) {
      return res.status(401).json({ message: "Invalid username or password." });
    }
  
    const token = jwt.sign({ username }, key);
    console.log(token);
    // Respond with success

    return res.status(200).json({ token, message: "Login successful" });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { login };
