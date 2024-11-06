require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Import routes
const adminRoutes = require('./temp_routes/adminRoutes');
const internshipRoutes = require('./temp_routes/internshipRoutes');
const adminDetailsRoutes = require('./temp_routes/adminDetailsRoutes');

const app = express();

// Middleware
app.use(cors({ origin: 'http://localhost:5173' })); // Allow requests only from your frontend port
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Use routes
app.use('/admin', adminRoutes); // Admin routes
app.use('/api/internships', internshipRoutes); // Internship routes
app.use('/api/admin-details', adminDetailsRoutes); // Admin details route with prefix

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ message: err.message || 'Something went wrong!' });
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
