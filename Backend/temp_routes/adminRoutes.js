const express = require('express');
const router = express.Router();
const { 
  adminSignup, 
  adminSignin, 
  saveAdminDetails, 
  verifyEmail 
} = require('../controllers/adminController');

// Admin Signup
router.post('/signup', adminSignup);

// Admin Sign-in
router.post('/signin', adminSignin);

// Email Verification
router.get('/verify', verifyEmail);

// Save Admin Details
router.post('/details', saveAdminDetails);

module.exports = router;
