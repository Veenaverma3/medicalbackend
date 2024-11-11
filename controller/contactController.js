const Contact = require('../models/contactModel');

const createContact = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        // Log the received data for debugging
        console.log("Received data:", { name, email, subject, message });

        // Validate the required fields
        if (!name || !email || !subject || !message) {
            return res.status(400).json({ error: 'Name, email, subject, and message are required' });
        }

        // Create a new contact instance with the received data
        const newContact = new Contact({
            name,
            email,
            subject,
            message
        });

        // Save the new contact to the database
        await newContact.save();

        // Respond with success message
        res.status(201).json({ message: 'Contact created successfully', contact: newContact });
    } catch (error) {
        console.error('Error creating contact:', error); // Log the error for debugging
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = { createContact };
