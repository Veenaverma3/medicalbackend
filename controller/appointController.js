 // controllers/appointmentController.js
 const Appointment = require("../models/appointModel")
const createAppointment = async (req, res) => {
     const { name, email, gender, phone, date, time, doctor, department, message } = req.body;
    console.log("Data received:", req.body);

    // Check if all required fields are provided
    if (!name || !email || !gender || !phone || !date || !time || !doctor || !department || !message) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        // Create a new appointment instance
        const appointment = new Appointment({
            name,
            email,
            gender,
            phone,
            date,
            time,
            doctor,
            department,
            message
        });

        console.log("Appointment to be saved:", appointment);

        // Save the appointment to the database
        await appointment.save();

        // Send success response
        res.status(201).json({ message: 'Appointment registered successfully!', data: appointment });
    } catch (error) {
        // Handle errors and send failure response
        console.error("Error registering appointment:", error);
        res.status(500).json({ message: 'Error registering appointment', error: error.message });
    }
};

module.exports = {
    createAppointment
};
