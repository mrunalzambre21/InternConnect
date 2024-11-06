const express = require('express');
const router = express.Router();
const AdminDetails = require('../temp_models/adminDetails');

router.post('/api/admin/details', async (req, res) => {
  const { name, email, phone, designation } = req.body;

  const newAdminDetails = new AdminDetails({
    name,
    email,
    phone,
    designation
  });

  try {
    const savedDetails = await newAdminDetails.save();
    res.status(201).json(savedDetails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
