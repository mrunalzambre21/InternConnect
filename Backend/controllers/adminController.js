const Admin = require('../temp_models/Admin');
const AdminDetails = require('../temp_models/adminDetails');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const sgMail = require('@sendgrid/mail');

// Ensure environment variables are available
if (!process.env.JWT_SECRET || !process.env.SENDGRID_API_KEY) {
  console.error('Missing JWT_SECRET or SENDGRID_API_KEY in environment variables');
}

// Configure SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Admin Signup with Email Verification
exports.adminSignup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: 'Admin already exists.' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create admin in the database with `isVerified` set to false
    const admin = new Admin({ name, email, password: hashedPassword, isVerified: false });
    await admin.save();

    // Create a verification token with JWT
    const token = jwt.sign({ adminId: admin._id ,adminName: admin.name }, process.env.JWT_SECRET, { expiresIn: '1h' });
    const verificationUrl = `http://localhost:5173/verify/email?token=${token}`;

    // Send verification email using SendGrid
    const msg = {
      to: email,
      from: 'mrunalzambre21@gmail.com', // Must be a verified sender on SendGrid
      subject: 'Verify Your Email for Admin Account',
      html: `<p>Welcome, ${name}! Please verify your email by clicking <a href="${verificationUrl}">this link</a>.</p>`,
    };
    await sgMail.send(msg);

    res.status(201).json({ message: 'Signup successful! Please verify your email.' });
  } catch (error) {
    console.error('Error in admin signup:', error);
    res.status(500).json({ message: 'Signup failed.' });
  }
};

// Email Verification
exports.verifyEmail = async (req, res) => {
  const { token } = req.query;

  console.log('Token received for verification:', token); // Log the token received

  try {
    // Verify the JWT token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Decoded Token:', decoded); // Log decoded token details

    const adminId = decoded.adminId;

    // Find the admin and set isVerified to true
    const admin = await Admin.findByIdAndUpdate(adminId, { isVerified: true }, { new: true });
    if (!admin) {
      return res.status(400).json({ message: 'Admin not found or already verified.' });
    }

    res.status(200).json({ message: 'Email verified successfully! You can now log in.' });
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      console.log('Token has expired');
      return res.status(400).json({ message: 'Token expired. Please request a new verification email.' });
    } else if (error.name === 'JsonWebTokenError') {
      console.log('Token is invalid');
      return res.status(400).json({ message: 'Invalid token. Verification failed.' });
    } else {
      console.error('Unexpected verification error:', error);
      return res.status(500).json({ message: 'Verification failed due to a server error.' });
    }
  }
};

// Admin Sign-in
exports.adminSignin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find admin by email
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({ message: 'Admin not found.' });
    }

    // Check if email is verified
    if (!admin.isVerified) {
      return res.status(403).json({ message: 'Please verify your email before signing in.' });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid password.' });
    }

    // Generate a token for the session
    const token = jwt.sign({ adminId: admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ message: 'Admin sign-in successful!', adminId: admin._id, token });
  } catch (error) {
    console.error('Error in admin sign-in:', error);
    res.status(500).json({ message: 'Sign-in failed.' });
  }
};

// Save Admin Details
exports.saveAdminDetails = async (req, res) => {
  const { name, email, phoneNumber, designation } = req.body;
  try {
    const adminDetails = new AdminDetails({ name, email, phoneNumber, designation });
    await adminDetails.save();
    res.status(201).json({ message: 'Admin details saved successfully!' });
  } catch (error) {
    console.error('Error in saving admin details:', error);
    res.status(500).json({ message: 'Failed to save admin details.' });
  }
};
