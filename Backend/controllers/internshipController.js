const Internship = require('../temp_models/Internship');

// Post Internship
exports.postInternship = async (req, res) => {
  const { adminId, title, description, requirements, location, duration, stipend } = req.body;

  try {
    const internship = new Internship({
      adminId,
      title,
      description,
      requirements,
      location,
      duration,
      stipend,
    });

    await internship.save();
    res.status(201).json({ message: 'Internship posted successfully!' });
  } catch (error) {
    console.error('Error in posting internship:', error);
    res.status(500).json({ message: 'Failed to post internship.' });
  }
};
