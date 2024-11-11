const express = require('express');
const connectDB = require("./config/dbConnection");
const cors = require("cors");
const {createContact} = require("./controller/contactController")
  

const router = require("./Router/router");
const login = require('./controller/loginController');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
 connectDB();

// Middlewarenode
app.use(cors());
app.use(express.json()); // For parsing application/json


app.use(router);



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
