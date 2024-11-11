const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gender: { type: String, required: true },
  email: { 
    type: String, 
    required: true, 
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/  // Basic email validation
  },
  phone: { 
    type: String, 
    required: true,
    match: /^[0-9]{10}$/
  },
  date: { type: Date, required: true },  // Using Date type for date
  time: { type: String, required: true }, // If time is stored as a string, ensure proper formatting
  doctor: { type: String, required: true },
  department: { type: String, required: true },
  message: { type: String, required: true }
});

module.exports = mongoose.model('Appointment', appointmentSchema);
