const express = require('express');
const router = express.Router();
const Internship = require('../temp_models/Internship');

// Create a new internship
router.post('/', async (req, res) => {
  try {
    const internship = new Internship(req.body);
    await internship.save();
    res.status(201).json({ message: 'Internship posted successfully', internship });
  } catch (error) {
    console.error('Error creating internship:', error);
    res.status(400).json({ message: 'Failed to create internship', error: error.message });
  }
});

// Get all internships
router.get('/', async (req, res) => {
  try {
    const internships = await Internship.find();
    res.status(200).json(internships);
  } catch (error) {
    console.error('Error fetching internships:', error);
    res.status(500).json({ message: 'Failed to fetch internships', error: error.message });
  }
});

// Update an internship
router.put('/:id', async (req, res) => {
  try {
    const internship = await Internship.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!internship) {
      return res.status(404).json({ message: 'Internship not found' });
    }
    res.status(200).json({ message: 'Internship updated successfully', internship });
  } catch (error) {
    console.error('Error updating internship:', error);
    res.status(400).json({ message: 'Failed to update internship', error: error.message });
  }
});

// Delete an internship
router.delete('/:id', async (req, res) => {
  try {
    const internship = await Internship.findByIdAndDelete(req.params.id);
    if (!internship) {
      return res.status(404).json({ message: 'Internship not found' });
    }
    res.status(200).json({ message: 'Internship deleted successfully' });
  } catch (error) {
    console.error('Error deleting internship:', error);
    res.status(500).json({ message: 'Failed to delete internship', error: error.message });
  }
});

module.exports = router;
