const createAppointment = require("../models/appointModel");

const getAppointments = async (req, res) => {
    try {
        // Fetch the appointment data from the model
        const appointments = await createAppointment.find();
        
        // Send the data back as a response
        res.status(200).json(appointments);
    } catch (error) {
        // Handle any errors that occur during the fetch operation
        console.error("Error fetching appointments:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = { getAppointments };
