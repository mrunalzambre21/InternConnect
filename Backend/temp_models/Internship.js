// models/Internship.js
const mongoose = require('mongoose');

const internshipSchema = new mongoose.Schema({
  jobRole: { type: String, required: true },
  description: { type: String, required: true },
  requirements: { type: String, required: true },
  location: { type: String, required: true },
  months: { type: Number, required: true },
  stipend: { type: String, required: true },
});

module.exports = mongoose.model('Internship', internshipSchema);
