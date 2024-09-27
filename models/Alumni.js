// models/Alumni.js
const mongoose = require('mongoose');

// Define the Alumni schema
const alumniSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true, match: /^[0-9]{10}$/ }, // Ensures phone numbers are 10 digits
});

module.exports = mongoose.model('Alumni', alumniSchema);
