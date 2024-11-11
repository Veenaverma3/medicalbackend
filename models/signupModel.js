// create Schema
const mongoose = require("mongoose");

const SignupSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true,"Plz add the user"]
    },

    email: {
        type: String,
        required:false,
        lowercase:true
    },
 
    password: {
        type: String,
        required: [true,"Enter password"]
    },
 
})
module.exports= mongoose.model("Signup", SignupSchema);

