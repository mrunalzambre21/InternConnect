const mongoose = require('mongoose');

const adminDetailsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  designation: { type: String, required: true }
});

const AdminDetails = mongoose.model('AdminDetails', adminDetailsSchema);
module.exports = AdminDetails;
