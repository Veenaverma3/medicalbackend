const mongoose = require("mongoose");

const connectDB = async () => {
    try{
        const connectDB = await mongoose.connect('mongodb://localhost:27017/Appointment');
         console.log(
            "Database Connected successfuly",
        );
    } catch (err) {
        console.log("err");
            process.exit(1);
    }
    };

    module.exports = connectDB;
